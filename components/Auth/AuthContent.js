import React from 'react';
import {ScrollView, StyleSheet, View, Button} from 'react-native';
import {Text, Alert} from 'react-native';
import AuthForm from './AuthForm';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {GlobalStyles} from '../../constants/styles';

const AuthContent = ({isLogin, onAuthenticate}) => {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  const switchAuthModeHandler = () => {
    if (isLogin) {
      navigation.replace('Signup');
    } else {
      navigation.replace('Login');
    }
  };

  function submitHandler(credentials) {
    let {email, confirmEmail, password, confirmPassword} = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate(email, password);
  }

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.button}>
        <Button
          color={GlobalStyles.colors.MyrtleGreen}
          onPress={switchAuthModeHandler}
          title={isLogin ? 'Create a new user' : 'Log in instead'}
        />
      </View>
    </ScrollView>
  );
};

export default AuthContent;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyles.colors.CambridgeBlue,
  },
  button: {
    marginTop: 16,
    width: '60%',
  },
});
