import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity,StyleSheet } from 'react-native'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebase-config';
import { useNavigation } from '@react-navigation/native';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
export default function HomeScreen (){
  
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider
const navigation = useNavigation()


const handleSignOut = ()=>{ 
    auth
    .signOut()
    .then(()=>{
        navigation.replace('Login')    
    })
    .catch(error=>
        alert(error.message)
    )
}

  return (
    <View style={styles.container}>
   <Text>Email: {auth.currentUser?.email}</Text>
          <TouchableOpacity style={{
backgroundColor: 'black',
        borderWidth: 1,
        color: '#fff',
        width: 200,
        height: 30,
        marginTop: 10, 
        padding: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }} onPress={handleSignOut}>
          <Text  style={{
        color: '#fff',
       
      }}>Sign Out</Text>
          </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
  height: 60,
  margin: 'auto',
      },
      
    });
    
  

