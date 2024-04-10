import React from 'react'
import { View,Text } from 'react-native'
import { HomeScreen } from './HomeScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { DrawerItem } from '@react-navigation/drawer';
import { DrawerItemList } from '@react-navigation/drawer';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const HomeNav = () => {
    const Drawer = createDrawerNavigator();
      function log_out() {
        const navigator = useNavigation();
        const handelLogout = ()=>{
            AsyncStorage.removeItem("token");
            navigator.navigate("login");
        }
        return (
            <View>
                <Text onPress={handelLogout}>Logout</Text>
            </View>
        );
      }
        function CustomDrawerContent(props) {
        return (
            <DrawerContentScrollView {...props} >
                <DrawerItemList {...props} />
                {/* if i do not use this drawerItemList the other "Screens buttons dont render" */}
                <DrawerItem label={log_out}/>
            </DrawerContentScrollView>
        );
      }
  return (
    <>
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="homeScreen" options={{headerShown:false}} component={HomeScreen} />
        </Drawer.Navigator>
        
    </> 
  )
}
