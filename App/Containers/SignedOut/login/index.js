import React, {Component} from 'react';
import {
  Modal,
  ImageBackground,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Text, Form, Item, Input, Header} from 'native-base';
import {connect} from 'react-redux';
import {StackActions, NavigationActions} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, Images} from '../../../Themes/';
import Loader from '../../../Components/Loader';
import {_login} from '../../../Services/user';
import Error from '../../../Components/Error';
import {loginInformation} from '../../../Reducer/auth/actions';
import styles from './styles';
import {version} from '../../../../package.json';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalVisible: false,
      isLoading: false,
      validLogin: false,
      error: false,
      mensagem: '',
      login: {
        login: '',
        senha: '',
      },
      checked: false,
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  componentDidUpdate(prevProps) {
    if (this.props.authData.type === 'LOGIN') {
      const resetAction = StackActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({routeName: 'signedInStack'})],
      });
      this.props.navigation.dispatch(resetAction);
    }
  }

  setLoginModalVisible(visible) {
    if (visible) {
      this.setState({
        login: {
          login: '',
          senha: '',
        },
        validLogin: true,
      });
    }
    this.setState({loginModalVisible: visible});
  }

  async login() {
    this.setState({isLoading: true});
    /** MOCK DATA */
    // this.props.loginInformation({ token: 'res', user: { name: 'Usuário AGV' } });
    /** REAL DATA */
    let token;
    let userdata;

    await _login({login: this.state.login.login, senha: this.state.login.senha})
      .then(res => {
        console.log(res);

        if (res.status === 200) {
          token = res.data.token;
          this.props.loginInformation({token: token, user: userdata});
          this.setState({isLoading: false});
        } else {
          this.setState({
            isLoading: false,
            error: true,
            mensagem: res.mensagem,
          });
        }
      })
      .catch(err => {
        this.setState({isLoading: false, error: true});
      });
  }

  render() {
    StatusBar.setBarStyle('dark-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      // StatusBar.setTranslucent(true);
    }

    return (
      <ImageBackground source={Images.pic} style={styles.screenBg}>
        <Header style={styles.header} />
        <View style={styles.container}>
          <Image source={Images.logo} style={styles.logostyle} />
          <Form style={styles.form}>
            <TouchableOpacity
              info
              style={styles.buttonlogin}
              onPress={() => this.setLoginModalVisible(true)}>
              <Text autoCapitalize="words" style={styles.loginbutton}>
                ENTRAR
              </Text>
            </TouchableOpacity>
          </Form>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.loginModalVisible}
          onRequestClose={() => {
            this.setLoginModalVisible(!this.state.loginModalVisible);
          }}>
          <View style={styles.loginView2}>
            <View style={styles.loginview3}>
              <View style={styles.loginview4}>
                <TouchableOpacity
                  onPress={() => {
                    this.setLoginModalVisible(!this.state.loginModalVisible);
                  }}>
                  <Ionicons name="md-close" size={30} color="black" />
                </TouchableOpacity>
              </View>

              <Text style={styles.dialogtitle}>Login</Text>
              <Item style={styles.itemname}>
                <Input
                  value={this.state.login.login}
                  placeholderTextColor={'#cccccc'}
                  textAlign={'left'}
                  placeholder="Usuario"
                  onChangeText={text =>
                    this.setState({
                      login: {login: text, senha: this.state.login.senha},
                      validLogin:
                        text.length > 0 && this.state.login.senha.length > 0,
                    })
                  }
                  style={styles.inputname}
                />
              </Item>

              <Item style={styles.itemname}>
                <Input
                  value={this.state.login.senha}
                  placeholderTextColor={'#cccccc'}
                  textAlign={'left'}
                  placeholder="Senha"
                  secureTextEntry={true}
                  onChangeText={text =>
                    this.setState({
                      login: {login: this.state.login.login, senha: text},
                      validLogin:
                        text.length > 0 && this.state.login.login.length > 0,
                    })
                  }
                  style={styles.inputname}
                />
              </Item>

              <TouchableOpacity
                style={[
                  styles.buttondialogsignup,
                  {
                    backgroundColor: this.state.validLogin
                      ? Colors.secondary
                      : Colors.tertiary,
                  },
                ]}
                disabled={!this.state.validLogin}
                onPress={() =>
                  this.setState({loginModalVisible: false}, () => this.login())
                }>
                <Text
                  autoCapitalize="words"
                  style={[
                    styles.btntxt,
                    {color: this.state.validLogin ? 'white' : 'white'},
                  ]}>
                  ACESSAR
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Loader visible={this.state.isLoading} />
        <Error
          msg={this.state.mensagem}
          visible={this.state.error}
          onPress={() => this.setState({error: false})}
        />
      </ImageBackground>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginInformation: info => {
    dispatch(loginInformation(info));
  },
});

const mapStateToProps = state => {
  return {authData: state.auth, isLogged: state.auth.isLoggedIn};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
