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
import {Colors, Metrics, Images} from '../../../Themes';

const DATA = [
  {
    id: 1,
    name: 'Plus-IT Consulting',
    image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIKFT5gCpJMZFUwwsy2An-e13ie0oiKZytVFLpHcMURRzmDjDrA&s',
  },
  {
    id: 2,
    name: 'Rocketseat',
    tag: 'JAVA',
    from: 'Plus-IT Consulting',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIKFT5gCpJMZFUwwsy2An-e13ie0oiKZytVFLpHcMURRzmDjDrA&s',
    status: 0,
  },
  {
    id: 3,
    name: 'Kroton Educacional',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIKFT5gCpJMZFUwwsy2An-e13ie0oiKZytVFLpHcMURRzmDjDrA&s',
  },
  {
    id: 4,
    name: 'CIEE',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIKFT5gCpJMZFUwwsy2An-e13ie0oiKZytVFLpHcMURRzmDjDrA&s',
  },
];

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

  renderItem(item) {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => this.props.navigation.navigate('EmpresaDetalhes', item)}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.itemBlockImage}>
            <Image source={{uri: item.image}} style={styles.profileImage} />
          </View>
          <View style={styles.itemBlockText}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <View style={styles.itemViewPoints}>
              <Text style={styles.itemPoints}>{item.from}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
          <FlatList
            style={{marginTop: 5}}
            data={DATA}
            renderItem={({item}) => this.renderItem(item)}
            keyExtractor={item => item.id}
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
