import {Platform, StyleSheet, Dimensions, I18nManager} from 'react-native';

import {Fonts, Metrics, Colors} from '../../../Themes/';

const styles = StyleSheet.create({
  screenBg: {
    flex: 1,
  },

  header: {
    backgroundColor: 'transparent',
    height: 56,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        paddingTop: 10,
      },
    }),
    elevation: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    flex: 0.5,
    backgroundColor: 'transparent',
  },
  backArrow: {
    width: 30,
    alignItems: 'center',
  },
  body: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  right: {
    flex: 0.5,
  },
  container: {
    alignItems: 'center',
  },
  logostyle: {
    alignSelf: 'center',
    width: Metrics.WIDTH * 0.4,
    height: Metrics.WIDTH * 0.3,
  },
  headertext: {
    fontFamily: 'OpenSans-Bold',
    backgroundColor: 'transparent',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 30,
    width: Metrics.WIDTH * 0.9,
    color: Colors.darktext,
    marginTop: Metrics.HEIGHT * 0.08,
  },
  desctext: {
    fontFamily: Fonts.type.bariol,
    backgroundColor: 'transparent',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 16,
    width: Metrics.WIDTH * 0.65,
    color: Colors.darktext,
    marginTop: Metrics.HEIGHT * 0.03,
  },
  form: {
    alignSelf: 'center',
    marginTop: Metrics.HEIGHT * 0.05,
  },
  buttonlogin: {
    backgroundColor: Colors.icon_active,
    alignSelf: 'center',
    width: Metrics.WIDTH * 0.8,
    height: Metrics.HEIGHT * 0.1,
    justifyContent: 'center',
  },
  loginbutton: {
    backgroundColor: Colors.icon_active,
    fontFamily: 'OpenSans-Regular',
    fontSize: Fonts.moderateScale(20),
    borderRadius: 3,
    color: 'white',
    textAlign: 'center',
  },

  loginView2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginview3: {
    borderRadius: 5,
    width: Metrics.WIDTH * 0.95,
    height: Metrics.HEIGHT * 0.45,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowOffset: {width: 3, height: 3},
    shadowColor: 'black',
    shadowOpacity: 0.4,
    borderColor: Colors.lighttxt,
    borderWidth: 2,
  },

  loginview4: {
    backgroundColor: 'transparent',
    width: Metrics.WIDTH * 0.85,
    top: 0,
    alignItems: 'flex-end',
    alignSelf: 'center',
  },

  dialogtitle: {
    color: Colors.darktext,
    fontSize: 25,
    fontFamily: 'OpenSans-Regular',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  itemname: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: Metrics.HEIGHT * 0.02,
    width: Metrics.WIDTH * 0.8,
    height: Metrics.HEIGHT * 0.065,
    borderRadius: 5,
  },

  inputname: {
    marginLeft: 5,
    fontFamily: 'OpenSans-Regular',
    color: Colors.darktext,
  },

  buttondialogsignup: {
    backgroundColor: Colors.secondary,
    alignSelf: 'center',
    marginTop: Metrics.HEIGHT * 0.04,
    width: Metrics.WIDTH * 0.8,
    height: Metrics.HEIGHT * 0.08,
    borderRadius: 3,
    justifyContent: 'center',
  },
  btntxt: {
    alignSelf: 'center',
    fontFamily: 'OpenSans-Bold',
    fontSize: Fonts.moderateScale(18),
    color: 'black',
  },
});
export default styles;
