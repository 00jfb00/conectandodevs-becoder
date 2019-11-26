import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'native-base';
import {Metrics} from '../Themes';

const Component = ({msg, visible, onPress}) =>
  visible ? (
    <View
      onTouchStart={onPress}
      style={{
        width: Metrics.WIDTH,
        height: Metrics.HEIGHT,
        position: 'absolute',
        zIndex: 9999999,
        backgroundColor: 'transparent',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: 'rgba(255, 0, 0, 0.85)',
          padding: 25,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '200',
            color: 'white',
          }}>
          Erro
        </Text>
        <Text
          style={{
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '200',
            color: 'white',
          }}>
          {msg}
        </Text>
        <Icon
          name="error-outline"
          type="MaterialIcons"
          style={{
            marginTop: 5,
            alignSelf: 'center',
            color: 'white',
            fontSize: 36,
          }}
        />
      </View>
    </View>
  ) : null;
export default Component;
