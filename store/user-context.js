import {createContext, useState} from 'react';

export const UserContext = createContext({
  isLoggedIn: false,
  token: '',
  authenticate: () => {},
  logout: () => {},
});

const UserContextProvider = ({children}) => {
  const [authToken, setAuthToken] = useState();

  const authenticate = token => {
    setAuthToken(token);
  };

  const logout = () => {
    setAuthToken(false);
  };

  const value = {
    token: authToken,
    isLoggedIn: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
