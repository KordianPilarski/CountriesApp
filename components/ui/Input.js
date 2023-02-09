import {View, Text, TextInput, StyleSheet} from 'react-native';

import {GlobalStyles} from '../../constants/styles';

function Input({label, keyboardType, secure, onUpdateValue, value, isInvalid}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    width: 250,
  },
  label: {
    color: GlobalStyles.colors.CambridgeBlueLighter,
    marginBottom: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  labelInvalid: {
    color: GlobalStyles.colors.CambridgeBlue,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: GlobalStyles.colors.CambridgeBlueLighter,
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: GlobalStyles.colors.CambridgeBlueLighter,
  },
});
