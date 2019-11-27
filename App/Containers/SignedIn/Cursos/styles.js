import {Platform, StyleSheet, Dimensions} from 'react-native';
import {Fonts, Metrics, Colors} from '../../../Themes';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  backArrow: {
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: Colors.darktext,
    fontSize: Fonts.moderateScale(25),
  },
  header: {
    backgroundColor: 'rgba(255,255,255, 1)',
    height: Metrics.HEIGHT * 0.08,
    borderBottomWidth: 0,
    paddingTop: 0,
    elevation: 0,
    paddingLeft: Metrics.WIDTH * 0.05,
    paddingRight: Metrics.WIDTH * 0.05,
  },
  headerLeft: {
    flex: 0.3,
  },
  headerBody: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: Colors.darktext,
    fontFamily: 'OpenSans-Bold',
    fontSize: Fonts.moderateScale(17),
    letterSpacing: 0.7,
  },
  headerRight: {
    flex: 0.3,
    marginTop: Metrics.HEIGHT * 0.02,
  },
  body: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 1)',
  },
});

export default styles;
