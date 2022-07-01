import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import React from 'react';

const PhoneNumber = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fafafa',
      }}>
      <View
        style={{
          flex: 1,
          //justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <View style={{width: '100%'}}>
            <TouchableOpacity>
          <Text style={{flexDirection: 'row', alignSelf: 'flex-start', fontWeight:'bold', fontSize:20}}>X</Text>
            </TouchableOpacity>
        </View>
        <ImageBackground
          style={{height: 250, width: 250}}
          source={require('../Assets/fadedLogo.png')}
        />
        <View style={{width: '100%'}}>
          <Text style={{color: '#000', marginLeft: 5}}>
            Phone Number<Text style={{color: '#EB4335'}}>*</Text>
          </Text>
          <TextInput
            onFocus={() => console.log('focus received')}
            onBlur={() => console.log('focus lost')}
            style={styles.focusedInput}
          />
          <TouchableOpacity>
          <Text
            style={{
              color: '#3084F1',
              alignSelf: 'flex-end',
              borderBottomColor: '#3084F1',
              borderBottomWidth: 1,
              marginBottom:30,
              fontWeight:'bold'
            }}>
            Any problems Login?
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              //marginHorizontal: 5,
              backgroundColor: '#1676F3',
              borderRadius: 20,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                paddingVertical: 18,
                color: '#fff',
                fontSize: 18,
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nonFocusedInput: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#fafafa',
    borderBottomColor: '#rgba(0,0,0,0.2)',
    borderRadius: 10,
  },
  focusedInput: {
    height: 40,
    marginTop: 12,
    marginBottom:5,
    borderWidth: 1,
    padding: 10,
    borderColor: '#3084F1',
    borderRadius: 10,
  },
  checkbox: {
    alignSelf: 'center',
    color: '#000',
  },
});

export default PhoneNumber;
