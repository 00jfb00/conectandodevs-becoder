import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Container, Icon, Content} from 'native-base';
import {connect} from 'react-redux';
import styles from './styles';
import {logoutInformation} from '../../../Reducer/auth/actions';
import {StackActions, NavigationActions} from 'react-navigation';
import {Fonts, Images, Colors} from '../../../Themes/';

class ControlPanel extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.authData.type === 'LOGOUT') {
      const resetAction = StackActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({routeName: 'signedOutStack'})],
      });
      this.props.navigation.dispatch(resetAction);
    }
  }

  render() {
    return (
      <Container style={styles.menuContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileBody}>
            <Image source={Images.avatar} style={styles.profileImage} />
          </View>
          <View>
            <Text numberOfLines={1} elipseMode="tails" style={styles.name}>
              {this.props.user.user.name}
            </Text>
            <View style={styles.itemViewPoints}>
              <Icon
                name="flag-checkered"
                type="FontAwesome"
                style={styles.itemIcon}
              />
              <Text style={styles.itemPoints}>1500 pontos</Text>
            </View>
            <View style={styles.itemViewPoints}>
              <Icon
                name="trophy"
                type="FontAwesome"
                style={styles.itemIconRanking}
              />
              <Text style={styles.itemRanking}>1º</Text>
            </View>
          </View>
        </View>
        <Content style={styles.menumainview}>
          <View style={{height: 20}} />

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Cursos');
            }}
            style={{
              flexDirection: 'row',
              marginBottom: 20,
              alignItems: 'center',
            }}>
            <Icon
              name="book-open-page-variant"
              type="MaterialCommunityIcons"
              style={{
                color: Colors.darktext,
                fontSize: Fonts.moderateScale(26),
                marginRight: 10,
              }}
            />
            <Text
              numberOfLines={1}
              elipseMode="tails"
              style={{
                color: Colors.darktext,
                fontSize: Fonts.moderateScale(14),
                fontFamily: 'OpenSans-Regular',
              }}>
              Cursos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
						onPress={() => {
							this.props.navigation.navigate('Empresas');
						}}
            style={{
              flexDirection: 'row',
              marginBottom: 20,
              alignItems: 'center',
            }}>
            <Icon
              name="account-network"
              type="MaterialCommunityIcons"
              style={{
                color: Colors.darktext,
                fontSize: Fonts.moderateScale(30),
                marginRight: 10,
              }}
            />
            <Text
              numberOfLines={1}
              elipseMode="tails"
              style={{
                color: Colors.darktext,
                fontSize: Fonts.moderateScale(14),
                fontFamily: 'OpenSans-Regular',
              }}>
              Empresas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.logoutInformation()}
            style={{
              flexDirection: 'row',
              marginBottom: 20,
              alignItems: 'center',
            }}>
            <Icon
              name="logout-variant"
              type="MaterialCommunityIcons"
              style={{
                color: Colors.darktext,
                fontSize: Fonts.moderateScale(30),
                marginRight: 10,
              }}
            />
            <Text
              numberOfLines={1}
              elipseMode="tails"
              style={{
                color: Colors.darktext,
                fontSize: Fonts.moderateScale(14),
                fontFamily: 'OpenSans-Regular',
              }}>
              Sair
            </Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logoutInformation: () => {
    dispatch(logoutInformation());
  },
});

const mapStateToProps = state => {
  return {authData: state.auth, user: state.auth.userData};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ControlPanel);
