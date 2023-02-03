import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GlobalStyles} from './constants/styles';
import {NavigationContainer} from '@react-navigation/native';
import CountriesScreen from './screens/CountriesScreen';
import QuizScreen from './screens/QuizScreen';
import UserScreen from './screens/UserScreen';

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CountriesOverview = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Countries Overview"
        component={CountriesScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
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
          component={CountriesOverview}
          options={{
            title: 'Countries',
            tabBarLabel: 'Countries',
            // tabBarIcon: ({color, size}) => (
            //   <Ionicons name="globe" size={size} color={color} />
            // ),
          }}
        />
        <BottomTabs.Screen
          name="Quiz"
          component={QuizScreen}
          options={{
            title: 'Quiz',
            tabBarLabel: 'Quiz',
            // tabBarIcon: ({color, size}) => (
            //   <Ionicons
            //     name="checkmark-circle-outline"
            //     size={size}
            //     color={color}
            //   />
            // ),
          }}
        />
        <BottomTabs.Screen
          name="User"
          component={UserScreen}
          options={{
            title: 'User',
            tabBarLabel: 'User',
            // tabBarIcon: ({color, size}) => (
            //   <Ionicons name="people" size={size} color={color} />
            // ),
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
