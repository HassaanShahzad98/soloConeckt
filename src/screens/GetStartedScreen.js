import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useContext} from 'react';
import {ContextStore} from '../ContextApi/ContextProvider';

const GetStartedScreen = () => {
  let {Theme} = useContext(ContextStore);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Theme.bg,
      }}>
      <ImageBackground
        style={{position: 'absolute', height: '90%', width: '100%', top: 0}}
        imageStyle={{resizeMode: 'contain'}}
        source={require('../Assets/TransparengBgLogo.png')}
      />
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
          justifyContent: 'space-evenly',
        }}>
        <Image source={require('../Assets/3card.png')} />
        <View
          style={{
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              color: Theme.txt,
            }}>
            Your Card
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              color: Theme.txt,
            }}>
            Your Identity
          </Text>
          <Text
            style={{
              color: Theme.txt,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
            maecenas mi non sed ut odio. Non, justo, sed facilisi et. Eget
            viverra urna, vestibulum egestas faucibus egestas. Sagittis nam
            velit volutpat eu nunc.
          </Text>

          <TouchableOpacity>
            <Text
              style={{
                color: Theme.bg,
                backgroundColor: Theme.txt,
                paddingVertical:10,
                paddingHorizontal:70,
                borderRadius:10,
                marginTop:50,
                fontWeight: 'bold',
              fontSize: 15,
              }}>
              Let's Start
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default GetStartedScreen;
