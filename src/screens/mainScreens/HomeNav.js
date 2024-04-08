import React from 'react'
import { ScrollView, View,Text } from 'react-native'
import { useState } from 'react'
import { StdInput } from '../../components/StdInput'
import { HomeScreen } from './HomeScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { DrawerItem } from '@react-navigation/drawer';
import { DrawerItemList } from '@react-navigation/drawer';
import { DrawerContentScrollView } from '@react-navigation/drawer';
export const HomeNav = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const Drawer = createDrawerNavigator();
        function Feed() {
            return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Feed Screen</Text>
            </View>
            );
        }
      function log_out() {
        const navigator = useNavigation();
        const handelLogout = ()=>{
            console.log("logout")
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
            <Drawer.Screen name="Feed" component={Feed} />
        </Drawer.Navigator>
        
    </> 
  )
}
