import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const TestScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#000' , flex:1 , justifyContent:'center'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        <Text style={{backgroundColor:'white' , color : '#000'}}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PhoneNumber');
        }}>
        <Text style={{backgroundColor:'white' , color : '#000'}}>PhoneNumber</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignUpInterestScreen');
        }}>
        <Text style={{backgroundColor:'white' , color : '#000'}}>SignUpInterestScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestScreen;
