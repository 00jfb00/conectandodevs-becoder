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
  Header,
  Left,
  Body,
  Title,
  Content,
} from 'native-base';
import {connect} from 'react-redux';
import styles from './styles';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
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
          <Left style={styles.headerLeft} />
          <Body style={styles.headerBody} />
          <Right style={styles.headerRight} />
        </Header>
        <Content style={styles.body} />
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
