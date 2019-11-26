import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'native-base';

const ModalContent = props => (
  <View style={styles.content}>{props.children}</View>
);

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: '55%',
    maxHeight: '55%',
  },
});

export default ModalContent;
