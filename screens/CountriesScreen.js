import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import CountryGrid from '../components/CountryGrid';
import {GlobalStyles} from '../constants/styles';

import {COUNTRIES} from '../data/dummy-data';

const CountriesScreen = () => {
  // const [countries, setCountries] = useState('');

  // useEffect(() => {
  //   // if (countries) {
  //   //   return;
  //   // }

  //   fetch('https://restcountries.com/v3.1/region/europe')
  //     .then(res => res.json())
  //     .then(data => {
  //       setCountries(data);
  //       console.log('effect');
  //     });
  // }, []);

  const renderCountryItem = itemData => {
    const country = itemData.item;

    return <CountryGrid country={country} />;
  };

  return (
    <View style={styles.outerWrapper}>
      <View style={styles.innerWrapper}>
        <FlatList
          data={COUNTRIES}
          keyExtractor={country => country.name.common}
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
  innerWrapper: {width: '95%'},
});
