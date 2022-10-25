
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Screens/Login';
import HomeScreen from './Screens/Home';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center"}}>
    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={HomeScreen} options={{
     headerShown:false

    }}/>
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}