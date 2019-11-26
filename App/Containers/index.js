import React, {Component} from 'react';
import {StatusBar, Platform} from 'react-native';
import {connect} from 'react-redux';
import {View} from 'native-base';
import {StackActions, NavigationActions} from 'react-navigation';
import {isLoggedUser, getLoggedUser} from '../Services/user';
import {loginInformation} from '../Reducer/auth/actions';

class Session extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.authData.type === 'LOGIN') {
      this.changeRoot('signedInStack');
    }
  }

  componentDidMount() {
    this.getUserData();
  }

  async getUserData() {
    try {
      let userIsLogged = await isLoggedUser()
        .then(userIsLogged => userIsLogged)
        .catch(() => false);
      if (!userIsLogged) {
        return this.changeRoot('signedOutStack');
      }
      let user = await getLoggedUser()
        .then(user => user)
        .catch(err => {
          throw err;
        });
      this.props.loginInformation(user);
    } catch (err) {
      this.changeRoot('signedOutStack');
    }
  }

  changeRoot(root) {
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({routeName: root})],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    StatusBar.setBarStyle('dark-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      // StatusBar.setTranslucent(true);
    }
    return <View />;
  }
}

const mapDispatchToProps = dispatch => ({
  loginInformation: info => {
    dispatch(loginInformation(info));
  },
});

const mapStateToProps = state => {
  return {authData: state.auth, isLogged: state.auth.isLoggedIn};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Session);
