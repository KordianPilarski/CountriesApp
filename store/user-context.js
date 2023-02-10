import {createContext, useState} from 'react';

export const UserContext = createContext({
  isLoggedIn: false,
  token: '',
  authenticate: () => {},
  logout: () => {},
  games: {},
  addPlayedGame: () => {},
});

const UserContextProvider = ({children}) => {
  const [authToken, setAuthToken] = useState(true);
  const [games, setGames] = useState({
    fullScore: 0,
    numOfGames: 0,
    numOfQuestionsAnswered: 0,
  });

  const authenticate = token => {
    setAuthToken(token);
  };

  const logout = () => {
    setAuthToken(false);
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
    isLoggedIn: !!authToken,
    authenticate: authenticate,
    logout: logout,
    addPlayedGame: addPlayedGame,
    games: games,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
