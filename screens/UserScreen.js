import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Title from '../components/ui/Title';
import {GlobalStyles} from '../constants/styles';
import {UserContext} from '../store/user-context';

const UserScreen = () => {
  const userCtx = useContext(UserContext);

  const handleLogout = () => {
    userCtx.logout();
  };

  const {fullScore, numOfGames, numOfQuestionsAnswered} = userCtx.games;

  return (
    <View style={styles.outerWrapper}>
      <View style={styles.innerWrapper}>
        <Title>User Profile</Title>
        <View>
          <Text style={styles.text}>Email: email@email.com</Text>
          <Text
            style={
              styles.text
            }>{`Points earned: ${fullScore}/${numOfQuestionsAnswered}`}</Text>
          <Text style={styles.text}>{`Games played: ${numOfGames}`}</Text>
          <Text style={styles.text}>
            Good answers percentage {fullScore / numOfQuestionsAnswered}
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Logout"
            onPress={handleLogout}
            color={GlobalStyles.colors.MyrtleGreen}
          />
        </View>
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
  innerWrapper: {
    width: '70%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: GlobalStyles.colors.CambridgeBlue,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonWrapper: {
    width: 150,
  },
  text: {
    fontSize: 16,
    color: GlobalStyles.colors.CambridgeBlueLighter,
    fontWeight: 'bold',
  },
});
