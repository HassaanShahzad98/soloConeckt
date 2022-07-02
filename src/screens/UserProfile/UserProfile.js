import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {ContextStore} from '../../ContextApi/ContextProvider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const UserProfile = () => {
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
          borderBottomColor: 'rgba(0,0,0,0.25)',
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <Ionicons
          style={{paddingHorizontal: 8}}
          color={Theme.txt}
          size={25}
          name={'menu-outline'}
        />
        <Text
          style={{
            color: Theme.txt,
            fontSize: 20,
            fontWeight: '500',
          }}>
          SOLO CONNECKT
        </Text>
        <Text />
      </View>
      <ScrollView>
        <View
          style={{
            alignSelf: 'center',
            height: 120,
            width: 120,
            marginTop: 15,
            borderRadius: 100,
            justifyContent: 'center',
            //backgroundColor: 'pink',
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 3,
          }}>
          <Image
            style={{alignSelf: 'center', height: 100, width: 100}}
            source={require('../../Assets/dp.png')}
          />
        </View>
        <Text
          style={{
            color: Theme.txt,
            alignSelf: 'center',
            fontWeight: '500',
            fontSize: 18,
            marginTop: 20,
          }}>
          Joe Dean
        </Text>
        <Text
          style={{
            color: Theme.txt,
            alignSelf: 'center',
            fontSize: 12,
            fontWeight: '500',
            marginTop: 10,
          }}>
          Designer <Text style={{color: '#1676F3'}}>@ E Company</Text>
        </Text>
        <Text
          style={{
            color: Theme.txt,
            alignSelf: 'center',
            fontSize: 12,
            marginTop: 5,
          }}>
          Company is pioneered in digital products
        </Text>
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
          <FontAwesome
            style={{paddingHorizontal: 8}}
            color={'#b7b7b7'}
            size={30}
            name={'heart-o'}
          />
          <MaterialCommunityIcons
            style={{paddingHorizontal: 8}}
            color={'#b7b7b7'}
            size={30}
            name={'message-processing-outline'}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 30,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical:15,
            borderTopWidth:1,
            borderBottomWidth:1,
            borderColor : '#b7b7b7',
            marginTop : 10
          }}>
          <Ionicons
            style={{paddingHorizontal: 8}}
            color={'#b7b7b7'}
            size={30}
            name={'location-outline'}
          />

          <Text style={{flex: 1, flexWrap: 'wrap',color : Theme.txt}}>
            No reviews · Talent agency Plot C, District 19, 3 Shah xxxxxxxxxd Rd
            03x-xxxxxxxxx
          </Text>
        </View>

        {[1, 2, 3, 4, 5].map(item => (
          <View
            style={{
              marginTop: 10,
              borderBottomWidth: 4,
              borderBottomColor: '#b7b7b7',
              paddingBottom: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                marginVertical: 10,
                marginLeft: 10,
              }}>
              <ImageBackground
                style={{
                  width: Dimensions.get('window').width * 0.23 * 0.5,
                  height: Dimensions.get('window').width * 0.23 * 0.5,
                  justifyContent: 'flex-end',
                }}
                source={require('../../Assets/dp.png')}>
                <View
                  style={{
                    backgroundColor: 'green',
                    alignSelf: 'flex-end',
                    borderRadius: 5,
                    height: 10,
                    width: 10,
                  }}
                />
              </ImageBackground>
              <Text style={{color: Theme.txt, marginLeft: 10}}>online</Text>
            </View>
            <Image source={require('../../Assets/timelineScape.png')} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginTop: 5,
              }}>
              <FontAwesome
                style={{paddingHorizontal: 8}}
                color={'#b7b7b7'}
                size={30}
                name={'heart-o'}
              />
              <FontAwesome
                style={{paddingHorizontal: 8}}
                color={'#b7b7b7'}
                size={30}
                name={'bookmark-o'}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;
