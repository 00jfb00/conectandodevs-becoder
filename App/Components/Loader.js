import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Metrics} from '../Themes';

const Component = ({visible}) =>
  visible ? (
    <View
      style={{
        width: Metrics.WIDTH,
        height: Metrics.HEIGHT,
        position: 'absolute',
        zIndex: 99999,
        backgroundColor: 'transparent',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: 25,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '200',
            color: 'white',
            marginBottom: 15,
          }}>
          Carregando
        </Text>
        <ActivityIndicator color="white" size="large" />
      </View>
    </View>
  ) : null;
export default Component;
