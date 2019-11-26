import React from 'react';
import {Modal, View, Text, ActivityIndicator} from 'react-native';
import {Icon} from 'native-base';
import {Metrics} from '../Themes';

const Success = ({visible, onPress, message}) =>
  visible ? (
    //   <Modal onRequestClose={() => null} visible={visible}>
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
          backgroundColor: 'rgba(80, 200, 80, 1)',
          padding: 25,
        }}>
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
        <Text
          style={{
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '200',
            color: 'white',
          }}>
          Sucesso
        </Text>
        {message ? (
          <Text
            style={{
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 12,
              fontWeight: '200',
              color: 'white',
            }}>
            {message}
          </Text>
        ) : null}
      </View>
    </View>
  ) : //   </Modal>
  null;
export default Success;
