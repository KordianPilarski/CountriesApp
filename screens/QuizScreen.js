import React, {useContext, useState} from 'react';
import {FlatList, Image, Text, View, ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native';
import Title from '../components/ui/Title';
import {GlobalStyles} from '../constants/styles';
import {CountriesContext} from '../store/countries-context';
import Divider from '../components/ui/Divider';
import Question from '../components/quiz/Question';
import Answers from '../components/quiz/Answers';
import {Alert} from 'react-native';
import {UserContext} from '../store/user-context';

const QuizScreen = () => {
  const CountriesCtx = useContext(CountriesContext);
  const countries = CountriesCtx.countries;
  const userCtx = useContext(UserContext);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [firstInputValue, setFirstInputValue] = useState();
  const [secondInputValue, setSecondInputValue] = useState();
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // const questions = [
  //   'what is the name of the capital city?',
  //   'What is the official name?',
  // ];

  const renderCountryButton = country => {
    const onPressHandle = () => {
      const selectedCountry = CountriesCtx.getCountry(country.id);
      setSelectedCountry(selectedCountry);
    };

    return (
      <View style={styles.chooseCountryButtonWrapper} key={country.id}>
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
    setShowScore(false);
    setScore(0);
  };

  const onCheckAnswersButtonPress = () => {
    if (firstInputValue && secondInputValue) {
      let score = 0;

      if (firstInputValue === selectedCountry.capital.toString()) {
        console.log('równe capital');
        score++;
      }
      if (secondInputValue === selectedCountry.officialName) {
        console.log('równe official name');
        score++;
      }
      setShowScore(true);
      setScore(score);
      setFirstInputValue('');
      setSecondInputValue('');
      userCtx.addPlayedGame(score, 2);
    } else {
      Alert.alert(
        'Please add your answers.',
        'You can check answers in Countries tab.',
      );
    }
  };

  const onPlayAgainPress = () => {
    setScore(0);
    setShowScore(false);
  };

  const selectedCountryScreen = (
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
        {showScore && <Answers score={score} numOfQuestions={2} />}
        <View style={styles.countryButtonsWrapper}>
          <View style={styles.bottomButtonWrapper}>
            <Button
              title="Back"
              onPress={handleBackButtonPress}
              color={GlobalStyles.colors.MyrtleGreen}
            />
          </View>
          <View style={styles.bottomButtonWrapper}>
            <Button
              title={!showScore ? 'Check answers' : 'Play Again'}
              color={GlobalStyles.colors.MyrtleGreen}
              onPress={
                !showScore ? onCheckAnswersButtonPress : onPlayAgainPress
              }
            />
          </View>
        </View>
      </View>
    </View>
  );

  const selectCountryScreen = (
    <>
      <Title>Choose your Country</Title>
      <View style={styles.chooseCountryButtonsWrapper}>
        {countries.map(country => renderCountryButton(country))}
      </View>
    </>
  );

  return (
    <ScrollView>
      <View style={styles.outerWrapper}>
        {selectedCountry ? selectedCountryScreen : selectCountryScreen}
      </View>
    </ScrollView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerChooseCountryWrapper: {},
  chooseCountryButtonsWrapper: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: GlobalStyles.colors.CambridgeBlueLighter,
  },
  chooseCountryButtonWrapper: {
    width: '43%',
    padding: 2,
  },
  innerWrapper: {
    alignItems: 'center',
  },
  chosenCountryWrapper: {
    flex: 1,
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
    alignItems: 'center',
    paddingBottom: 32,
  },

  countryButtonsWrapper: {
    flexDirection: 'row',
    gap: 15,
  },
  bottomButtonWrapper: {
    marginTop: 8,
    width: 140,
  },
});
