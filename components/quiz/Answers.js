import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

const Answers = ({score, numOfQuestions}) => {
  const textFeedbacks = ['Try harder!', 'Can be better!', 'Well played!'];

  const feedback =
    score / numOfQuestions < 0.34
      ? textFeedbacks[0]
      : score / numOfQuestions < 0.67
      ? textFeedbacks[1]
      : textFeedbacks[2];

  return (
    <View style={styles.answersWrapper}>
      <Text style={styles.answer}>
        Your score {score}/{numOfQuestions}
      </Text>
      <Text style={styles.answer}>{feedback}</Text>
    </View>
  );
};

export default Answers;

const styles = StyleSheet.create({
  answersWrapper: {
    marginVertical: 10,
    padding: 12,
    width: 200,
    backgroundColor: GlobalStyles.colors.MiddnightGreenEagleGreen,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  answer: {
    fontSize: 16,
    paddingVertical: 4,
    color: GlobalStyles.colors.CambridgeBlueLighter,
  },
});
