import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

import {getHeaderTitle} from '@react-navigation/elements';
import Heading from '../Heading/Heading';

const BackArrowImage = require('../../asset/HeaderBar/back.png');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HeaderBar = ({
  route,
  navigation,
  options,
  back,
  invisibility,
  display = true,
  children,
}: any) => {
  const title = getHeaderTitle(options, route.name);
  //console.log(`window width: ${windowWidth}`);
  //console.log(`window height: ${windowHeight}`);

  const backgroundColor = (invisibility: any) =>
    !invisibility ? '#F6F5F5' : 'rgba(0, 0, 0, 0)';

  const dropShadow = (invisibility: any) =>
    !invisibility
      ? {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0,
          shadowRadius: 7.49,

          elevation: 12,
        }
      : undefined;

  return display === true ? (
    <View
      style={[
        styles.headerBarContainer,
        {backgroundColor: '#F6F5F5'},
        dropShadow(invisibility),
      ]}>
      <View style={styles.headerTitle}>
        {!invisibility ? (
          <Heading style={styles.headingStyle}>{children}</Heading>
        ) : (
          <></>
        )}
      </View>
      {back ? (
        <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
          <Image source={BackArrowImage} style={styles.backIcon} />
        </TouchableOpacity>
      ) : undefined}
    </View>
  ) : undefined;
};

export default HeaderBar;

const styles = StyleSheet.create({
  headerBarContainer: {
    padding: 0,
    width: windowWidth,
    height: windowHeight * 0.1,
    position: 'relative',
  },
  headerTitle: {
    width: windowWidth,
    height: windowHeight * 0.09,
    paddingBottom: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  backButton: {
    position: 'absolute',
    top: (windowHeight * 6 - windowHeight * 3) / 55,
    left: 15,
  },
  headingStyle: {
    fontSize: 15,
    fontWeight: 600,
  },
  backIcon: {
    height: 22,
    width: 22,
  },
});
