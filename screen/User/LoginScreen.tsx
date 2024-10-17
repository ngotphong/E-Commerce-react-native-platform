import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const LoginScreen = (prop: any) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title="click to move forward"
        onPress={() => {
          prop.navigation.navigate('CategoriesScreen');
        }}></Button>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
