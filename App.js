import React, {useContext, useState} from 'react';
import {StatusBar, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CountriesContextProvider from './store/countries-context';
import {GlobalStyles} from './constants/styles';
import {NavigationContainer} from '@react-navigation/native';
import CountriesScreen from './screens/CountriesScreen';
import QuizScreen from './screens/QuizScreen';
import UserScreen from './screens/UserScreen';
import CountryScreen from './screens/CountryScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import UserContextProvider, {UserContext} from './store/user-context';

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Countries Overview"
        component={CountriesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Country Screen"
        component={CountryScreen}
        options={{
          headerTintColor: GlobalStyles.colors.MiddnightGreenEagleGreen,
          title: 'Country',
          headerStyle: {
            backgroundColor: GlobalStyles.colors.CambridgeBlue,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const loggedinTabs = (
  <BottomTabs.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: GlobalStyles.colors.MyrtleGreen,
      },
      headerTintColor: GlobalStyles.colors.CambridgeBlue,
      tabBarStyle: {backgroundColor: GlobalStyles.colors.MyrtleGreen},
      tabBarActiveTintColor: GlobalStyles.colors.MiddnightGreenEagleGreen,
      tabBarInactiveTintColor: GlobalStyles.colors.CambridgeBlue,
      tabBarLabelPosition: 'beside-icon',
      tabBarActiveBackgroundColor: GlobalStyles.colors.CambridgeBlue,
      tabBarInactiveBackgroundColor:
        GlobalStyles.colors.MiddnightGreenEagleGreen,
    }}>
    <BottomTabs.Screen
      name="Countries"
      component={StackNavigator}
      options={{
        title: 'Countries',
        tabBarLabel: 'Countries',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="earth" size={size} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Quiz"
      component={QuizScreen}
      options={{
        title: 'Quiz',
        tabBarLabel: 'Quiz',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="chat-question"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <BottomTabs.Screen
      name="User"
      component={UserScreen}
      options={{
        title: 'User',
        tabBarLabel: 'User',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </BottomTabs.Navigator>
);

const loggedoutTabs = (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        title: 'Login',
        tabBarLabel: 'Login',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="earth" size={size} color={color} />
        ),
      }}
    />
    <Stack.Screen
      name="Signup"
      component={SignupScreen}
      options={{
        title: 'Signup',
        tabBarLabel: 'Signup',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="earth" size={size} color={color} />
        ),
      }}
    />
  </Stack.Navigator>
);

const Navigation = () => {
  const userCtx = useContext(UserContext);
  const isLoggedIn = userCtx.isLoggedIn;

  return (
    <>
      <StatusBar
        backgroundColor={
          isLoggedIn
            ? GlobalStyles.colors.MyrtleGreen
            : GlobalStyles.colors.CambridgeBlueLighter
        }
        barStyle={isLoggedIn ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer>
        {isLoggedIn ? loggedinTabs : loggedoutTabs}
      </NavigationContainer>
    </>
  );
};

function App() {
  return (
    <>
      <UserContextProvider>
        <CountriesContextProvider>
          <Navigation />
        </CountriesContextProvider>
      </UserContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
