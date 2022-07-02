import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {ContextStore} from '../../ContextApi/ContextProvider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SettingsScreen = () => {
  let {Theme} = useContext(ContextStore);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme.bg,
      }}>
      <ImageBackground
        style={{
          height: Dimensions.get('window').height * 0.8,
          width: Dimensions.get('window').width,
          marginTop: Dimensions.get('window').height * 0.08,
          position: 'absolute',
          opacity: 0.5,
        }}
        source={require('../../Assets/fadedLogo.png')}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../Assets/fb.png')} />
          <Image source={require('../../Assets/twitter.png')} />
          <Image source={require('../../Assets/linkedIn.png')} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{marginRight: 10}}
            source={require('../../Assets/android.png')}
          />
          <Image source={require('../../Assets/apple.png')} />
        </View>
      </View>
      <View
        style={{
          alignSelf: 'center',
          marginVertical:30
        }}>
        <Image style={{height:70 , width : 70}} source={require('../../Assets/dp.png')} />
        <Text style={{ color : Theme.txt , marginTop:10}}>Joe Dean</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth:1,
          marginLeft:30,
          paddingRight:30,
          paddingVertical:10
        }}>
        <View style={{flexDirection: 'row' , marginLeft:10, alignItems:"center"}}>
          <Image style={{height:25 , width:25}} source={require('../../Assets/themeIcon.png')} />
          <Text style={{color : Theme.txt , fontSize:22 , fontWeight:'500' , marginLeft:20}}>Theme</Text>
        </View>
        <Switch />
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth:1,
          marginLeft:30,
          paddingRight:30,
          paddingVertical:20
        }}>
        <View style={{flexDirection: 'row' , marginLeft:10 , alignItems:"center"}}>
          <Image style={{height:25 , width:25}} source={require('../../Assets/bellIcon.png')} />
          <Text style={{color : Theme.txt , fontSize:22 , fontWeight:'500' , marginLeft:20}}>Notifications</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth:1,
          marginLeft:30,
          paddingRight:30,
          paddingVertical:20
        }}>
        <View style={{flexDirection: 'row' , marginLeft:10 , alignItems:"center"}}>
          <Image style={{height:25 , width:25}} source={require('../../Assets/messageIcon.png')} />
          <Text style={{color : Theme.txt , fontSize:22 , fontWeight:'500' , marginLeft:20}}>Messages</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth:1,
          marginLeft:30,
          paddingRight:30,
          paddingVertical:20
        }}>
        <View style={{flexDirection: 'row' , marginLeft:10 , alignItems:"center"}}>
          <Image style={{height:25 , width:25}} source={require('../../Assets/NFCicon.png')} />
          <Text style={{color : Theme.txt , fontSize:22 , fontWeight:'500' , marginLeft:20}}>NFC</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth:1,
          marginLeft:30,
          paddingRight:30,
          paddingVertical:20
        }}>
        <View style={{flexDirection: 'row' , marginLeft:10 , alignItems:"center"}}>
          <Image style={{height:25 , width:25}} source={require('../../Assets/shopCartIcon.png')} />
          <Text style={{color : Theme.txt , fontSize:22 , fontWeight:'500' , marginLeft:20}}>Shop Now</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth:1,
          marginLeft:30,
          paddingRight:30,
          paddingVertical:20
        }}>
        <View style={{flexDirection: 'row' , marginLeft:10 , alignItems:"center"}}>
          <Image style={{height:25 , width:25}} source={require('../../Assets/shopCartIcon.png')} />
          <Text style={{color : Theme.txt , fontSize:22 , fontWeight:'500' , marginLeft:20}}>NFC DashBoard</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomWidth:1,
          marginLeft:30,
          paddingRight:30,
          paddingVertical:20
        }}>
        <View style={{flexDirection: 'row' , marginLeft:10 , alignItems:"center"}}>
          <Image style={{height:25 , width:25}} source={require('../../Assets/signOutIcon.png')} />
          <Text style={{color : 'red' , fontSize:22 , fontWeight:'500' , marginLeft:20}}>Sign out</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsScreen;
