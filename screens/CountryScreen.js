import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../constants/styles';

const CountryScreen = ({route}) => {
  const country = route.params.country;
  console.log(country);

  if (!country) {
    return <Text>Somenthing went wrong with your country</Text>;
  }

  return (
    <View style={styles.outerWrapper}>
      <View style={styles.countryWrapper}>
        <Image style={styles.image} source={{uri: country.flag}} />
        <View styles={styles.names}>
          <Text style={styles.name}>{country.name}</Text>
          <Text style={styles.officialName}>{country.officialName}</Text>
        </View>
        <View style={styles.dividerWrapper}>
          <View style={styles.line} />
          <View>
            <Text style={styles.aboutTxt}>About</Text>
          </View>
          <View style={styles.line} />
        </View>
        <View style={styles.aboutItem}>
          <Text style={styles.title}>Capital:</Text>
          <Text style={styles.value}>{country.capital}</Text>
        </View>
        <View style={styles.aboutItem}>
          <Text style={styles.title}>Population:</Text>
          <Text style={styles.value}>{`${country.population} people`}</Text>
        </View>
        <View style={styles.aboutItem}>
          <Text style={styles.title}>Region;</Text>
          <Text style={styles.value}>{country.region}</Text>
        </View>
        <View style={styles.aboutItem}>
          <Text style={styles.title}>Languages:</Text>
          {Object.entries(country.languages).map(([key, value]) => {
            return (
              <Text style={styles.value} key={key}>
                {`${value} `}
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default CountryScreen;

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.CambridgeBlueLighter,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
  },
  countryWrapper: {
    width: '90%',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    backgroundColor: GlobalStyles.colors.CambridgeBlue,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  image: {height: 200, width: '100%', borderRadius: 8},
  names: {
    flex: 1,
    height: 200,
    marginVertical: 8,
  },
  name: {
    fontSize: 24,
    marginTop: 16,
    alignSelf: 'center',
  },
  officialName: {fontSize: 18, alignSelf: 'center'},
  dividerWrapper: {flexDirection: 'row', alignItems: 'center', width: '95%'},
  marginVertical: 8,
  line: {flex: 1, height: 1, backgroundColor: 'black', marginVertical: 20},
  aboutTxt: {width: 50, textAlign: 'center'},
  aboutItem: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 8,
  },
  value: {fontStyle: 'italic', letterSpacing: 1, fontSize: 16},
});
