import {useContext, useState} from 'react';
import {Alert} from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import Loading from '../components/ui/Loading';
import {UserContext} from '../store/user-context';
import {createUser} from '../util/auth';

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const userCtx = useContext(UserContext);

  const signupHandler = async (email, password) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      userCtx.authenticate(token, email);
    } catch (err) {
      Alert.alert('Authentication failed.', 'Please check your data');
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <Loading />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
};

export default SignupScreen;
