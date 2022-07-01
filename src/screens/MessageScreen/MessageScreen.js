import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import React, {useContext} from 'react';
import {ContextStore} from '../../ContextApi/ContextProvider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MessageScreen = () => {
  let {Theme} = useContext(ContextStore);
  let DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignContent: 'center',
        alignItems: 'center',
        height: 80,
        borderBottomColor: '#B7B7B7',
        borderBottomWidth: 1,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../../Assets/dp.png')} />
        <View
          style={{
            marginLeft: 20,
            alignItems: 'flex-start',
            height: 75,
            justifyContent: 'space-evenly',
          }}>
          <Text
            style={{
              color: Theme.txt,
            }}>
            Company a
          </Text>
          <Text style={{color: '#B7B7B7'}}>Reply me please</Text>
        </View>
      </View>
      <MaterialCommunityIcons
        name={'arrow-left-top'}
        size={25}
        color="#B7B7B7"
      />
    </View>
  );
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
        }}>
        <AntDesign name="arrowleft" size={25} color="#000" />
        <Text
          style={{
            color: Theme.txt,
            fontSize: 20,
            fontWeight: '500',
          }}>
          Solo Conneckt
        </Text>
        <Text></Text>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderBottomWidth: 2,
          borderBottomColor: 'rgba(0,0,0,0.25)',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: Theme.txt, fontWeight: '500'}}>Messages</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
};

export default MessageScreen;
