import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {Text, View} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
