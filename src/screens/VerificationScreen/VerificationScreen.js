import {View, Text, SafeAreaView, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import {ContextStore} from '../../ContextApi/ContextProvider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const VerificationScreen = () => {
  let {Theme} = useContext(ContextStore);
  return (
    // <ScrollView
    // keyboardShouldPersistTaps={'always'}
    // style={{flex : 1 , backgroundColor:'pink'}}
    // >
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme.bg,
        alignContent:"center",
        alignItems:"center",
        paddingHorizontal:20,
        paddingTop:10
      }}>
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
      <MaterialCommunityIcons style={{marginTop:40}} name="email-outline" size={70} color="#000" />
        <Text style={{
            color : Theme.txt,
            fontWeight:'bold',
            marginTop:25,
            fontSize:17,
        }}>Verification</Text>
        <Text style={{
            color : Theme.txt,
            marginTop:15
        }}>Verification has been sent to you by</Text>
        <Text style={{
            color : Theme.txt
        }}>Email@You.com</Text>
        <TextInput
        style={{
            borderBottomWidth:1,
            width:120,
            textAlign:'center',
            fontWeight:'bold',
            fontSize:20,
            marginTop:20

        }}
        autoFocus={true}
        blurOnSubmit={false}
        keyboardType="number-pad"
        maxLength={6}
        />
        <Text style={{
            color : Theme.txt,
            marginTop:25
        }}>Please wait 28 minutes to resend</Text>
    </SafeAreaView>
    // </ScrollView>
  );
};

export default VerificationScreen;
