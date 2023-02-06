import React from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 18,
    color: GlobalStyles.colors.MiddnightGreenEagleGreen,
  },
});
