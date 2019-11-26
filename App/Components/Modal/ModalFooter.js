import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from 'native-base';
import {Colors, Fonts} from '../../Themes';

const ModalFooter = props => {
  return (
    <View style={styles.footer}>
      <View style={styles.btn_container}>
        {props.buttons.map((button, index) => (
          <TouchableOpacity
            key={`modal-footer-${props.id}-btn-${index}`}
            onPress={() => {
              if (props.isVisible) {
                props.onClose();
              }
              if (button.action) {
                button.action(index);
              }
            }}
            style={[
              styles.button,
              {
                width: `${parseInt(`${100 / props.buttons.length}`)}%`,
                backgroundColor: button.backgroundColor
                  ? button.backgroundColor
                  : Colors.primary,
              },
            ]}>
            <Text
              style={{
                color: button.textColor ? button.textColor : 'white',
                fontFamily: 'OpenSans-Bold',
                fontSize: Fonts.moderateScale(16),
              }}>
              {button.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'transparent',
    elevation: 0,
    borderTopWidth: 0,
    minHeight: '25%',
    maxHeight: '25%',
  },
  btn_container: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  button: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 5,
    borderRadius: 5,
    height: '100%',
    shadowOffset: {width: 3, height: 3},
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 5,
  },
});

export default ModalFooter;
