import {Fonts, Metrics, Colors} from '../../../Themes/';

export default {
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 1)',
  },
  main: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 1)',
  },
  headerIcon: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: Colors.primary,
    fontSize: Fonts.moderateScale(24),
  },
  headerIconButton: {
    backgroundColor: 'white',
    borderRadius: 22,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  headerIconContainer: {
    position: 'absolute',
    top: 30,
    right: 30,
    zIndex: 9999999,
  },
  body: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 1)',
  },

  /*DRAWER START*/
  menuContainer: {
    backgroundColor: Colors.drawer,
    width: Metrics.WIDTH * 0.65,
    height: Metrics.HEIGHT,
    paddingBottom: Fonts.moderateScale(40),
  },
  menumainview: {
    padding: 10,
    paddingLeft: 40,
    paddingTop: 40,
  },
  profileContainer: {
    paddingTop: Fonts.moderateScale(30),
    paddingBottom: Fonts.moderateScale(10),
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: Colors.tertiary,
  },
  profileBody: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Fonts.moderateScale(10),
  },
  profileImage: {
    height: Metrics.HEIGHT * 0.14,
    width: Metrics.HEIGHT * 0.14,
    borderRadius: Metrics.HEIGHT * 0.07,
    borderWidth: 3,
    borderColor: Colors.primary,
  },
  name: {
    fontFamily: 'OpenSans-Regular',
    fontSize: Fonts.moderateScale(16),
    color: Colors.darktext,
    backgroundColor: 'transparent',
    marginTop: Metrics.HEIGHT * 0.004,
    textAlign: 'center',
  },
  itemViewPoints:{
    flexDirection:'row',
    marginTop: 4,
    justifyContent: 'center'
  },
  itemIcon:{
    color: Colors.darktext,
    fontSize: Fonts.moderateScale(14),
    marginRight: 5,
    marginTop: 2,
  },
  itemPoints: {
    color: '#555',
    fontSize: 14,
  },
  itemIconRanking:{
    color: Colors.darktext,
    fontSize: Fonts.moderateScale(19),
    marginRight: 5,
    marginTop: 4,
  },
  itemRanking: {
    color: '#555',
    fontSize: 20,
  },
  /*DRAWER END*/
};
