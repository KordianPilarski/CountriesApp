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

const QuizScreen = () => {
  const CountriesCtx = useContext(CountriesContext);
  const countries = CountriesCtx.countries;
  const [selectedCountry, setSelectedCountry] = useState('');
  const [firstInputValue, setFirstInputValue] = useState();
  const [secondInputValue, setSecondInputValue] = useState();
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // const questions = [
  //   'what is the name of the capital city?',
  //   'What is the official name?',
  // ];

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
    setShowScore(false);
    setScore(0);
  };

  const onCheckAnswersButtonPress = () => {
    if (firstInputValue && secondInputValue) {
      if (firstInputValue === selectedCountry.capital.toString()) {
        console.log('równe capital');
        setScore(prevScore => prevScore + 1);
      }
      if (secondInputValue === selectedCountry.officialName) {
        console.log('równe official name');
        setScore(prevScore => prevScore + 1);
      }
      console.log(score);
      setShowScore(true);
      setFirstInputValue('');
      setSecondInputValue('');
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
  console.log(selectedCountry);
  console.log(firstInputValue);
  console.log(secondInputValue);

  return (
    <View style={styles.outerWrapper}>
      {selectedCountry ? (
        <ScrollView>
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
        </ScrollView>
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
    justifyContent: 'space-between',
  },
  countryButtonsWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomButtonWrapper: {
    width: 160,
  },
});
