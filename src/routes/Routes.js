import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../screens/Signup';
import TestScreen from '../screens/TestScreen';
import PhoneNumber from '../screens/PhoneNumber';
import SignUpInterestScreen from '../screens/SignUpInterestScreen';
import LoginScreen from '../screens/LoginScreen';
import GetStartedScreen from '../screens/GetStartedScreen';
import VerificationScreen from '../screens/VerificationScreen/VerificationScreen';
import ArtGallaryScreen from '../screens/ArtGallaryScreen/ArtGallaryScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import MessageScreen from '../screens/MessageScreen/MessageScreen';
import ForumScreen from '../screens/ForumScreen/ForumScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import PersonalProfile from '../screens/PersonalProfile/PersonalProfile';
import ProfileTimeline from '../screens/ProfileTimeline/ProfileTimeline';
import Timeline from '../screens/Timeline/Timeline';
import UserProfile from '../screens/UserProfile/UserProfile';
import RewardsScreen from '../screens/RewardsScreen/RewardsScreen';

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
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
      <Stack.Screen name="ArtGallaryScreen" component={ArtGallaryScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      <Stack.Screen name="ForumScreen" component={ForumScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="PersonalProfile" component={PersonalProfile} />
      <Stack.Screen name="ProfileTimeline" component={ProfileTimeline} />
      <Stack.Screen name="Timeline" component={Timeline} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="RewardsScreen" component={RewardsScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}