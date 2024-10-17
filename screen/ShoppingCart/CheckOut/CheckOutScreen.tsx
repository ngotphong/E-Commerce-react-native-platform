import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import BaseText from '../../../component/BaseText/BaseText';
import {Switch} from 'react-native-switch';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// This is the Checkout/Payment screen
const Payment = (prop: any) => {
  // This is a useState that will store the cardID of the customer
  const [cardNumber, setCardNumber] = useState('3127 3819 2838 7518');

  // This will save the deliverOption that the customer has chosen
  const [deliveryOption, setDeliveryOption] = useState(2);

  // This receives the delivery option recieved and changes the state of deliveryOption
  const updateDeliveryOptions = (options: number) => {
    setDeliveryOption(options);
  };

  // This enables the switch to be able to switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  // Delivery options icon highlight
  let walkingImage =
    deliveryOption === 1
      ? require('../../../asset/CheckOut/man-walking/man-walking2.png')
      : deliveryOption === 3
      ? require('../../../asset/CheckOut/man-walking/man-walking.png')
      : require('../../../asset/CheckOut/man-walking/man-walking.png');

  let bikeImage =
    deliveryOption === 2
      ? require('../../../asset/CheckOut/bike/bike2.png')
      : deliveryOption === 1
      ? require('../../../asset/CheckOut/bike/bike.png')
      : require('../../../asset/CheckOut/bike/bike.png');

  let droneImage =
    deliveryOption === 3
      ? require('../../../asset/CheckOut/drone/drone2.png')
      : deliveryOption === 2
      ? require('../../../asset/CheckOut/drone/drone.png')
      : require('../../../asset/CheckOut/drone/drone.png');

  return (
    // Creates a SafeAreaView for the background that wraps the entire thing so the content is safe
    <SafeAreaView>
      {/* Creates a ScrollView within the SafeAreaView for a visible scroll bar */}
      <ScrollView style={styles.background}>
        {/* -----Payment method----- */}
        <View style={styles.optionContainer}>
          {/* Payment method header */}
          <View style={styles.subHeadingContainer}>
            {/* Payment method title */}
            <BaseText style={styles.subHeader}>Payment method</BaseText>
            {/* Change payment method button */}
            <TouchableOpacity
              // navigate to ChangePaymentMethod
              onPress={() => prop.navigation.navigate('ChangePaymentMethod')}>
              <BaseText style={styles.changeSubHeading}>CHANGE</BaseText>
            </TouchableOpacity>
          </View>

          {/* Payment method content */}
          <View
            style={{
              marginTop: 30,
              marginBottom: 30,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 30,
            }}>
            {/* Payment Icon */}
            <Image
              source={require('../../../asset/CheckOut/credit-card/credit-card.png')}
              style={styles.icon}
            />
            {/* Payment cardID */}
            <BaseText>{cardNumber}</BaseText>
          </View>
        </View>
        {/* -----Delivery address----- */}
        <View style={styles.optionContainer}>
          {/* Delivery address header */}
          <View style={styles.subHeadingContainer}>
            {/* Delivery address title */}
            <BaseText style={styles.subHeader}>Delivery address</BaseText>
            {/* Change delivery address button*/}
            <TouchableOpacity>
              <BaseText style={styles.changeSubHeading}>CHANGE</BaseText>
            </TouchableOpacity>
          </View>

          {/* Delivery address content   */}
          <View style={styles.textAndIconContainer1}>
            {/* Delivery address Icon */}
            <Image
              source={require('../../../asset/CheckOut/home/home.png')}
              style={styles.icon}
            />
            {/* Delivery address texts */}
            <View>
              <BaseText>Alex</BaseText>
              <BaseText>District 12</BaseText>
              <BaseText>HCM City</BaseText>
              <BaseText>Vietnam</BaseText>
              <BaseText>-</BaseText>
            </View>
          </View>
        </View>
        {/* -----Delivery options----- */}
        <View style={styles.optionContainer}>
          {/* Delivery options header */}
          <View style={[styles.subHeadingContainer, {marginBottom: 10}]}>
            {/* Delivery options title */}
            <BaseText style={styles.subHeader}>Delivery options</BaseText>
            {/* Delivery options change button */}
            <TouchableOpacity>
              <BaseText style={styles.changeSubHeading}>CHANGE</BaseText>
            </TouchableOpacity>
          </View>

          {/* Delivery options content */}
          {/* Walking */}
          <TouchableOpacity
            style={styles.deliveryOptionItem}
            // Calling updateDeliveryOptions and then it calls the useState function that changes it to this corresponding option(1)
            onPress={() => updateDeliveryOptions(1)}>
            {/* Contains the option and icon */}
            <View style={styles.textAndIconContainer2}>
              {/* Icon */}
              <Image source={walkingImage} style={styles.icon} />
              {/* This text will base off the useState deliveryOption to highlight the chosen accordingly  */}
              <BaseText
                style={{
                  color:
                    deliveryOption === 1
                      ? '#7203FF'
                      : deliveryOption === 3
                      ? '#9586A8'
                      : '#9586A8',
                }}>
                I'll pick it up myself
              </BaseText>
            </View>

            {/* This adds a tick to the selected item using the deliveryOption useState */}
            {deliveryOption === 1 ? (
              <Image
                source={require('../../../asset/CheckOut/tick/tick2.png')}
              />
            ) : deliveryOption === 3 ? (
              <BaseText></BaseText>
            ) : (
              <BaseText></BaseText>
            )}
          </TouchableOpacity>

          {/* Bike */}
          <TouchableOpacity
            style={styles.deliveryOptionItem}
            // Calling updateDeliveryOptions and then it calls the useState function that changes it to this corresponding option(2)
            onPress={() => updateDeliveryOptions(2)}>
            {/* Contains the option and icon */}
            <View style={styles.textAndIconContainer2}>
              {/* Icon */}
              <Image source={bikeImage} style={styles.icon} />
              {/* This text will base off the useState deliveryOption to highlight the chosen accordingly  */}
              <BaseText
                style={{
                  color:
                    deliveryOption === 2
                      ? '#7203FF'
                      : deliveryOption === 1
                      ? '#9586A8'
                      : '#9586A8',
                }}>
                By courier
              </BaseText>
            </View>

            {/* This adds a tick to the selected item using the deliveryOption useState */}
            {deliveryOption === 2 ? (
              <Image
                source={require('../../../asset/CheckOut/tick/tick2.png')}
              />
            ) : deliveryOption === 1 ? (
              <BaseText></BaseText>
            ) : (
              <BaseText></BaseText>
            )}
          </TouchableOpacity>

          {/* Drone */}
          <TouchableOpacity
            style={styles.deliveryOptionItem}
            // Calling updateDeliveryOptions and then it calls the useState function that changes it to this corresponding option(3)
            onPress={() => updateDeliveryOptions(3)}>
            {/* Contains the option and icon */}
            <View style={styles.textAndIconContainer2}>
              {/* Icon */}
              <Image source={droneImage} style={styles.icon} />
              {/* This text will base off the useState deliveryOption to highlight the chosen accordingly  */}
              <BaseText
                style={{
                  color:
                    deliveryOption === 3
                      ? '#7203FF'
                      : deliveryOption === 2
                      ? '#9586A8'
                      : '#9586A8',
                }}>
                By drone
              </BaseText>
            </View>

            {/* This adds a tick to the selected item using the deliveryOption useState */}
            {deliveryOption === 3 ? (
              <Image
                source={require('../../../asset/CheckOut/tick/tick2.png')}
              />
            ) : deliveryOption === 2 ? (
              <BaseText></BaseText>
            ) : (
              <BaseText></BaseText>
            )}
          </TouchableOpacity>
        </View>
        {/*-----Non-contact-delivery----- */}
        <View style={styles.optionContainer}>
          {/* Non-contact-delivery header */}
          <View style={styles.subHeadingContainer}>
            {/* Non-contact-delivery title */}
            <BaseText style={styles.subHeader}>Non-contact-delivery</BaseText>
            {/* Non-contact-delivery switch option */}
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
              disabled={false}
              circleBorderWidth={-1}
              activeText={'Yes'}
              inActiveText={'No'}
              circleSize={21}
              barHeight={24}
              backgroundActive={'#E2CBFF'}
              backgroundInactive={'#6C0EE4'}
              innerCircleStyle={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              activeTextStyle={{color: '#6C0EE4', fontSize: 14}} // Active text color
              inactiveTextStyle={{color: '#fff', fontSize: 14}} // Inactive text color
              switchLeftPx={4} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
              switchRightPx={2.6} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
              switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
            />
          </View>
        </View>

        {/* Dummy Body */}
        <View style={{height: 100, width: '100%'}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F6F5F5',
    paddingTop: windowHeight * 0.015,
  },
  optionContainer: {
    padding: windowHeight * 0.02,
  },
  subHeadingContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  subHeader: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: -0.4099999964237213,
    textAlign: 'left',
    color: '#2D0C57',
  },
  changeSubHeading: {
    color: '#7203FF',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 18,
    letterSpacing: -0.009999999776482582,
  },
  deliveryOptionItem: {
    height: windowHeight / 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textAndIconContainer1: {
    paddingTop: windowHeight * 0.03,
    height: windowHeight * 0.17,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: windowWidth * 0.08,
  },
  textAndIconContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: windowWidth * 0.075,
  },
  icon: {
    // setting both with windWidth so it gives a square shape for the icon
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
  },
});
