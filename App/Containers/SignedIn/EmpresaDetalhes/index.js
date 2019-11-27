import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
  BackHandler,
  FlatList,
  Image,
} from 'react-native';
import {
  Container,
  Button,
  Icon,
  Right,
  Header,
  Left,
  Body,
  Title,
  Content,
} from 'native-base';
import {connect} from 'react-redux';
import styles from './styles';
import {Colors, Fonts, Metrics} from '../../../Themes';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empresa: !props.navigation.state.params
        ? {}
        : props.navigation.state.params,
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', function() {
      return true;
    });
  }

  random_rgba() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return (
      'rgba(' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      1 +
      ')'
    );
  }

  render() {
    StatusBar.setBarStyle('dark-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      // StatusBar.setTranslucent(true);
    }

    return (
      <Container style={styles.main}>
        <Content style={styles.body}>
          <View style={styles.headerIconContainer}>
            <TouchableOpacity
              style={styles.headerIconButton}
              onPress={() => this.props.navigation.goBack()}>
              <Icon
                name="chevron-down"
                type="MaterialCommunityIcons"
                style={styles.headerIcon}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={{
              uri: !this.state.empresa.image
                ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIKFT5gCpJMZFUwwsy2An-e13ie0oiKZytVFLpHcMURRzmDjDrA&s'
                : this.state.empresa.image,
            }}
            resizeMode={'cover'}
            style={{width: '100%', height: Metrics.HEIGHT * 0.4}}
          />
          <View style={{padding: 20}}>
            <Text
              style={{
                color: Colors.darktext,
                fontFamily: 'OpenSans-Bold',
                fontWeight: 'bold',
                fontSize: Fonts.moderateScale(20),
              }}>
              {this.state.empresa.name ? this.state.empresa.name : 'Media Corp'}
            </Text>
            <Text
              style={{
                color: Colors.darktext,
                fontFamily: 'OpenSans-Regular',
                lineHeight: Fonts.moderateScale(20),
                fontSize: Fonts.moderateScale(14),
              }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Text>
          </View>
          <FlatList
            data={['PHP', 'JAVASCRIPT', 'JAVA', 'NODEJS']}
            horizontal
            keyExtractor={item => item}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Cursos')}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  height: 40,
                  paddingLeft: 10,
                  marginLeft: 10,
                  paddingRight: 10,
                  marginRight: 10,
                  maxWidth: 200,
                  backgroundColor: this.random_rgba(),
                }}>
                <Text
                  adjustsFontSizeToFit={true}
                  allowFontScaling={true}
                  numberOfLines={1}
                  style={{
                    color: 'white',
                    fontFamily: 'OpenSans-Bold',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: Fonts.moderateScale(18),
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
          <View style={{height: 50}} />
        </Content>
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
)(Page);
