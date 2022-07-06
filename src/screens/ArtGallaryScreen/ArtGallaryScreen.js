import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useContext} from 'react';
import {ContextStore} from '../../ContextApi/ContextProvider';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ArtGallaryScreen = () => {
  let {Theme} = useContext(ContextStore);
  let DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const width = Dimensions.get('window').width;

  const renderItem = ({item}) => (
    <View
      style={{
        width: width / 2,
        marginTop: 10,
        paddingHorizontal: 5,
      }}>
      <View style={{width: '100%', alignItems: 'center'}}>
        <ImageBackground
          style={{
            height: 200,
            width: 150,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
          source={require('../../Assets/exploreCard.png')}>
          <View style={{marginRight: 5, paddingBottom: 5}}>
            <Text
              style={{
                color: '#fff',
                textShadowColor: 'black',
                textShadowRadius: 1,
                textShadowOffset: {
                  width: 2,
                  height: 2,
                },
              }}>
              Issac
            </Text>
            <Text
              style={{
                color: '#fff',
                textShadowColor: 'black',
                textShadowRadius: 1,
                textShadowOffset: {
                  width: 2,
                  height: 2,
                },
              }}>
              1.2k Views
            </Text>
          </View>
        </ImageBackground>
      </View>
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

      <Text
        style={{
          color: Theme.txt,
          marginTop: 10,
          fontWeight: 'bold',
          alignSelf: 'center',
        }}>
        Art Gallery
      </Text>
      <Text
        style={{
          color: Theme.txt,
          marginTop: 10,
          fontWeight: 'bold',
          marginLeft: 20,
        }}>
        Explore
      </Text>
      <FlatList
        data={DATA}
        numColumns={2}
        //horizontal
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
};

export default ArtGallaryScreen;
