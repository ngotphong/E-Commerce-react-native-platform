import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// a base text with the correct color and font family for all screens

const BaseText = ({children, style, small}: any) => {
  // the one that comes after will override the first, style will override styles.textStyle
  let containerStyle = {...styles.textStyle, ...style};
  if (small) {
    containerStyle.fontSize = 13;
  }
  return <Text style={containerStyle}>{children}</Text>;
};

export default BaseText;

const styles = StyleSheet.create({
  textStyle: {
    color: '#9586A8',
    fontSize: 15,
    fontFamily: 'SF-Pro-Display',
  },
});
