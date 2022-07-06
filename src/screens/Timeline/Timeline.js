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

const Timeline = () => {
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
        <MaterialCommunityIcons
          style={{paddingHorizontal: 8}}
          color={Theme.txt}
          size={25}
          name={'magnify'}
        />
      </View>
      <ScrollView>
        <ScrollView
        showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            //backgroundColor:'pink',
            height: Dimensions.get('window').height * 0.2 + 50,
          }}
          horizontal>
          <View
            style={{
              backgroundColor: 'pink',
              flexDirection: 'row',
              marginTop: Dimensions.get('window').width * 0.23 * 0.5 * 0.5 + 20,
              height: Dimensions.get('window').height * 0.2,
            }}>
            {[1, 2, 3, 4, 5, 6].map(item => (
              <View>
                <ImageBackground
                  style={{
                    width: Dimensions.get('window').width * 0.23,
                    height: Dimensions.get('window').height * 0.2,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: 'rgba(0,0,0,0.2)',
                  }}
                  source={require('../../Assets/story.png')}>
                  <Image
                    style={{
                      width: Dimensions.get('window').width * 0.23 * 0.5,
                      height: Dimensions.get('window').width * 0.23 * 0.5,
                      alignSelf: 'center',
                      marginTop:
                        -Dimensions.get('window').width * 0.23 * 0.5 * 0.5,
                    }}
                    source={require('../../Assets/dp.png')}
                  />
                </ImageBackground>
              </View>
            ))}
          </View>
        </ScrollView>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#b7b7b7',
            marginHorizontal: 20,
          }}>
          <Image
            style={{
              width: Dimensions.get('window').width * 0.23 * 0.5,
              height: Dimensions.get('window').width * 0.23 * 0.5,
            }}
            source={require('../../Assets/dp.png')}
          />
          <TouchableOpacity
            style={{
              width: '68%',
            }}>
            <Text
              style={{
                paddingVertical: 8,
                borderWidth: 1,
                borderColor: '#b7b7b7',
                paddingLeft: 10,
                borderRadius: 20,
                marginVertical: 5,
                color:Theme.themeName==='Light'?'rgba(0,0,0,0.25)': 'rgba(240,240,240,0.25)'
              }}>
              What's on your mind?
            </Text>
          </TouchableOpacity>
          <Ionicons
            style={{paddingHorizontal: 8}}
            color={'#b7b7b7'}
            size={25}
            name={'images-outline'}
          />
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

export default Timeline;
