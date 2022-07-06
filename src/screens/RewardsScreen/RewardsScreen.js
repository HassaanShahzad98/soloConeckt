import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {ContextStore} from '../../ContextApi/ContextProvider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RewardsScreen = () => {
  let {Theme} = useContext(ContextStore);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme.bg,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 20,
          borderBottomWidth: 1,
          borderBottomColor: Theme.themeName==='Light'?'rgba(0,0,0,0.25)': 'rgba(240,240,240,0.25)',
        }}>
        <AntDesign name="arrowleft" size={25} color="#000" />
        <Text
          style={{
            color: Theme.txt,
            fontSize: 20,
            fontWeight: '500',
          }}>
          SOLO CONNECKT
        </Text>
        <Text></Text>
      </View>
      <Text style={{color: Theme.txt, alignSelf: 'center', marginVertical: 5}}>
        SOLO CONNECKT REWARDS
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          backgroundColor: Theme.txt,
          paddingHorizontal: 15,
          paddingTop: 15,
          paddingBottom: 30,
          borderBottomRightRadius: 12,
          borderBottomLeftRadius: 12,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{alignSelf: 'center', height: 50, width: 50}}
            source={require('../../Assets/dp.png')}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{color: Theme.bg, fontSize: 16, fontWeight: '500'}}>
              Hello
            </Text>
            <Text style={{color: Theme.bg}}>Joe Dean</Text>
          </View>
        </View>
        <Ionicons
          style={{paddingHorizontal: 8}}
          color={Theme.bg}
          size={20}
          name={'ios-settings-outline'}
        />
      </View>
      <View
        style={{
          backgroundColor: '#b7b7b7',
          width: '65%',
          alignSelf: 'center',
          height: 60,
          marginTop: -30,
          paddingLeft: 10,
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: Theme.bg}}>Current Balanace</Text>
        <Text style={{color: Theme.bg}}>$1200.09</Text>
      </View>
      <View
        style={{
          backgroundColor: Theme.txt,
          width: '65%',
          alignSelf: 'center',
          height: 60,
          marginTop: 5,
          paddingLeft: 10,
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: Theme.bg}}>Current Balanace</Text>
        <Text style={{color: Theme.bg}}>$1200.09</Text>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          borderBottomWidth: 1,
          borderColor: Theme.txt,
        }}>
        <Image source={Theme.themeName==='Light'?require('../../Assets/chart.png'):require('../../Assets/chartDark.png')} />
      </View>
      <View
        style={{flexDirection: 'row', width: '100%',justifyContent:'space-evenly',marginTop:20}}>
        <ImageBackground
          style={
            {
              height:Dimensions.get('window').width*0.35,
              width:Dimensions.get('window').width*0.35,
              alignItems:'center',
              justifyContent:'center'
            }
          }
          source={require('../../Assets/lightGradient.png')}>
              <Text style={{color: '#000' , fontSize: 14 , fontWeight:'500'}}>$123545</Text>
              <Text style={{color: '#000' , fontSize: 14}}>Total Referrals</Text>
          </ImageBackground>
          <ImageBackground
          style={
            {
              height:Dimensions.get('window').width*0.35,
              width:Dimensions.get('window').width*0.35,
              alignItems:'center',
              justifyContent:'center'
            }
          }
          source={require('../../Assets/darkGradient.png')}>
              <Text style={{color: '#fff' , fontSize: 14 , fontWeight:'500'}}>$123545</Text>
              <Text style={{color: '#fff' , fontSize: 14}}>Paid Referrals</Text>
          </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default RewardsScreen;
