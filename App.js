import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import SignupScreen from './Screens/SignupScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName= "Login">
<Stack.Screen name="Login" component={LoginScreen}/>
<Stack.Screen name="Home" component={HomeScreen}/>
<Stack.Screen name="Signup" component={SignupScreen}/>

</Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
});
