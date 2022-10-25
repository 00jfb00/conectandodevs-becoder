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

  UNSAFE_componentWillMount() {
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
              <Icon name="ios-arrow-back" style={styles.backArrow} />
            </TouchableOpacity>
          </Left>
          <Body style={styles.headerBody}>Page</Body>
          <Right style={styles.headerRight} />
        </Header>
        <Content style={styles.body} />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({});
const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
