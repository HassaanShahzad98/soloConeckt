import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';

const TestScreen = ({navigation}) => {
  const DATA = [
    {
      name : 'Signup'
    },
    {
      name : 'PhoneNumber'
    },
    {
      name : 'SignUpInterestScreen'
    },
    {
      name : 'LoginScreen'
    },
    {
      name : 'GetStartedScreen'
    },
    {
      name : 'VerificationScreen'
    },
    {
      name : 'ArtGallaryScreen'
    },
    {
      name : 'ProfileScreen'
    },
    {
      name : 'MessageScreen'
    },
    {
      name : 'ForumScreen'
    },
    {
      name : 'SettingsScreen'
    },
    {
      name : 'PersonalProfile'
    },
    {
      name : 'ProfileTimeline'
    },
    {
      name : 'Timeline'
    },
    {
      name : 'UserProfile'
    },
  ]

  const renderItem = ({ item }) => (
    <TouchableOpacity
    style={{
      marginBottom:5
    }}
    onPress={() => {
      navigation.navigate(item.name);
    }}>
    <Text style={{backgroundColor:'white' , color : '#000'}}>{item.name}</Text>
  </TouchableOpacity>
  );

  return (
    <View style={{backgroundColor: '#000' , flex:1 , justifyContent:'center'}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    </View>
  );
};

export default TestScreen;
