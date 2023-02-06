import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Title from '../components/ui/Title';
import {GlobalStyles} from '../constants/styles';

const UserScreen = () => {
  return (
    <View style={styles.outerWrapper}>
      <View style={styles.inner}>
        <Title>User Profile</Title>
      </View>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyles.colors.CambridgeBlueLighter,
  },
  innerWrapper: {width: '95%'},
});
