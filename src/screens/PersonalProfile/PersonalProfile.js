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

const PersonalProfile = () => {
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
        <AntDesign name="arrowleft" size={25} color={Theme.txt} />
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
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {/* //Invisble  txt for stye adjusment*/}
        <Text style={{color: Theme.bg}}>ICNEDIT</Text>
        <Text style={{color: Theme.txt}}>Profile</Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
          }}>
          <AntDesign name="edit" size={20} color="#1676F3" />
          <Text style={{color: '#1676F3', marginLeft: 5}}>Edit</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        style={{
          height: Dimensions.get('window').width,
          height: Dimensions.get('window').height * 0.2,
        }}
        source={require('../../Assets/coverPhoto.png')}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: '#b7b7b7', fontSize: 16, marginLeft: 10}}>
            Play Now
          </Text>
          <AntDesign
            name="play"
            size={20}
            color={'#b7b7b7'}
            style={{marginLeft: 10}}
          />
        </View>
        <View
          style={{
            alignSelf: 'flex-end',
            marginTop: 'auto',
          }}>
          <TouchableOpacity style={{marginRight: 20, marginBottom: 10}}>
            <Image
              style={{height: 25, width: 30}}
              source={require('../../Assets/cameraIcon.png')}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View
        style={{
          alignSelf: 'center',
          height: 100,
          width: 100,
          marginTop: -60,
          borderRadius: 50,
          //backgroundColor: 'pink',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={{alignSelf: 'center', height: 100, width: 100}}
          source={require('../../Assets/dp.png')}
        />
        <TouchableOpacity
          style={{
            marginRight: 20,
            marginTop: 50,
            marginLeft: -22,
            padding: 5,
            backgroundColor: Theme.txt,
            borderRadius: 50,
          }}>
          <Image
            style={{height: 10, width: 15}}
            source={require('../../Assets/cameraIcon.png')}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: Theme.txt,
          alignSelf: 'center',
          fontWeight: '500',
          fontSize: 18,
        }}>
        Joe Dean
      </Text>
      <Text
        style={{
          color: Theme.txt,
          alignSelf: 'center',
          fontSize: 12,
          fontWeight: '500',
        }}>
        Designer <Text style={{color: '#1676F3'}}>@ E Company</Text>
      </Text>
      <Text style={{color: Theme.txt, alignSelf: 'center', fontSize: 12}}>
        Company is pioneered in digital products
      </Text>
      <Text style={{color: Theme.txt, alignSelf: 'center', fontSize: 12}}>
        CEO OF ODSK
      </Text>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Image source={require('../../Assets/fb.png')} />
        <Image source={require('../../Assets/twitter.png')} />
        <Image source={require('../../Assets/linkedIn.png')} />
      </View>

      <View style={{
          marginTop:'auto',
          marginBottom : 'auto'
      }}>
        <Text style={{
            color:Theme.txt,
            fontWeight:"600",
            fontSize:15,
            marginLeft:15
        }}>Accounts Settings</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            alignContent: 'center',
            alignItems: 'center',
            height: 75,
            borderBottomColor: '#B7B7B7',
            borderBottomWidth: 1,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons color="#9F9F9F" size={55} name={'person-circle-outline'} />
            <View
              style={{
                marginLeft: 10,
                alignItems: 'flex-start',
                height: 70,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: Theme.txt,
                  fontWeight: '500',
                }}>
                Your Profile
              </Text>
              <Text style={{color: Theme.txt, fontSize: 11}}>
                Edit and view profile info
              </Text>
            </View>
          </View>
          <MaterialCommunityIcons
            name={'chevron-right'}
            size={25}
            color="#9F9F9F"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            alignContent: 'center',
            alignItems: 'center',
            height: 75,
            borderBottomColor: '#B7B7B7',
            borderBottomWidth: 1,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome style={{paddingHorizontal:8}} color="#9F9F9F" size={55} name={'bookmark-o'} />
            <View
              style={{
                marginLeft: 10,
                alignItems: 'flex-start',
                height: 70,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: Theme.txt,
                  fontWeight: '500',
                }}>
                Saved Profile
              </Text>
              <Text style={{color: Theme.txt, fontSize: 11}}>
                your saved profiles are here
              </Text>
            </View>
          </View>
          <MaterialCommunityIcons
            name={'chevron-right'}
            size={25}
            color="#9F9F9F"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PersonalProfile;
