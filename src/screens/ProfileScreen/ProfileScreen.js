import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {ContextStore} from '../../ContextApi/ContextProvider';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProfileScreen = () => {
  let {Theme} = useContext(ContextStore);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
      <Text style={{color: Theme.txt, alignSelf: 'center', marginTop: 10}}>
        Build your profile(s)
      </Text>
      <Image
        style={{height: 120, width: 120, alignSelf: 'center', marginTop: 10}}
        //Differet images might be czing issues export from Profile figma screen both
        source={Theme.themeName === 'Light'? require('../../Assets/Logo1.png') : require('../../Assets/Logo1Gold.png')}
      />
      <View
        style={{
          height: 1,
          width: '80%',
          borderBottomColor: '#000',
          borderBottomWidth: 1,
          alignSelf: 'center',
          marginTop: 10,
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 30,
        }}>
        <Switch
          trackColor={{false: Theme.bg, true: Theme.txt}}
          thumbColor={isEnabled ? Theme.bg : Theme.txt}
          // ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{color: Theme.txt, fontWeight: '400', fontSize: 18}}>
          Real Estate Profile
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
          }}>
          <AntDesign name="edit" size={20} color="#1676F3" />
          <Text style={{color: '#1676F3', marginLeft: 5}}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 30,
        }}>
        <Switch
          trackColor={{false: Theme.bg, true: Theme.txt}}
          thumbColor={isEnabled ? Theme.bg : Theme.txt}
          // ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{color: Theme.txt, fontWeight: '400', fontSize: 18}}>
          Real Estate Profile
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
          }}>
          <AntDesign name="edit" size={20} color="#1676F3" />
          <Text style={{color: '#1676F3', marginLeft: 5}}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 30,
        }}>
        <Switch
          trackColor={{false: Theme.bg, true: Theme.txt}}
          thumbColor={isEnabled ? Theme.bg : Theme.txt}
          // ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{color: Theme.txt, fontWeight: '400', fontSize: 18}}>
          Real Estate Profile
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
          }}>
          <AntDesign name="edit" size={20} color="#1676F3" />
          <Text style={{color: '#1676F3', marginLeft: 5}}>Edit</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
      imageStyle={{resizeMode : 'contain'}}
        style={{
          height: 180,
          width: 180,
          alignSelf: 'center',
          marginTop: 'auto',
          marginBottom: 'auto',
        }}
        source={Theme.themeName === 'Light'?require('../../Assets/logo2.png') : require('../../Assets/logo2Gold.png')}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;
