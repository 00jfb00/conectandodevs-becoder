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
  Input,
  Item,
} from 'native-base';
import {connect} from 'react-redux';
import styles from './styles';
import {Colors, Fonts, Metrics} from '../../../Themes';
import {ScrollView} from 'react-navigation';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desafio: {
        title: 'Consultas de mídia social',
        description:
          'Sua tarefa é implementar a função: ' +
          '\nSocialNetworkQueries#findPotentialLikes({ minimalScore })\n' +
          'de acordo com os requisitos e fazer os testes passarem. \n\nPara o usuário atual SocialNetworkQueries#findPotentialLikes({ minimalScore }) deve retornar um resolvido Promise com um objeto contendo uma matriz sob bookschave. Esse conjunto deve incluir títulos de livros considerados possíveis gostos. Se um livro é um potencial como esse, significa que há uma chance do usuário gostar desse título também, porque é apreciado por alguns de seus amigos.',
      },
    };
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
          <Body style={styles.headerBody} />
          <Right style={styles.headerRight} />
        </Header>
        <Content style={styles.body}>
          <View style={{ paddingBottom: 100 }}>
            <Text
              style={{
                color: Colors.darktext,
                fontFamily: 'OpenSans-Bold',
                fontWeight: 'bold',
                fontSize: Fonts.moderateScale(20),
              }}>
              {this.state.desafio.title}
            </Text>
            <Text
              style={{
                color: Colors.darktext,
                fontFamily: 'OpenSans-Regular',
                textAlign: 'justify',
                fontSize: Fonts.moderateScale(16),
              }}>
              {this.state.desafio.description}
            </Text>
          </View>
        </Content>
        <View style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 9999, width: '100%', padding: 20 }}>
          <Item
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              flexDirection: 'row',
              height: 50,
              borderRadius: 20,
              backgroundColor: Colors.lighttxt,
            }}>
            <Input
              placeholderTextColor={Colors.darktext}
              textAlign={'left'}
              style={{
                marginLeft: 5,
                fontFamily: 'OpenSans-Regular',
                color: Colors.darktext,
                width: '80%',
              }}
              placeholder="Insira o link do projeto..."
            />
            <TouchableOpacity style={{width: '20%'}}>
              <Text
                style={{
                  color: Colors.darktext,
                  fontFamily: 'OpenSans-Bold',
                  fontWeight: 'bold',
                  fontSize: Fonts.moderateScale(14),
                }}>
                ENVIAR
              </Text>
            </TouchableOpacity>
          </Item>
        </View>
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
