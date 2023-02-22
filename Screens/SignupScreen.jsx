import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity,StyleSheet } from 'react-native'
import { firebaseConfig } from '../firebase-config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { useNavigation } from '@react-navigation/native';
export default function SignupScreen (){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            if(user){
                navigation.replace("Home")
            }
        })
        return unsubscribe
    }, [])
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const navigation = useNavigation()
const handleSignUp = ()=>{
  createUserWithEmailAndPassword(auth, email, password, emailError, passwordError)
    .then((userCredential)=>{
        console.log('Signed in!')
        const user = userCredential.user;
        console.log(user)
        navigation.replace('Home')    
    })
    
    .catch(error=>
        alert(error.message)
    )
    
  if(!email.includes('@')){
    setEmailError('Invalid email address')
  }
  else if (password.length < 6){
    setPasswordError('Password must be at least 6 characters')
  }
  else if (email.length === 0){
    setEmailError('Email is required')
  }
  else if (password.indexOf (' ') >= 0){
    setPasswordError('Password cannot contain spaces')
  }
  else{
    setEmailError('')
    setPasswordError('')
  }

}

  return (
    <View style={styles.container}>
        <TouchableOpacity>
      <Text  style={{
        paddingBottom: 10,
      }} >Email Address</Text>
      <TextInput 
 style={{
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    width: 300,
    paddingLeft: 10,
  }}       onChangeText={(text)=>setEmail(text)}
            placeholder="Email Address"
            value={email}

          />
          <Text style={{
        color: '#000',
       
      }} >{emailError}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
      <Text  style={{
                paddingTop: 10,
        paddingBottom: 10,
      }} >Password</Text>
      <TextInput 
      style={{
        borderColor: 'black',
        borderWidth: 1,
        height: 50,
        width: 300,
        paddingLeft: 10,
      }} 
            onChangeText={(text)=>setPassword (text)}
            placeholder="Password"
            secureTextEntry
            value={password}
          />
                    <Text style={{
        color: '#000',
       
      }} >{passwordError}</Text>

          </TouchableOpacity>
          <TouchableOpacity  style={{
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
      }}  onPress={handleSignUp}>
          <Text  style={{
        color: '#fff',
       
      }} >Create Account</Text>
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
  




