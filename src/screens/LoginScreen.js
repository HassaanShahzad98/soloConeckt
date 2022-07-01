import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableHighlight
  } from 'react-native';
  import React,{useContext} from 'react';
  import { ContextStore } from '../ContextApi/ContextProvider';
  
  const LoginScreen = () => {
   let {Theme} = useContext(ContextStore)

   console.log(Theme)
    
    return (
      // <ImageBackground
      // source={require('../Assets/LoginScreen.png')}
      // style={{flex:1 , marginTop:-20}}
      // >

      // </ImageBackground>
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: '#E5E5E5',
        }}>
        <View
          style={{
            flex: 1,
            //justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
            justifyContent:'center',
          }}>
              
          <View style={{width: '100%'}}>
              <Text style={styles.TopHeading}>
                  Welcome to
              </Text>
              <Text style={styles.TopHeading}>
                 Solo Conneckt
              </Text>
            <TextInput
              onFocus={() => console.log('focus received')}
              onBlur={() => console.log('focus lost')}
              style={styles.focusedInput}
            />
            <TextInput
              onFocus={() => console.log('focus received')}
              onBlur={() => console.log('focus lost')}
              style={styles.focusedInput}
            />
            <Text></Text>
            <TouchableOpacity
              style={{
                //marginHorizontal: 5,
                backgroundColor: '#000',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  paddingVertical: 18,
                  color: '#fff',
                  fontSize: 18,
                }}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    TopHeading:{
        color:'#000',
        alignSelf:"center",
        fontWeight:"bold",
        fontSize:35,
    },
    nonFocusedInput: {
      height: 55,
      marginVertical: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: '#fafafa',
      borderBottomColor: '#rgba(0,0,0,0.2)',
      borderRadius: 10,
    },
    focusedInput: {
      height: 55,
      marginTop: 12,
      marginBottom:20,
      borderBottomWidth: 2,
      padding: 10,
      borderColor: 'rgba(0,0,0,0.1)',
      borderRadius: 10,
      backgroundColor:'#F8F8F8'
    },
    checkbox: {
      alignSelf: 'center',
      color: '#000',
    },
  });
  
export default LoginScreen