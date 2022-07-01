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
import React, {useContext,useState} from 'react';
import {ContextStore} from '../../ContextApi/ContextProvider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ForumScreen = () => {
  let {Theme} = useContext(ContextStore);
  let DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let pillsArray = ['Featured Topics', 'Most Recent', 'Related Topics'];

  const [SelectedPillOpt, setSelectedPillOpt] = useState('Featured Topics')

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
          <TouchableOpacity>
        <Text
        style={{
            color:Theme.bg,
            backgroundColor:Theme.txt,
            borderWidth:1,
            paddingHorizontal:10,
            paddingVertical:6,
            borderRadius:50,
            fontSize:10
        }}
        >Comment</Text>
      </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection:"row"}}>
      <MaterialIcons
      style={{marginRight:10}}
        name={'library-add'}
        size={25}
        color={Theme.txt}
      />
      <MaterialCommunityIcons
        name={'cards-heart'}
        size={25}
        color="#B7B7B7"
      />
      </View>
    </View>
  );

  const pillsRenderComponent = ({item}) => (
    <View style={{paddingVertical:1}}>
      <TouchableOpacity
      onPress={()=>{
        setSelectedPillOpt(item)
      }}
      style={{
        marginLeft:10,
      }}>
        <Text
        style={{
            color:SelectedPillOpt===item ? Theme.bg : '#b7b7b7',
            backgroundColor: SelectedPillOpt===item ? Theme.txt : Theme.bg,
            borderWidth:1,
            borderColor:SelectedPillOpt===item ? 'transparent' : '#b7b7b7',
            paddingHorizontal:15,
            paddingVertical:8,
            borderRadius:50,
            fontSize:13
        }}
        >{item}</Text>
      </TouchableOpacity>
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
          //borderBottomWidth: 2,
          //borderBottomColor: 'rgba(0,0,0,0.25)',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: Theme.txt, fontWeight: '500'}}>Forum(s)</Text>
      </View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={pillsArray}
          renderItem={pillsRenderComponent}
          keyExtractor={item => item}
        />
      </View>
      <View style={{
          flexDirection:"row",
          justifyContent:'space-evenly',
          borderBottomColor : 'rgba(0,0,0,0.25)',
          borderBottomWidth:2,
          marginTop:20,
          paddingBottom:10
      }}>
          <Text 
          style={{
              color : Theme.txt,
             fontSize:15
        }}>
              Public
          </Text>
          <Text 
          style={{
              color : '#b7b7b7',
             fontSize:15
        }}>
              Private
          </Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
};

export default ForumScreen;
