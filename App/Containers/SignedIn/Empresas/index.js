import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
  BackHandler,
  FlatList,
} from 'react-native';
import {
  Container,
  Button,
  Icon,
  Right,
  Item,
  Input,
  Header,
  Left,
  Body,
  Title,
  Content,
} from 'native-base';
import {connect} from 'react-redux';
import styles from './styles';
import {Colors, Metrics} from '../../../Themes';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', function() {
      return true;
    });
  }

  render() {
    StatusBar.setBarStyle('dark-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      // StatusBar.setTranslucent(true);
    }

    return (
      <Container style={styles.main}>
        <Header style={styles.header}>
          <Left style={styles.headerLeft}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => this.props.navigation.goBack()}>
              <Icon
                name="chevron-down"
                type={'MaterialCommunityIcons'}
                size={25}
                color="white"
              />
            </TouchableOpacity>
          </Left>
          <Body style={styles.headerBody}>
            <Item
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: Metrics.HEIGHT * 0.02,
                height: Metrics.HEIGHT * 0.065,
                borderRadius: 20,
                paddingLeft: 10,
                backgroundColor: Colors.lighttxt,
              }}>
              <Input
                placeholderTextColor={Colors.darktext}
                textAlign={'left'}
                style={{
                  marginLeft: 5,
                  fontFamily: 'OpenSans-Regular',
                  color: Colors.darktext,
                }}
                placeholder="Busque..."
              />
            </Item>
          </Body>
          <Right style={styles.headerRight}>
            <TouchableOpacity style={styles.backArrow}>
              <Icon
                name="search"
                type={'MaterialIcons'}
                size={25}
                color="white"
              />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content style={styles.body}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CursoDetalhes')}>
            <Text>AQUI</Text>
          </TouchableOpacity>
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
