import React, {Component} from 'react';
import {Icon, View, Text} from 'native-base';
export default class IconWithBadge extends Component {
  render() {
    const {
      name,
      badgeCount = 0,
      color,
      sizeBadge,
      size,
      type = 'Ionicons',
      style,
    } = this.props;
    return (
      <View
        style={{
          width: 30,
          height: 30,
          margin: 5,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name={name} style={style} type={type} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              position: 'absolute',
              right: -5,
              top: -2,
              backgroundColor: '#FFD700',
              borderRadius: sizeBadge / 2,
              width: sizeBadge,
              height: sizeBadge,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'OpenSans-Bold',
                fontSize: sizeBadge * 0.666,
                fontWeight: 'bold',
              }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}
