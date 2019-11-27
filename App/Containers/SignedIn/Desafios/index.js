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
import {Colors, Metrics, Images, Fonts} from '../../../Themes';

const DATA = [
  {
    id: 1,
    name: 'Consultas de mídia social',
    from: 'Rocketseat',
    points: 1200,
    description:
      'Sua tarefa é implementar a função: ' +
      '\nSocialNetworkQueries#findPotentialLikes({ minimalScore })\n' +
      'de acordo com os requisitos e fazer os testes passarem. \n\nPara o usuário atual SocialNetworkQueries#findPotentialLikes({ minimalScore }) deve retornar um resolvido Promise com um objeto contendo uma matriz sob bookschave. Esse conjunto deve incluir títulos de livros considerados possíveis gostos. Se um livro é um potencial como esse, significa que há uma chance do usuário gostar desse título também, porque é apreciado por alguns de seus amigos.',
  },
  {
    id: 2,
    name: 'Consultas de mídia social',
    from: 'Rocketseat',
    points: 10,
    description:
      'Sua tarefa é implementar a função: ' +
      '\nSocialNetworkQueries#findPotentialLikes({ minimalScore })\n' +
      'de acordo com os requisitos e fazer os testes passarem. \n\nPara o usuário atual SocialNetworkQueries#findPotentialLikes({ minimalScore }) deve retornar um resolvido Promise com um objeto contendo uma matriz sob bookschave. Esse conjunto deve incluir títulos de livros considerados possíveis gostos. Se um livro é um potencial como esse, significa que há uma chance do usuário gostar desse título também, porque é apreciado por alguns de seus amigos.',
  },
  {
    id: 3,
    name: 'Consultas de mídia social',
    points: 700,
    from: 'Rocketseat',
    description:
      'Sua tarefa é implementar a função: ' +
      '\nSocialNetworkQueries#findPotentialLikes({ minimalScore })\n' +
      'de acordo com os requisitos e fazer os testes passarem. \n\nPara o usuário atual SocialNetworkQueries#findPotentialLikes({ minimalScore }) deve retornar um resolvido Promise com um objeto contendo uma matriz sob bookschave. Esse conjunto deve incluir títulos de livros considerados possíveis gostos. Se um livro é um potencial como esse, significa que há uma chance do usuário gostar desse título também, porque é apreciado por alguns de seus amigos.',
  },
  {
    id: 4,
    name: 'Consultas de mídia social',
    points: 500,
    description:
      'Sua tarefa é implementar a função: ' +
      '\nSocialNetworkQueries#findPotentialLikes({ minimalScore })\n' +
      'de acordo com os requisitos e fazer os testes passarem. \n\nPara o usuário atual SocialNetworkQueries#findPotentialLikes({ minimalScore }) deve retornar um resolvido Promise com um objeto contendo uma matriz sob bookschave. Esse conjunto deve incluir títulos de livros considerados possíveis gostos. Se um livro é um potencial como esse, significa que há uma chance do usuário gostar desse título também, porque é apreciado por alguns de seus amigos.',
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
        onPress={() =>
          this.props.navigation.navigate('DesafioSubmissao', item)
        }>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.itemBlockImage}>
            <Icon
              name={'trophy'}
              type={'FontAwesome'}
              style={{
                fontSize: Fonts.moderateScale(30),
                color: Colors.darktext,
              }}
            />
          </View>
          <View style={styles.itemBlockText}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <View style={styles.itemViewPoints}>
            <Icon
                name="flag-checkered"
                type="FontAwesome"
                style={styles.itemIcon}
            />
            <Text style={styles.itemPoints}>{item.points} pontos</Text>
          </View>
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
