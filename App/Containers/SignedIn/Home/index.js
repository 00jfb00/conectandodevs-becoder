import React, {Component} from 'react';
import {
  View,
  Platform,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  FlatList,
} from 'react-native';
import {Container, Icon, Content, Text} from 'native-base';
import {connect} from 'react-redux';
import Drawer from 'react-native-drawer';
import MyControlPanel from './ControlPanel';
import tweens from './tweens';
import styles from './styles';
import {Fonts, Images, Colors, Metrics} from '../../../Themes/';
import Carousel from '../../../Components/Carousel';

const drawerStyles = {
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 0,
  },
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerType: 'static',
      openDrawerOffset: 50,
      closedDrawerOffset: 0,
      panOpenMask: 0.1,
      relativeDrag: false,
      panThreshold: 0.25,
      tweenHandlerOn: false,
      tweenDuration: 350,
      tweenEasing: 'linear',
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: true,
      negotiatePan: false,
      side: 'right',
      courses: [
        {
          id: 1,
          name: 'Curso de PHP',
          tag: 'PHP',
          status: 0,
        },
        {
          id: 2,
          name: 'Curso de MySQL',
          tag: 'MYSQL',
          status: 1,
        },
        {
          id: 3,
          name: 'Curso de ReactJS',
          tag: 'REACTJS',
          status: 3,
        },
      ],
    };
  }

  setDrawerType(type) {
    this.setState({
      drawerType: type,
    });
  }

  tweenHandler(ratio) {
    if (!this.state.tweenHandlerPreset) {
      return {};
    }
    return tweens[this.state.tweenHandlerPreset](ratio);
  }

  openDrawer() {
    this.drawer.open();
  }

  render() {
    StatusBar.setBarStyle('dark-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      // StatusBar.setTranslucent(true);
    }

    const controlPanel = (
      <MyControlPanel
        navigation={this.props.navigation}
        closeDrawer={() => {
          this.drawer.close();
        }}
      />
    );

    return (
      <Container style={styles.container}>
        <Drawer
          ref={c => (this.drawer = c)}
          type={this.state.drawerType}
          animation={this.state.animation}
          openDrawerOffset={this.state.openDrawerOffset}
          closedDrawerOffset={this.state.closedDrawerOffset}
          panOpenMask={this.state.panOpenMask}
          panCloseMask={this.state.panCloseMask}
          relativeDrag={this.state.relativeDrag}
          panThreshold={this.state.panThreshold}
          content={controlPanel}
          styles={drawerStyles}
          disabled={this.state.disabled}
          tweenHandler={this.tweenHandler.bind(this)}
          tweenDuration={this.state.tweenDuration}
          tweenEasing={this.state.tweenEasing}
          acceptDoubleTap={this.state.acceptDoubleTap}
          acceptTap={this.state.acceptTap}
          acceptPan={this.state.acceptPan}
          tapToClose={this.state.tapToClose}
          negotiatePan={this.state.negotiatePan}
          changeVal={this.state.changeVal}
          side={this.state.side}>
          <View style={styles.main}>
            <Content style={styles.body}>
              <View style={styles.headerIconContainer}>
                <TouchableOpacity
                  style={styles.headerIconButton}
                  onPress={() => this.openDrawer()}>
                  <Icon
                    name="menu"
                    type="SimpleLineIcons"
                    style={styles.headerIcon}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '100%',
                  height: Dimensions.get('window').height * 0.4,
                  backgroundColor: 'white',
                }}>
                <Carousel
                  images={[
                    'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
                    'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
                    'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
                  ]}
                />
              </View>
              <FlatList
                horizontal
                ListHeaderComponent={(<View><Text>Trilha</Text></View>)}
                keyExtractor={item => `item-${item.id}`}
                data={this.state.courses}
                renderItem={({item}) => (
                  <View
                    style={{
                      backgroundColor: 'red',
                      width: 150,
                      height: 150,
                      margin: 20,
                    }}
                  />
                )}
              />
              <FlatList
                horizontal
                ListHeaderComponent={(<View><Text>Cursos Ganhos</Text></View>)}
                keyExtractor={item => `item-${item.id}`}
                data={this.state.courses}
                renderItem={({item}) => (
                  <View
                    style={{
                      backgroundColor: 'blue',
                      width: 150,
                      height: 150,
                      margin: 20,
                    }}
                  />
                )}
              />
            </Content>
          </View>
        </Drawer>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => {
  return {
    user: state.auth.userData,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
