import React, {Component} from 'react';
import {Text, View} from 'native-base';
import {I18nManager, Modal, SafeAreaView} from 'react-native';
I18nManager.allowRTL(false);

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducers from '../Reducer/';

import Home from '../Containers/SignedIn/Home';
import Desafios from '../Containers/SignedIn/Desafios';
import Ranking from '../Containers/SignedIn/Ranking';

import Login from '../Containers/SignedOut/login';
import SignUp from '../Containers/SignedOut/signUp';
import Session from '../Containers';

import IconWithBadge from '../Components/IconWithBadge';
import {Colors} from '../Themes';

const HomeStack = createStackNavigator(
  {
    Home: {screen: Home},
    Desafios: {screen: Desafios},
    Ranking: {screen: Ranking},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    initialRouteKey: 'Home',
    navigationOptions: ({navigation}) => {
      let tabBarVisible = false;
      let routeName = navigation.state.routes[navigation.state.index].routeName;
      if (['Home', 'Desafios', 'Ranking'].indexOf(routeName) >= 0) {
        tabBarVisible = true;
      }
      return {
        gesturesEnabled: false,
        headerVisible: false,
        header: null,
        tabBarVisible,
      };
    },
  },
);

const DesafiosStack = createStackNavigator(
  {
    Desafios: {screen: Desafios},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Desafios',
    initialRouteKey: 'Desafios',
    navigationOptions: ({navigation}) => {
      let tabBarVisible = false;
      let routeName = navigation.state.routes[navigation.state.index].routeName;
      if (['Home', 'Desafios', 'Ranking'].indexOf(routeName) >= 0) {
        tabBarVisible = true;
      }
      return {
        gesturesEnabled: false,
        headerVisible: false,
        header: null,
        tabBarVisible,
      };
    },
  },
);

const RankingStack = createStackNavigator(
  {
    Ranking: {screen: Ranking},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Ranking',
    initialRouteKey: 'Ranking',
    navigationOptions: ({navigation}) => {
      let tabBarVisible = false;
      let routeName = navigation.state.routes[navigation.state.index].routeName;
      if (['Home', 'Desafios', 'Ranking'].indexOf(routeName) >= 0) {
        tabBarVisible = true;
      }
      return {
        gesturesEnabled: false,
        headerVisible: false,
        header: null,
        tabBarVisible,
      };
    },
  },
);

const LoggedInStackMain = createBottomTabNavigator(
  {
    Home: HomeStack,
    Desafios: DesafiosStack,
    Ranking: RankingStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarLabel: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        switch (routeName) {
          case 'Home':
            return (
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 11,
                  color: tintColor,
                  fontFamily: focused ? 'OpenSans-Bold' : 'OpenSans-Regular',
                }}>
                Início
              </Text>
            );
          case 'Desafios':
            return (
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 11,
                  color: tintColor,
                  fontFamily: focused ? 'OpenSans-Bold' : 'OpenSans-Regular',
                }}>
                Desafios
              </Text>
            );
          case 'Ranking':
            return (
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 11,
                  color: tintColor,
                  fontFamily: focused ? 'OpenSans-Bold' : 'OpenSans-Regular',
                }}>
                Ranking
              </Text>
            );
          default:
            null;
        }
      },
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Desafios':
            iconName = 'home';
            break;
          case 'Ranking':
            iconName = 'home';
            break;
          default:
            iconName = 'circle';
            break;
        }
        return (
          <IconWithBadge
            badgeCount={0}
            name={iconName}
            type="SimpleLineIcons"
            style={{color: tintColor, fontSize: focused ? 22 : 18}}
            sizeBadge={focused ? 18 : 16}
            size={focused ? 22 : 18}
            color={tintColor}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: Colors.drawer,
      activeBackgroundColor: Colors.primary,
      inactiveBackgroundColor: Colors.primary,
    },
  },
);

const LoggedOutStackMain = createStackNavigator(
  {
    Login: {screen: Login},
    SignUp: {screen: SignUp},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
    navigationOptions: ({navigation}) => ({
      gesturesEnabled: false,
    }),
  },
);

const DrawerNavigationMain = createDrawerNavigator(
  {
    LoggedInStackMain: {screen: LoggedInStackMain},
  },
  {
    gesturesEnabled: false,
    drawerLockMode: 'locked-closed',
  },
);

export const Navigator = createStackNavigator(
  {
    session: {screen: Session},
    signedOutStack: {screen: LoggedOutStackMain},
    signedInStack: {screen: DrawerNavigationMain},
  },
  {
    headerMode: 'none',
    initialRouteName: 'session',
    gesturesEnabled: false,
  },
);

const navReducer = createNavigationReducer(Navigator);
reducers.nav = navReducer;
const appReducer = combineReducers(reducers);
const middleware = createReactNavigationReduxMiddleware(state => state.nav);
const App = createReduxContainer(Navigator, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);
const logger = createLogger();
const store = createStore(
  appReducer,
  // applyMiddleware(logger, thunk, middleware),
  applyMiddleware(thunk, middleware),
);

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <AppWithNavigationState />
        </SafeAreaView>
      </Provider>
    );
  }
}
