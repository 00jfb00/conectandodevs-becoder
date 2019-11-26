import React, {Component} from 'react';
import {
  View,
  Platform,
  TouchableOpacity,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {
  Container,
  Icon,
  Right,
  Header,
  Left,
  Body,
  Content,
  Spinner,
} from 'native-base';
import {connect} from 'react-redux';
import Drawer from 'react-native-drawer';
import MyControlPanel from './ControlPanel';
import tweens from './tweens';
import styles from './styles';
import {Fonts, Images, Colors, Metrics} from '../../../Themes/';

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
            <Header style={styles.header}>
              <Left style={styles.left} />
              <Body style={styles.headerBody}>
                <Image
                  source={Images.logoAgv}
                  resizeMode="contain"
                  style={{height: 45}}
                />
              </Body>
              <Right style={styles.right}>
                <TouchableOpacity onPress={() => this.openDrawer()}>
                  <Icon name="ios-menu" style={styles.headerIcon} />
                </TouchableOpacity>
              </Right>
            </Header>
            <Content style={styles.body} />
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
