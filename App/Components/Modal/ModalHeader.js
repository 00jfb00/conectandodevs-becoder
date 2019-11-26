import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Right, View, Left, Body, Title} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../Themes/';

const ModalContent = props => (
  <View style={styles.header}>
    <Left style={styles.btn_container} />
    <Body style={[styles.btn_container, {flex: 2}]}>
      <Title style={styles.title}>{props.title}</Title>
    </Body>
    <Right style={styles.btn_container}>
      {props.showCloseButton && (
        <TouchableOpacity style={styles.button} onPress={() => props.onClose()}>
          <Ionicons name="md-close" size={30} color={Colors.lighttxt} />
        </TouchableOpacity>
      )}
    </Right>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    elevation: 0,
    borderBottomWidth: 0,
    minHeight: '20%',
    maxHeight: '20%',
  },
  btn_container: {
    flex: 0.5,
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default ModalContent;
