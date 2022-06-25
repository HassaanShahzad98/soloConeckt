import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../screens/Signup';
import TestScreen from '../screens/TestScreen';
import PhoneNumber from '../screens/PhoneNumber';
import SignUpInterestScreen from '../screens/SignUpInterestScreen';

const Stack = createStackNavigator();

export default  Routes =() => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
        headerShown: false
      }}
      initialRouteName={'TestScreen'}
    >
      <Stack.Screen name="TestScreen" component={TestScreen} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      <Stack.Screen name="SignUpInterestScreen" component={SignUpInterestScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}