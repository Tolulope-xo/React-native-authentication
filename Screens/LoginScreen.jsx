import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity,StyleSheet } from 'react-native'
import { firebaseConfig } from '../firebase-config';
import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { useNavigation } from '@react-navigation/native';
export default function LoginScreen (){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

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
const handleSignIn = ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        console.log('Signed in!')
        const user = userCredential.user;
        console.log(user)
        navigation.replace('Home')    
    })
    .catch(error=>
        alert(error.message)
    )
}

  const signInWithGoogle = ()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.log(error);
    });
}

const signInWithGithhub = ()=>{
  const provider = new GithubAuthProvider();
    signInWithPopup(auth,provider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.log(error);
    });
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
          />
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
          />
          </TouchableOpacity>
          <TouchableOpacity  style={{
backgroundColor: 'black',
        borderWidth: 1,
        color: '#fff',
        width: 100,
        height: 30,
        marginTop: 10, 
        padding: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}  onPress={handleSignIn}>
          <Text  style={{
        color: '#fff',
       
      }} >Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text>New user? <Text  style={{
        color: '#0000FF',
      }}>Create Account</Text> </Text>
         
          </TouchableOpacity>
          <TouchableOpacity style={{
backgroundColor: 'black',
        borderWidth: 1,
        color: '#fff',
        width: 300,
        height: 30,
        marginTop: 10, 
        padding: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }} onPress={signInWithGoogle}>
            <Text  style={{
        color: '#0000FF',
      }}>Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
backgroundColor: 'black',
        borderWidth: 1,
        color: '#fff',
        width: 300,
        height: 30,
        marginTop: 10, 
        padding: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}  onPress={signInWithGithhub}>
            <Text  style={{
        color: '#0000FF',
      }}>Login with Github</Text>
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
  

