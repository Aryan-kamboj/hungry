import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from './Welcome';
import { LoginScreen } from './LoginScreen';
import { SignUpScreen } from './SignUpScreen';
import { HomeNav } from './mainScreens/HomeNav';
export const AuthNav = () => {
const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='welcome'>
        <Stack.Screen name="welcome" component={Welcome} options={{headerShown:false}} />
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="signup" component={SignUpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="home" component={HomeNav} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}
