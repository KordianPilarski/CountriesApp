import React, {useContext, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native';
import Title from '../components/ui/Title';
import {GlobalStyles} from '../constants/styles';
import {CountriesContext} from '../store/countries-context';
import Divider from '../components/ui/Divider';

const QuizScreen = () => {
  const CountriesCtx = useContext(CountriesContext);
  const countries = CountriesCtx.countries;
  const [selectedCountry, setSelectedCountry] = useState();

  const renderCountryButton = itemData => {
    const country = itemData.item;

    const onPressHandle = () => {
      const selectedCountry = CountriesCtx.getCountry(country.id);
      setSelectedCountry(selectedCountry);
    };

    return (
      <View style={styles.buttonWrapper}>
        <Button
          color={GlobalStyles.colors.MyrtleGreen}
          title={country.name}
          onPress={onPressHandle}
        />
      </View>
    );
  };

  return (
    <View style={styles.outerWrapper}>
      {selectedCountry && (
        <View style={styles.innerWrapper}>
          <Title>Your choice: </Title>
          <View style={styles.chosenCountry}>
            <Text style={styles.countryName}>{selectedCountry.name}</Text>
            <Image
              style={styles.countryImage}
              source={{uri: selectedCountry.flag}}
            />
          </View>
          <View style={styles.divider}>
            <Divider>Questions:</Divider>
          </View>
        </View>
      )}
      {!selectedCountry && (
        <View style={styles.innerWrapper}>
          <Title>Choose your Country</Title>
          <View style={styles.buttonsWrapper}>
            <FlatList
              data={countries}
              renderItem={renderCountryButton}
              keyExtractor={country => country.id}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerWrapper: {
    flex: 1,
    width: '100%',
    backgroundColor: GlobalStyles.colors.CambridgeBlueLighter,
    alignItems: 'center',
    paddingBottom: 16,
  },
  buttonsWrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  buttonWrapper: {
    width: '100%',
    paddingVertical: 3,
    borderRadius: 8,
  },
  chosenCountry: {
    flex: 1,
    width: '100%',
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryName: {
    flex: 1,
    fontSize: 32,
  },
  countryImage: {
    width: '50%',
    height: 150,
  },
  divider: {
    width: '80%',
  },
});
