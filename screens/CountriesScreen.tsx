import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../constants/styles';

const CountriesScreen = () => {
  return (
    <View style={styles.outerWrapper}>
      <View style={styles.innerWrapper}>
        <Text>Countries ss</Text>
      </View>
    </View>
  );
};

export default CountriesScreen;

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyles.colors.CambridgeBlueLighter,
  },
  innerWrapper: {width: 90},
});
