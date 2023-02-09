import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';

const Divider = ({children}) => {
  return (
    <View style={styles.dividerWrapper}>
      <View style={styles.line} />
      <View>
        <Text style={styles.text}>{children}</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  dividerWrapper: {flexDirection: 'row', alignItems: 'center', width: '90%'},
  line: {flex: 1, height: 1, backgroundColor: 'black', marginVertical: 20},
  text: {width: 100, textAlign: 'center'},
});
