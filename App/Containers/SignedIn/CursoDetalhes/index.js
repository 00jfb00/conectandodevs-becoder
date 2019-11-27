import React, {Component} from 'react';
import {
  Dimensions,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
  BackHandler,
  Image,
  FlatList,
} from 'react-native';
import {Container, Icon, Content, Text} from 'native-base';
import {connect} from 'react-redux';
import styles from './styles';
import {Colors, Fonts, Images, Metrics} from '../../../Themes';
import {TabView, SceneMap} from 'react-native-tab-view';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: props.navigation.state.params,
      index: 0,
      routes: [
        {key: 'description', title: 'Descrição'},
        {key: 'contents', title: 'Conteúdos'},
      ],
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', function() {
      return true;
    });
  }

  FirstRoute = () => (
    <View style={{flex: 1, padding: 20}}>
      <Text
        style={{
          color: Colors.darktext,
          fontFamily: 'OpenSans-Regular',
          lineHeight: Fonts.moderateScale(20),
          fontSize: Fonts.moderateScale(14),
        }}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </Text>
    </View>
  );

  SecondRoute = () => (
    <View style={{flex: 1, padding: 20}}>
      <FlatList
        data={[
          {
            id: 1,
            type: 'file-video-o',
            title: 'Aula 1',
          },
          {
            id: 2,
            type: 'file-video-o',
            title: 'Aula 2',
          },
          {
            id: 3,
            type: 'file-pdf-o',
            title: 'Aula 3',
          },
        ]}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Conteudo', {
                url:
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
              })
            }
            style={{paddingTop: 20}}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon
                  name={item.type}
                  type={'FontAwesome'}
                  style={{
                    fontSize: Fonts.moderateScale(30),
                    color: Colors.darktext,
                  }}
                />
              </View>
              <View style={{paddingLeft: 20, justifyContent: 'center'}}>
                <Text
                  style={{
                    color: Colors.darktext,
                    fontFamily: 'OpenSans-Regular',
                    fontSize: Fonts.moderateScale(18),
                  }}>
                  {item.title}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );

  render() {
    StatusBar.setBarStyle('dark-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      // StatusBar.setTranslucent(true);
    }

    return (
      <Container style={styles.main}>
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
        <Content style={styles.body}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              position: 'absolute',
              zIndex: 999,
              top: 20,
              right: 0,
              height: 40,
              paddingLeft: 20,
              paddingRight: 20,
              maxWidth: Metrics.WIDTH * 0.7,
              backgroundColor: 'rgba(33,35,174,0.8)',
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
              {this.state.course.tag}
            </Text>
          </View>
          <Image
            source={{uri: this.state.course.image}}
            style={{width: '100%', height: Metrics.HEIGHT * 0.4}}
          />
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              description: this.FirstRoute,
              contents: this.SecondRoute,
            })}
            onIndexChange={index => this.setState({index})}
            initialLayout={{width: Dimensions.get('window').width}}
          />
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
