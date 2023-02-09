import React from 'react';
import {TextInput} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

const Question = ({question, inputValue, setInputValue}) => {
  // const [inputValue, setInputValue] = useState();
  // console.log(question);
  // console.log(inputValue);

  return (
    <View style={styles.questionWrapper}>
      <Text style={styles.question}> {question}</Text>
      <TextInput
        autoCapitalize="characters"
        autoCorrect={false}
        caretHidden={true}
        style={styles.textInput}
        value={inputValue}
        onChangeText={setInputValue}
      />
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  questionWrapper: {
    marginVertical: 10,
    padding: 12,
    backgroundColor: GlobalStyles.colors.CambridgeBlue,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  question: {
    fontSize: 16,
    paddingVertical: 4,
  },
  textInput: {
    backgroundColor: GlobalStyles.colors.CambridgeBlueLighter,
    borderRadius: 4,
    padding: 4,
  },
});
