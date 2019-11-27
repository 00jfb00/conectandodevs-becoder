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
  item: {
    backgroundColor: '#EEE',
    height: 70,
    borderRadius: 0,
    marginHorizontal: 6,
    marginBottom: 8,
    elevation: 3,
  },
  itemBlockImage: {
    width: '16%',
    height: 70,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 5,
  },
  profileImage: {
    height: Metrics.HEIGHT * 0.1,
    width: Metrics.HEIGHT * 0.1,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  itemBlockText: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 7,
    marginLeft: 7,
  },
  itemTitle: {
    color: '#555',
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
  },
  itemViewPoints: {
    flexDirection: 'row',
    marginTop: 4,
  },
  itemIcon: {
    color: Colors.darktext,
    fontSize: Fonts.moderateScale(14),
    marginRight: 5,
    marginTop: 2,
  },
  itemPoints: {
    color: '#555',
    fontSize: 14,
  },

});

export default styles;
