import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '../Themes';
import {Icon, Text} from 'native-base';

export default class App extends Component {
  render() {
    const {item, alwaysOpen = false, hasMargin, navigate} = this.props;
    return (
      <TouchableOpacity
        disabled={item.status === 1 && !alwaysOpen}
        onPress={() => navigate('CursoDetalhes', item)}
        style={{
          backgroundColor: '#f5f5f5',
          width: 200,
          height: 150,
          margin: 20,
          marginTop: 10,
          marginRight: hasMargin ? 0 : 20,
        }}>
        {item.status !== 0 && (
          <View
            style={{
              width: 200,
              height: 150,
              position: 'absolute',
              zIndex: 9999,
              top: 0,
              right: 0,
              backgroundColor:
                item.status === 1 && !alwaysOpen
                  ? 'rgba(255,255,255,0.4)'
                  : 'transparent',
              paddingLeft: 10,
              paddingTop: 5,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              alignContent: 'flex-start',
            }}>
            {((alwaysOpen && item.status === 2) || !alwaysOpen) && (
              <TouchableOpacity
                disabled={item.status === 2}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  backgroundColor: Colors.tertiary,
                }}>
                {item.status === 1 ? (
                  <Icon
                    name={'lock'}
                    style={{
                      fontSize: Fonts.moderateScale(20),
                      color: Colors.darktext,
                    }}
                  />
                ) : (
                  <Icon
                    name={'check-circle'}
                    type={'MaterialIcons'}
                    style={{
                      fontSize: Fonts.moderateScale(20),
                      color: 'green',
                    }}
                  />
                )}
              </TouchableOpacity>
            )}
          </View>
        )}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            position: 'absolute',
            zIndex: 999,
            top: 10,
            right: 0,
            height: 20,
            paddingLeft: 10,
            paddingRight: 10,
            maxWidth: 200,
            backgroundColor: 'rgba(33,35,174,0.8)',
          }}>
          <Text
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
            numberOfLines={1}
            style={{
              color: 'white',
              fontFamily: 'OpenSans-Bold',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: Fonts.moderateScale(14),
            }}>
            {item.tag}
          </Text>
        </View>
        <Image
          source={{uri: item.image}}
          style={{width: '100%', height: 100, borderRadius: 5}}
          resizeMode="cover"
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            alignContent: 'center',
            height: 46,
            padding: 5,
            width: '100%',
            backgroundColor: 'white',
          }}>
          <Text
            numberOfLines={2}
            style={{
              color: Colors.darktext,
              fontFamily: 'OpenSans-Bold',
              fontWeight: 'bold',
              fontSize: Fonts.moderateScale(12),
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              color: Colors.darktext,
              fontFamily: 'OpenSans-Regular',
              fontSize: Fonts.moderateScale(10),
            }}>
            {item.from}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    bottom: 40,
    flexDirection: 'row',
  },
  track: {
    backgroundColor: Colors.tertiary,
    overflow: 'hidden',
    height: 2,
  },
  bar: {
    backgroundColor: Colors.primary,
    height: 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
