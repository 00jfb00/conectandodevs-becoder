import React, {Component} from 'react';
import {
  View,
  Platform,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Image,
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
          name: 'Váriaveis de ambiemte do PHP',
          tag: 'PHP',
          from: 'Kroton Educacional',
          image:
            'data:image/png;base64,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',
          status: 0,
        },
        {
          id: 2,
          name: 'Multiprocessamento em Java',
          tag: 'JAVA',
          from: 'Plus-IT Consulting',
          image:
            'data:image/jpeg;base64,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',
          status: 1,
        },
        {
          id: 3,
          name: 'Construindo seu primeiro App',
          tag: 'REACTNATIVE',
          from: 'RocketSeat',
          image:
            'data:image/png;base64,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',
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
                  height: Dimensions.get('window').height * 0.3,
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
              <View style={{padding: 10, paddingBottom: 0}}>
                <Text
                  style={{
                    color: Colors.darktext,
                    fontFamily: 'OpenSans-Bold',
                    fontSize: Fonts.moderateScale(14),
                  }}>
                  Trilhas
                </Text>
              </View>
              <FlatList
                horizontal
                keyExtractor={item => `item-${item.id}`}
                data={this.state.courses}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#f5f5f5',
                      width: 200,
                      height: 150,
                      margin: 20,
                      marginTop: 10,
                      marginRight:
                        index < this.state.courses.length - 1 ? 0 : 20,
                      elevation: 2,
                      shadowOffset: {width: -3, height: -5},
                      shadowColor: 'black',
                      shadowOpacity: 0.4,
                      borderColor: Colors.lighttxt,
                      overflow: 'hidden',
                      borderWidth: 2,
                      borderRadius: 5,
                    }}>
                    <View
                      style={{
                        position: 'absolute',
                        zIndex: 9999,
                        top: 10,
                        right: 0,
                        height: 20,
                        width: 100,
                        maxWidth: 200,
                        backgroundColor: 'green',
                      }}
                    />
                    <Image
                      source={{uri: item.image}}
                      style={{width: '100%', height: 100}}
                      resizeMode="cover"
                    />
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        height: 46,
                        width: '100%',
                        borderTopWidth: 2,
                        borderColor: Colors.lighttxt,
                      }}>
                      <Text
                        style={{
                          color: Colors.darktext,
                          fontFamily: 'OpenSans-Bold',
                          textAlign: 'center',
                          fontWeight: 'bold',
                          fontSize: Fonts.moderateScale(12),
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          color: Colors.darktext,
                          fontFamily: 'OpenSans-Regular',
                          fontSize: Fonts.moderateScale(10),
                        }}>
                        {item.from}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
              <View style={{padding: 10, paddingBottom: 0}}>
                <Text
                  style={{
                    color: Colors.darktext,
                    fontFamily: 'OpenSans-Bold',
                    fontSize: Fonts.moderateScale(14),
                  }}>
                  Prêmios
                </Text>
              </View>
              <FlatList
                horizontal
                keyExtractor={item => `item-${item.id}`}
                data={this.state.courses}
                renderItem={({item}) => (
                  <View
                    style={{
                      backgroundColor: '#e5e5e5',
                      width: 150,
                      height: 150,
                      margin: 20,
                      marginTop: 10,
                      elevation: 2,
                      shadowOffset: {width: 3, height: 5},
                      shadowColor: 'black',
                      shadowOpacity: 0.4,
                      borderColor: Colors.lighttxt,
                      borderWidth: 2,
                      borderRadius: 5,
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
