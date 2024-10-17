import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import BaseText from '../../../../component/BaseText/BaseText';
import LinearGradient from 'react-native-linear-gradient';
import MyButton from '../../../../component/MyButton/MyButton';
import Heading from '../../../../component/Heading/Heading';
import InputBar from '../../../../component/InputBar/InputBar';

import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import GridIcon from '../../../../asset/BottomTabNavigator/grid.svg';

// This is an exclusive custom component for the screen ChangePaymentMethod
const CardText = ({children, style}: any) => {
  return (
    <Text
      style={[
        {fontFamily: 'SF-Pro-Display', color: 'white', fontSize: 26},
        style,
      ]}>
      {children}
    </Text>
  );
};

// Storing the card's dimension and a few others so it is easier to scale it up or down sometimes
// const cardHeight = 240 * 0.95,
//   cardWidth = 374 * 0.95,
//   cardCircleHeight = 331 * 0.95,
//   cardCircleWidth = 335 * 0.95;

const cardHeight = windowHeight * 0.3,
  cardWidth = windowWidth * 0.9,
  cardCircleHeight = windowHeight * 0.4,
  cardCircleWidth = windowWidth * 0.8;

// This is the ChangePaymentMethod screen, that will be directed with a button from the Payment screen
const ChangePaymentMethod: React.FC = () => {
  // useStates to store all the datas
  const [name, setName] = useState('ALEXANDRA SMITH');
  const [cardNumber, setCardNumber] = useState('4747 4747 4747 4747');
  const [expiryDate, setExpiryDate] = useState('7/21');

  let nameLive, cardNumberLive, expiryDateLive;

  // keyboardVerticalOffset will be 40 if platform is android otherwise = 0
  const keyboardVerticalOffset = Platform.OS === 'android' ? 100 : 0;

  const changeName = (text: any) => {
    setName(text);
  };

  const changeCardNumber = (text: any) => {
    setCardNumber(text);
  };

  const changeExpiryDate = (text: any) => {
    setExpiryDate(text);
  };

  const cardNumberDimensions = {x: 0, y: 0, width: 0, height: 0};

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        {/* This contains the page and aligns it as this page has no ScrollView this will be a fixed page */}
        <View style={styles.pageContainer}>
          {/* -----Title container----- */}
          <View
            style={{
              width: cardWidth,
            }}>
            <Heading style={{fontSize: 30, marginTop: 10, marginBottom: 10}}>
              Credit / Debit card
            </Heading>
          </View>

          {/* -----Card----- */}
          <LinearGradient
            colors={['#B993D6', '#8CA6DB']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.cardBase}>
            <View style={styles.cardCircle}></View>
            <Image
              source={require('../../../../asset/CheckOut/ChangePayment/Card/mc_symbol.png')}
              style={styles.cardSymbol}
            />
            {/* cardID */}
            <CardText
              style={{
                position: 'absolute',
                top: cardHeight * 0.5,
                transform: [{translateY: -20}],
                left: cardWidth * 0.06,
              }}>
              {cardNumber}
            </CardText>
            {/* cardName */}
            <CardText
              style={[
                {
                  position: 'absolute',
                  bottom: cardHeight * 0.13,
                  left: cardWidth * 0.06,
                },
                {fontSize: 20},
              ]}>
              {name}
            </CardText>
            {/* cardExpiryDate */}
            <CardText
              style={[
                {
                  position: 'absolute',
                  bottom: cardHeight * 0.13,
                  right: cardWidth * 0.06,
                },
                {fontSize: 20},
              ]}>
              {expiryDate}
            </CardText>
          </LinearGradient>

          {/* -----Take picture button----- */}
          <TouchableOpacity style={styles.takePicture}>
            <Image
              source={require('../../../../asset/CheckOut/ChangePayment/TakePicture/Takepicture.png')}
              // static styling
              style={{height: 30, width: 35}}
            />
          </TouchableOpacity>

          {/* -----Input name----- */}
          <View style={styles.inputContainer}>
            <BaseText small style={styles.inputText}>
              Name on card
            </BaseText>
            <InputBar
              style={styles.inputTextBar}
              onChangeText={changeName}></InputBar>
          </View>

          {/* -----Card number----- */}
          <View style={styles.inputContainer}>
            <BaseText small style={styles.inputText}>
              Card number
            </BaseText>
            {/* With the card symbol icon */}
            <View
              onLayout={event => {
                const {x, y, width, height} = event.nativeEvent.layout;
                cardNumberDimensions.x = x;
                cardNumberDimensions.y = y;
                cardNumberDimensions.width = width;
                cardNumberDimensions.height = height;
              }}>
              <InputBar
                style={styles.inputTextBar}
                onChangeText={changeCardNumber}
              />
              <Image
                style={{
                  // static styling for the card symbol inside the cardNumberInput
                  position: 'absolute',
                  top: 11,
                  right: 15,
                  height: 18,
                  width: 29,
                }}
                source={require('../../../../asset/CheckOut/ChangePayment/Card/mc_symbol.png')}
              />
            </View>
          </View>

          {/* -----Expiry date & CVC----- */}
          <View
            style={[
              styles.inputContainer,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}>
            {/* Expiry date */}
            <View>
              <BaseText small style={styles.inputText}>
                Expiry date
              </BaseText>
              <InputBar
                style={[styles.inputTextBar, {width: cardWidth / 2.2}]}
                onChangeText={changeExpiryDate}></InputBar>
            </View>

            {/* CVC */}
            <View>
              <BaseText small style={styles.inputText}>
                CVC
              </BaseText>
              <View>
                <InputBar
                  style={[
                    styles.inputTextBar,
                    {width: cardWidth / 2.2},
                  ]}></InputBar>
                <Image
                  style={{
                    // static styling for the card symbol inside the cardNumberInput
                    position: 'absolute',
                    top: 10,
                    right: 15,
                    height: 20,
                    width: 27,
                  }}
                  source={require('../../../../asset/CheckOut/ChangePayment/HintCard/Hint.png')}
                />
              </View>
            </View>
          </View>

          {/* -----Use/submit button----- */}
          <MyButton style={styles.useCardButton}>USE THIS CARD</MyButton>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChangePaymentMethod;

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#F6F5F5',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBase: {
    position: 'relative',
    width: cardWidth,
    height: cardHeight,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  cardCircle: {
    position: 'absolute',
    width: '90%',
    height: cardCircleHeight,
    top: -((cardCircleHeight - cardHeight) / 2),
    left: cardWidth * 0.35,
    borderRadius: cardCircleWidth / 2,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  cardSymbol: {
    position: 'absolute',
    width: cardWidth * 0.17,
    height: cardHeight * 0.16,
    top: cardHeight * 0.083,
    right: cardWidth * 0.06,
  },
  textInCard: {
    position: 'absolute',
    top: cardHeight / 2 - 20,
  },
  takePicture: {
    margin: windowWidth * 0.04,
  },
  inputText: {
    paddingLeft: windowWidth * 0.03,
  },
  inputTextBar: {
    width: cardWidth,
  },
  inputContainer: {
    marginBottom: windowHeight * 0.025,
    width: cardWidth,
  },
  useCardButton: {
    width: cardWidth,
    height: windowHeight * 0.06,
  },
});
