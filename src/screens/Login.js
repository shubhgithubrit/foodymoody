import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
//import firestore from '@react-native-firebase/firestore';
import { db } from '../db/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const getData=async()=>{
    const users = await db
    .collection('Admin').get();
    console.log('UserData',users.docs[0]._data.email)
    if(email===users.docs[0]._data.email&& password===users.docs[0]._data.password)
    {
      await AsyncStorage.setItem('Email',email)
      navigation.navigate('DashBoard')
    }
    else{
      Alert.alert('Wrong Email and password')
    }
   
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Admin Login</Text>
      <TextInput
      placeholder='Enter Username'
      value={email}
      onChangeText={txt=>setEmail(txt)}
      style={styles.textinput}
      />
        <TextInput
      placeholder='Enter Username'
      value={password}
      onChangeText={txt=>setPassword(txt)}
      style={styles.textinput}
      />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={()=>{
          if(email!=''&& password!='')
          {
            getData();
          }
          else{
            Alert.alert('Invalid Crendentials');
          }
        }}
      >
        <Text style={{color:'black',fontSize:15,fontWeight:'bold',textAlign:'center',marginTop:10}}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
flex:1,

  },
  title:{
    color:'red',fontSize:20,fontWeight:'bold',marginTop:100,alignSelf:'center'
  },
  textinput:{
    paddingLeft:20,marginTop:50,alignSelf:'center',height:50,width:300,borderRadius:10,borderWidth:1,color:'black',backgroundColor:'red'
  },
  loginButton:{height:40,marginTop:20,alignSelf:'center',width:250,borderRadius:10,borderWidth:1,backgroundColor:'yellow'}
})