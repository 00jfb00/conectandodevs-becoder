import React, {Component} from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import {Colors} from '../Themes';

const {width, height} = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: {width, height},
    };
  }

  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({size: {width: layout.width, height: layout.height}});
  };

  render() {
    let imageArray = [];
    this.props.images.forEach((image, i) => {
      const thisImage = (
        <Image
          key={`image${i}`}
          source={{uri: image}}
          resizeMode={'cover'}
          style={{width: width}}
        />
      );
      imageArray.push(thisImage);
    });

    return (
      <View style={{flex: 1}} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={8000}
          style={this.state.size}
          autoplay
          bullets
          onAnimateNextPage={p => console.log(p)}>
          {imageArray}
        </Carousel>
      </View>
    );
  }
}
