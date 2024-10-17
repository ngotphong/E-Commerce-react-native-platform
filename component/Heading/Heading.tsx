import {StyleSheet, Text} from 'react-native';
import React from 'react';

// a custom header with the same font color and font family for all the screens

const Heading = ({children, style}: any) => {
  return <Text style={[styles.headingStyle, style]}>{children}</Text>;
};

export default Heading;

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 32,
    color: '#2D0C57',
    fontWeight: 700,
    fontFamily: 'SF-Pro-Display',
  },
});
