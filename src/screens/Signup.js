import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { ContextStore } from '../ContextApi/ContextProvider';

const Signup = ({navigation}) => {
  let {Theme} = useContext(ContextStore);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor:Theme.bg
      }}>
      <View
        style={{flex: 1, justifyContent: 'space-between', marginVertical: 10}}>
        <View>
          <ImageBackground
            style={{
              height: 100,
              width: 100,
              alignSelf: 'center',
              marginTop: 20,
            }}
            source={Theme.themeName==='Light'?require('../Assets/Logo1.png') : require('../Assets/Logo1Gold.png')}
          />
          <Text
            style={{
              color: Theme.txt,
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Create an Account
          </Text>
          <Text style={{color: Theme.txt, alignSelf: 'center'}}>
            Sign up now to start with an account
          </Text>
        </View>
        <View style={{justifyContent: 'space-around', bottom: 0}}>
          <View>
            <Text style={{color: '#3084F1' , marginLeft : 5}}>
              Full Name<Text style={{color: '#EB4335'}}>*</Text>
            </Text>
            <TextInput
              onFocus={() => console.log('focus received')}
              onBlur={() => console.log('focus lost')}
              style={styles.focusedInput}
            />
          </View>
          <View>
            <Text style={{color: '#3084F1' , marginLeft : 5}}>
              Email Address<Text style={{color: '#EB4335'}}>*</Text>
            </Text>
            <TextInput
              onFocus={() => console.log('focus received')}
              onBlur={() => console.log('focus lost')}
              style={Theme.themeName==='Light'?styles.nonFocusedInput:styles.nonFocusedInputDark}
            />
          </View>
          <View>
            <Text style={{color: '#3084F1' , marginLeft : 5}}>
              Password<Text style={{color: '#EB4335'}}>*</Text>
            </Text>
            <TextInput
              onFocus={() => console.log('focus received')}
              onBlur={() => console.log('focus lost')}
              style={Theme.themeName==='Light'?styles.nonFocusedInput:styles.nonFocusedInputDark}
            />
          </View>
          <View>
            <Text style={{color: '#3084F1' , marginLeft : 5}}>
              Confirn Password<Text style={{color: '#EB4335'}}>*</Text>
            </Text>
            <TextInput
              onFocus={() => console.log('focus received')}
              onBlur={() => console.log('focus lost')}
              style={Theme.themeName==='Light'?styles.nonFocusedInput:styles.nonFocusedInputDark}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            boxType={'circle'}
            tintColors={'#9E663C'}
            onCheckColor={'#6F763F'}
            onFillColor={'#4DABEC'}
            onTintColor={'#F4DCF8'}
            animationDuration={0.5}
            disabled={false}
            onAnimationType={'bounce'}
          />
          <Text style={{color: Theme.txt}}>
            I have read and agreed to terms and conditions
          </Text>
        </View>
        <TouchableOpacity
          style={{
            marginHorizontal: 5,
            backgroundColor: '#1676F3',
            borderRadius: 20,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              paddingVertical: 20,
              color: '#fff',
              fontSize: 18,
            }}>
            Next
          </Text>
        </TouchableOpacity>
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
  nonFocusedInputDark: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#0e0e0e',
    borderBottomColor: '#rgba(240,240,240,0.2)',
    borderRadius: 10,
  },
  focusedInput: {
    height: 40,
    marginVertical: 12,
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
export default Signup;
