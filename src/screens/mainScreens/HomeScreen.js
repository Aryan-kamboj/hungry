import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { StdInput } from '../../components/StdInput';
import { DrawerActions } from '@react-navigation/native';
import { StatusBar, Text, View } from 'react-native'
import { Image } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import logo from '../../../assets/logo.png'
import { StdButton } from '../../components/StdButton';
export const HomeScreen = ({navigation}) => {
  return (
    <View className="">
      <View className="mt-12 flex-row items-center justify-between mx-4">
          <Entypo name="menu" size={44} color="black" onPress={()=>{console.log("hello");navigation.dispatch(DrawerActions.openDrawer())}} />
          <Image className="h-[90] object-contain w-[30%]" source={logo}/>
          <EvilIcons name="user" size={44} color="black" />
      </View>
      <View className="bg-[#fbeded] rounded-t-3xl h-[100%]">
        <View  className="w-[80%] border-[#ff4242] border-[1px] bg-black mt-[20] overflow-hidden rounded-full mx-auto">
            <StdInput placeholder="Search for food" icon="search1" pass={false}/>
        </View>
        <View className="bg-white  w-[95%] mt-[20] py-4 mx-auto rounded-2xl">
          <Text className="self-center text-3xl font-[500] pb-2 text-[#d97a7a]">Categories</Text>
          <View className="border-t-[1px] border-[#ff4242] pb-4 w-[75%] mx-auto"/>
          <View className="flex-row justify-around">
            <View className="w-[45%] [elevation:20] border-[2px] border-[#ff4242] rounded-lg ">
              <StdButton text="Veg" color={"white"}/>
            </View>
            <View className="w-[45%] [elevation:20] border-[2px] border-[#1ac929] rounded-lg">
              <StdButton text="Non-Veg" color={"white"}/>
            </View>
          </View>
        </View> 
      </View>
    </View>
  )
}
