import React from 'react';
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ImageBackground,
} from 'react-native';
import {GlobalStyles} from '../constants/styles';

const CountryGrid = ({country}) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{color: GlobalStyles.colors.CambridgeBlue}}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : '',
        ]}>
        <ImageBackground
          style={styles.backgroundImage}
          source={{uri: country.flags.png}}
        />
        <View style={styles.innerCountainer}>
          <Text style={styles.commonName}>{country.name.common}</Text>
          <Text>{country.name.official}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CountryGrid;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerCountainer: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    flex: 2,
  },
  commonName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 4,
  },
});
