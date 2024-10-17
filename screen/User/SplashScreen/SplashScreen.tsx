import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

// This is the introducing screen called Splash Screen
const SplashScreen = (prop: any) => {
  return (
    <View>
      <Text>SplashScreen</Text>
      <Button
        title="Login"
        onPress={() => {
          prop.navigation.navigate('LoginScreen');
        }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
