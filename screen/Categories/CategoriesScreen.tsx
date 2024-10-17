import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import Heading from '../../component/Heading/Heading';
import InputBar from '../../component/InputBar/InputBar';

const Categories = (prop: any) => {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView>
        {/* -----Title container----- */}
        <View
          style={{
            width: 374,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingLeft: 10,
          }}>
          <Heading style={{fontSize: 30, marginTop: 10, marginBottom: 10}}>
            Categories
          </Heading>
        </View>

        {/* -----Search bar----- */}
        <InputBar style={styles.mainInputBar} placeholder="Search"></InputBar>

        <Button
          title="Go to Vegetable"
          onPress={() => {
            prop.navigation.navigate('VegetableStack');
          }}
        />
        <Button
          title="Go to Fruit"
          onPress={() => {
            prop.navigation.navigate('FruitStack');
          }}
        />
        <Button
          title="Go to Bread"
          onPress={() => {
            prop.navigation.navigate('BreadStack');
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#F6F5F5',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainInputBar: {
    borderRadius: 99999,
  },
});
