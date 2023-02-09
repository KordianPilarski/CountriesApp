import React, {useContext, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native';
import Title from '../components/ui/Title';
import {GlobalStyles} from '../constants/styles';
import {CountriesContext} from '../store/countries-context';
import Divider from '../components/ui/Divider';
import Question from '../components/quiz/Question';

const QuizScreen = () => {
  const CountriesCtx = useContext(CountriesContext);
  const countries = CountriesCtx.countries;
  const [selectedCountry, setSelectedCountry] = useState('');
  const [firstInputValue, setFirstInputValue] = useState();
  const [secondInputValue, setSecondInputValue] = useState();

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

  const handleBackButtonPress = () => {
    setSelectedCountry('');
  };

  const onCheckAnswersButtonPress = () => {
    if (firstInputValue && secondInputValue) {
      console.log('check values');
    } else {
      console.log('Please add your answers');
    }
  };
  console.log(selectedCountry);
  console.log(firstInputValue);
  console.log(secondInputValue);

  return (
    <View style={styles.outerWrapper}>
      {selectedCountry ? (
        <View style={styles.innerWrapper}>
          <Title>Your choice: </Title>
          <View style={styles.chosenCountryWrapper}>
            <Text style={styles.countryName}>{selectedCountry.name}</Text>
            <Image
              style={styles.countryImage}
              source={{uri: selectedCountry.flag}}
            />
          </View>
          <Divider>Questions:</Divider>
          <View style={styles.bottomPartWrapper}>
            <View style={styles.questionsWrapper}>
              <Question
                question={`What is the capital city of ${selectedCountry.name}?`}
                answer={selectedCountry.capital}
                inputValue={firstInputValue}
                setInputValue={setFirstInputValue}
              />
              <Question
                question={`What is the official name of ${selectedCountry.name}?`}
                answer={selectedCountry.officialName}
                inputValue={secondInputValue}
                setInputValue={setSecondInputValue}
              />
            </View>
            <View style={styles.countryButtonsWrapper}>
              <Button
                title="Back"
                onPress={handleBackButtonPress}
                color={GlobalStyles.colors.MyrtleGreen}
              />
              <Button
                title="Check answers"
                color={GlobalStyles.colors.MyrtleGreen}
                onPress={onCheckAnswersButtonPress}
              />
            </View>
          </View>
        </View>
      ) : (
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
  chosenCountryWrapper: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyles.colors.CambridgeBlue,
    marginBottom: 16,
    paddingLeft: 6,
  },
  countryName: {
    flex: 1,
    fontSize: 32,
  },
  countryImage: {
    width: '50%',
    height: '100%',
  },
  bottomPartWrapper: {
    flex: 1,
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 32,
  },
  questionsWrapper: {
    flex: 1,
    width: '100%',
  },
  countryButtonsWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
