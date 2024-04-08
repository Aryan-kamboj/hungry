import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { Welcome } from './src/screens/Welcome';
import { LoginScreen } from './src/screens/LoginScreen';
import { SignUpScreen } from './src/screens/SignUpScreen';
import { RootNavigation } from './src/RootNavigation';
export default function App() {
  return (
    <RootNavigation/>
  // <Welcome/>
  // <LoginScreen/>
 //<SignUpScreen/>

  );
}

