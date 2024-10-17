import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {
  Link,
  NavigationContainer,
  useIsFocused,
  useLinkProps,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import CategoriesScreen from './screen/Categories/CategoriesScreen';
import VegetableScreen from './screen/Categories/AllCategories/Vegetable/VegetableScreen';
import FruitScreen from './screen/Categories/AllCategories/Fruit/FruitScreen';
import BreadScreen from './screen/Categories/AllCategories/Bread/BreadScreen';

import ShoppingList from './screen/ShoppingCart/ShoppingList';
import CheckOutScreen from './screen/ShoppingCart/CheckOut/CheckOutScreen';
import ChangePaymentMethod from './screen/ShoppingCart/CheckOut/ChangePaymentMethod/ChangePaymentMethod';
import ChangeDeliveryAddress from './screen/ShoppingCart/CheckOut/ChangeDeliveryAddress/ChangeDeliveryAddress';
import ChangeDeliveryOptions from './screen/ShoppingCart/CheckOut/ChangeDeliveryOptions/ChangeDeliveryOptions';

import SplashScreen from './screen/User/SplashScreen/SplashScreen';
import LoginScreen from './screen/User/LoginScreen';
import UserScreen from './screen/User/UserScreen';
import HeaderBar from './component/HeaderBar/HeaderBar';

import {Dimensions} from 'react-native';

// BottomTabBarNavigator Icons
import GridIcon from './asset/BottomTabNavigator/grid.svg';
import ShoppingCartIcon from './asset/BottomTabNavigator/shopping-cart.svg';
import UserIcon from './asset/BottomTabNavigator/user.svg';

import {BlurView} from '@react-native-community/blur';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

let hasHiddenFirst = false; // Flag to track if the first hide has occurred

const getRouteName = (route: any = {}, hideFirst: boolean = false) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  if (hideFirst && !hasHiddenFirst) {
    hasHiddenFirst = true;
    return 'none';
  } else {
    // console.log(routeName);
    let show = true;
    switch (routeName) {
      case 'SplashScreen':
      case 'CheckOutStack':
      case 'ChangePaymentMethod': {
        show = false;
        break;
      }
    }
    // console.log(show === false ? 'none' : 'flex');
    return show === false ? 'none' : 'flex';
  }
};

// -----Contains the Tab Navigator to the 3 main tabs: ShoppingCart, User, Categories-----
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // tabBar={(props: any) => (
        //   <BottomTabNavigator {...props}></BottomTabNavigator>
        // )}
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            display: getRouteName(route),
            bottom: windowHeight * 0.02,
            left: windowWidth * 0.04,
            right: windowWidth * 0.04,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            height: windowHeight * 0.1,
            ...styles.shadowBottomTabBar,
          },
          // tabBarBackground: () => (
          //   <BlurView
          //     style={{
          //       ...StyleSheet.absoluteFillObject,
          //     }}
          //     blurType="light"
          //     blurAmount={32}
          //     reducedTransparencyFallbackColor="white"
          //   />
          // ),
          // () => {
          //   return (
          //     <BlurView
          //       // blurType="regular"
          //       // blurAmount={55}
          //       style={{
          //         ...StyleSheet.absoluteFillObject,
          //         position: 'absolute',
          //         top: 30,
          //         borderTopLeftRadius: 20,
          //         borderTopRightRadius: 20,
          //         backgroundColor: 'transparent',
          //         overflow: 'hidden',
          //       }}
          //     />
          //   );
          // },
        })}
        initialRouteName="ShoppingCartStack">
        <Tab.Screen
          name="CategoriesStack"
          component={CategoriesStack}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <GridIcon
                  width={25}
                  height={25}
                  stroke={focused ? '#7203FF' : '#9586A8'} // this is imported as a prop of the svg then it is passed to the #000 value in .svgrrc
                  fill={focused ? 'rgba(114, 3, 255, 0.5)' : 'rgba(0, 0, 0, 0)'}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="ShoppingCartStack"
          component={ShoppingCartStack}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <ShoppingCartIcon
                  width={25}
                  height={25}
                  stroke={focused ? '#7203FF' : '#9586A8'}
                  fill={focused ? 'rgba(114, 3, 255, 0.5)' : 'rgba(0, 0, 0, 0)'}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={'UserStack'}
          component={UserStack}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <UserIcon
                  width={25}
                  height={25}
                  stroke={focused ? '#7203FF' : '#9586A8'}
                  fill={focused ? 'rgba(114, 3, 255, 0.5)' : 'rgba(0, 0, 0, 0)'}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const CategoriesStack = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Stack.Screen
        name="VegetableStack"
        component={VegetableStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FruitStack"
        component={FruitStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BreadStack"
        component={BreadStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

// Stacking the CheckOut screen and the ShoppingList screen together
const ShoppingCartStack = () => {
  return (
    <Stack.Navigator initialRouteName="ShoppingList">
      <Stack.Screen
        name="ShoppingList"
        component={ShoppingList}
        options={{
          header: (props: any) => (
            <HeaderBar {...props} invisibility={false}>
              ShoppingList
            </HeaderBar>
          ),
        }}
      />
      <Stack.Screen
        name="CheckOutScreen"
        component={CheckOutScreen}
        options={{
          header: (props: any) => (
            <HeaderBar {...props} invisibility={false}>
              Checkout
            </HeaderBar>
          ),
        }}
      />
      <Stack.Screen
        name="ChangePaymentMethod"
        component={ChangePaymentMethod}
        options={{
          header: (props: any) => (
            <HeaderBar {...props} invisibility={true}>
              ChangePaymentMethod
            </HeaderBar>
          ),
        }}
      />
      <Stack.Screen
        name="ChangeDeliveryAddress"
        component={ChangeDeliveryAddress}
      />
      <Stack.Screen
        name="ChangeDeliveryOptions"
        component={ChangeDeliveryOptions}
      />
    </Stack.Navigator>
  );
};

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          header: (props: any) => {
            //console.log('hi');
            return (
              <HeaderBar {...props} invisibility={false} display={false}>
                SplashScreen
              </HeaderBar>
            );
          },
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          header: (props: any) => (
            <HeaderBar {...props} invisibility={true}>
              LoginScreen
            </HeaderBar>
          ),
        }}
      />
      <Stack.Screen name="UserScreen" component={UserScreen} />
    </Stack.Navigator>
  );
};

const VegetableStack = () => {
  return (
    <Stack.Navigator initialRouteName="">
      <Stack.Screen name="VegetableScreen" component={VegetableScreen} />
    </Stack.Navigator>
  );
};

const FruitStack = () => {
  return (
    <Stack.Navigator initialRouteName="FruitScreen">
      <Stack.Screen name="FruitScreen" component={FruitScreen} />
    </Stack.Navigator>
  );
};

const BreadStack = () => {
  return (
    <Stack.Navigator initialRouteName="BreadScreen">
      <Stack.Screen name="BreadScreen" component={BreadScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  shadowBottomTabBar: {
    shadowColor: 'rgba(52, 52, 52, 1.1)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default App;
