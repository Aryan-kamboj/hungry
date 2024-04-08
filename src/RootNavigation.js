import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AuthNav } from './screens/AuthNav';
export const RootNavigation = () => {
  return (
    <NavigationContainer >
        <AuthNav/>
    </NavigationContainer> 
  )
}
