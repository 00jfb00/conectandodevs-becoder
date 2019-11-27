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
  Content,
  Icon
} from 'native-base';
import {connect} from 'react-redux';
import styles from './styles';
import {Fonts, Metrics, Images, Colors} from '../../../Themes/';

const DATA = [
  {
    id: '1',
    title: 'Diego Roberto Ribeiro',
    imagem: '',
    points: 1500,
    position: 1,
  },
  {
    id: '2',
    title: 'Júlio Brandão',
    imagem: '',
    points: 1000,
    position: 2,
  },
  {
    id: '3',
    title: 'Artur Santos',
    imagem: '',
    points: 900,
    position: 3,
  },
  {
    id: '4',
    title: 'Rodrigo Ferrari',
    imagem: '',
    points: 550,
    position: 4,
  },
  {
    id: '5',
    title: 'Maria Silva',
    imagem: '',
    points: 548,
    position: 5,
  },
  {
    id: '6',
    title: 'Ana Custódio',
    imagem: '',
    points: 530,
    position: 6,
  },
  {
    id: '7',
    title: 'Marcos Romano',
    imagem: '',
    points: 450,
    position: 7,
  },
  {
    id: '8',
    title: 'Juan Mantovani',
    imagem: '',
    points: 440,
    position: 8,
  },
  {
    id: '9',
    title: 'Elizabeth Ribeiro',
    imagem: '',
    points: 430,
    position: 9,
  },
  {
    id: '10',
    title: 'Marcela da Silva',
    imagem: '',
    points: 420,
    position: 10,
  },
  {
    id: '11',
    title: 'Josiane Reis',
    imagem: '',
    points: 410,
    position: 11,
  },
  {
    id: '12',
    title: 'Peterson Ferreira',
    imagem: '',
    points: 400,
    position: 12,
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
      <View style={styles.item}>
        <View style={{flexDirection:'row'}}>
          <View style={styles.itemBlockImage}>
            <Image source={Images.avatar} style={styles.profileImage} />
          </View>
          <View style={styles.itemBlockText}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <View style={styles.itemViewPoints}>
              <Icon
                name="flag-checkered"
                type="FontAwesome"
                style={styles.itemIcon}
              />
              <Text style={styles.itemPoints}>{item.points} pontos</Text>
            </View>            
          </View>
          <View style={styles.itemBlockRanking}>
            <View style={styles.itemPosition}>
              <Text style={styles.itemPositionText}>{item.position}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  
  render() {
    StatusBar.setBarStyle('dark-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
    }

    return (
      <Container style={styles.main}>
        <Content style={styles.body}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => 
            this.renderItem(item)          
          }
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
