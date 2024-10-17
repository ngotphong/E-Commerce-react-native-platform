import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

// a custom button for all the screens

const MyButton = ({children, style, iconSource, onPress}: any) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      {iconSource && <Image source={iconSource} />}
      <Text style={{color: 'white'}}>{children}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  buttonContainer: {
    color: 'white',
    backgroundColor: '#0BCE83',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
