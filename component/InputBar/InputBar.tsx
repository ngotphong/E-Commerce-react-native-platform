import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

// a custom text input bar for all of the screens

const InputBar = ({
  style,
  value,
  onChangeText,
  placeholder,
  keyboardType,
}: any) => {
  return (
    <TextInput
      style={[styles.inputStyle, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      selectionColor="#2D0C57"
    />
  );
};

export default InputBar;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: '#D9D0E3',
    borderRadius: 8,
    height: 40,
    padding: 10,
    margin: 0,
    backgroundColor: '#ffffff',
  },
});
