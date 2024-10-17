import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React from 'react';
import {BlurView} from '@react-native-community/blur';

// This is the screen with the ShoppingList and a Checkout/Payment button
const ShoppingList = ({navigation}: any) => {
  return (
    <View>
      <Button
        title="Checkout"
        onPress={() => navigation.navigate('CheckOutScreen')}
      />
      {/* <View style={styles.container}>
        <Image
          key={'blurryImage'}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={styles.absolute}
        />
        <Text style={styles.absolute}>Hi, I am some blurred text</Text>
        {/* in terms of positioning and zIndex-ing everything before the BlurView will be blurred */}
      {/* <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
        <Text>
          I'm the non blurred text because I got rendered on top of the BlurView
        </Text>
      </View> */}
    </View>
  );
};

export default ShoppingList;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {position: 'absolute', top: 0, left: 0, bottom: 0, right: 0},
});
