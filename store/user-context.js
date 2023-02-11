import {createContext, useState} from 'react';

export const UserContext = createContext({
  isLoggedIn: false,
  token: '',
  userEmail: '',
  authenticate: () => {},
  logout: () => {},
  games: {},
  addPlayedGame: () => {},
});

const UserContextProvider = ({children}) => {
  const [authToken, setAuthToken] = useState();
  const [userEmail, setUserEmail] = useState();
  const [games, setGames] = useState({
    fullScore: 0,
    numOfGames: 0,
    numOfQuestionsAnswered: 0,
  });

  const authenticate = (token, email) => {
    setAuthToken(token);
    setUserEmail(email);
  };

  const logout = () => {
    setAuthToken(false);
    setGames({
      ...games,
      fullScore: 0,
      numOfGames: 0,
      numOfQuestionsAnswered: 0,
    });
  };

  console.log(games);

  const addPlayedGame = (score, numOfQuestions) => {
    setGames({
      ...games,
      fullScore: games.fullScore + score,
      numOfGames: games.numOfGames + 1,
      numOfQuestionsAnswered: games.numOfQuestionsAnswered + numOfQuestions,
    });
  };

  const value = {
    token: authToken,
    userEmail: userEmail,
    isLoggedIn: !!authToken,
    games: games,
    authenticate: authenticate,
    logout: logout,
    addPlayedGame: addPlayedGame,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
