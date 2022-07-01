import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const SignUpInterestScreen = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Entertainment', value: 'Entertainment'},
        {label: 'Food', value: 'Food'},
        {label: 'Music', value: 'Music'},
        {label: 'Fasion', value: 'Fasion'},
        {label: 'Writing', value: 'Writing'},
        {label: 'Blogging', value: 'Blogging'},
        {label: 'Shooting', value: 'Shooting'},

      ]);
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
          alignContent: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{width: '100%'}}>
          <View style={{width: '100%'}}>
            <TouchableOpacity>
              <Text
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-start',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                X
              </Text>
            </TouchableOpacity>
          </View>
          <ImageBackground
            style={{height: 250, width: 250, alignSelf: 'center'}}
            source={require('../Assets/fadedLogo.png')}
          />
          <View style={{width: '100%'}}>
            <Text style={{color: '#000', marginLeft: 5}}>
              Select Your Interest<Text style={{color: '#EB4335'}}>*</Text>
            </Text>
            <DropDownPicker
            style={{
                borderRadius:10,
                borderColor:'#3084F1'
            }}
            dropDownContainerStyle={{
                marginTop:10,
                borderWidth:0
            }}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                autoScroll={true}
            />
          </View>
        </View>
        <View style={{width: '100%'}}>
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
    marginBottom: 5,
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

export default SignUpInterestScreen;
