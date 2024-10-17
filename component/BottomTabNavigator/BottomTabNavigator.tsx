import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

const {width: windowWidth, height: windowHeight} = Dimensions.get(
  'window' || 'screen',
);

const BottomTabNavigator = () => {
  return (
    <View style={styles.bottomTabNavigatorContainer}>
      <Text>Hi</Text>
    </View>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  bottomTabNavigatorContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.1,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    elevation: 5,
    borderRadius: 15,
    backgroundColor: '#ffffff',
  },
});
