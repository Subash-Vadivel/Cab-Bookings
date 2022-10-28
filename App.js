
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Components/header';
import LoginScreen from './Screens/Login';
import HomeScreen from './Screens/Home';
import ProfileScreen from './Screens/Profile';
import React from 'react';

const Stack = createNativeStackNavigator();



export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator >
    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={HomeScreen} options={{
    headerTitle:()=><Header/>,
    }}/>
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}