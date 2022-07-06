import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Image
  } from 'react-native';
  import React,{useContext} from 'react';
  import { ContextStore } from '../ContextApi/ContextProvider';
  
  const LoginScreen = () => {
   let {Theme} = useContext(ContextStore)
    
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
          backgroundColor: Theme.bg,
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
              <Text style={[styles.TopHeading,{color:Theme.txt}]}>
                  Welcome to
              </Text>
              <Text style={[styles.TopHeading,{color:Theme.txt}]}>
                 SOLO CONNECKT
              </Text>
              <Text
                style={{
                  alignSelf: 'center',
                  paddingVertical: 18,
                  color: Theme.txt,
                  textAlign:'center',
                  fontSize: 13,
                }}>
                A income generating Eco-System built with networking and profit sharing for ALL in mind
              </Text>
            <TextInput
              placeholder='Username , Email & Phone Number'
              onFocus={() => console.log('focus received')}
              onBlur={() => console.log('focus lost')}
              style={styles.focusedInput}
            />
            <TextInput
            placeholder='Password'
              onFocus={() => console.log('focus received')}
              onBlur={() => console.log('focus lost')}
              style={styles.focusedInput}
            />
          <TouchableOpacity>
          <Text
            style={{
              marginTop:-8,
              color: Theme.txt,
              alignSelf: 'flex-end',
              marginBottom:30,
              fontWeight:'bold'
            }}>
            Forgot Password?
          </Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row' , alignItems:'center' , justifyContent:'center',marginBottom:10}}>
            <View style={{height:1, backgroundColor:Theme.txt , width:'25%' , opacity:0.2}}></View>
              <Text style={{color:Theme.txt , marginHorizontal:8}}>OR Sign up with</Text>
            <View style={{height:1, backgroundColor:Theme.txt , width:'25%' , opacity:0.2}}></View>
          </View>

          <View style={{flexDirection:'row' ,alignSelf:"center", alignItems:'center' , justifyContent:'space-evenly',marginBottom:20 , width:'60%'}}>
            <TouchableOpacity style={{backgroundColor:'#ECE9EC',padding:5,borderRadius:20}}>
            <Image source={require('../Assets/Googlelogo.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#ECE9EC',padding:5,borderRadius:20}}>
            <Image source={require('../Assets/Facbook.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#ECE9EC',padding:5,borderRadius:20}}>
            <Image source={require('../Assets/appleLogo.png')}/>
            </TouchableOpacity>

          </View>
            <TouchableOpacity
              style={{
                //marginHorizontal: 5,
                backgroundColor: Theme.txt,
                borderRadius: 20,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  paddingVertical: 18,
                  color: Theme.bg,
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