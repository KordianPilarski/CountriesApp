import React, {useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import CountryGrid from '../components/CountryGrid';
import {GlobalStyles} from '../constants/styles';

import {CountriesContext} from '../store/countries-context';

const CountriesScreen = ({navigation}) => {
  const countriesCtx = useContext(CountriesContext);

  const renderCountryItem = itemData => {
    const country = itemData.item;

    const pressHandler = () => {
      navigation.navigate('Country Screen', {country});
    };

    return <CountryGrid country={country} onPress={pressHandler} />;
  };

  return (
    <View style={styles.outerWrapper}>
      <View style={styles.innerWrapper}>
        <FlatList
          data={countriesCtx.countries}
          keyExtractor={country => country.name}
          renderItem={renderCountryItem}
          numColumns={2}
        />
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
  innerWrapper: {width: '95%', marginVertical: 16},
});
