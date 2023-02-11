import AuthContent from '../components/Auth/AuthContent';
import {useContext, useState} from 'react';
import {login} from '../util/auth';
import Loading from '../components/ui/Loading';
import {Alert} from 'react-native';
import {UserContext} from '../store/user-context';

const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const userCtx = useContext(UserContext);

  const loginHandler = async (email, password) => {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      userCtx.authenticate(token, email);
    } catch (err) {
      Alert.alert('Authentication failed.', ' Please check your credentials');
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <Loading />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
};

export default LoginScreen;
