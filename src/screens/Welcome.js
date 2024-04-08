import React from 'react'
import { View,Text,Image, TouchableOpacity } from 'react-native'
import boy from '../../assets/boy.png'
import { StdButton } from '../components/StdButton'
export const Welcome = ({navigation}) => {
  return (
    <View className = " bg-[#ff4242] items-center flex-1 space-y-8" >
      <Text className="text-3xl mt-24 text-white mx-auto">Welcome to HUNGRYYYYY!</Text>
      <View className="flex-1 bg-[#fcb0b0] mx-auto rounded-2xl w-[80%] max-h-[300] items-center ">
        <Image source={boy} className="object-contain max-h-[100%] w-[500]"/>
      </View>
      <View className="w-[100%]  items-center">
        <View className="border-t-[1px] border-white w-[95%]"/>
        <Text className="text-lg font-bold text-white py-4">Order the best food near you at lowest price.</Text>
        <View/>
        <View className="border-t-[1px] border-white w-[95%]"/>
      </View>
      <View className="mx-auto justify-between flex-row w-[80%] ">
        <View className="w-[45%]">
          <StdButton text="Sign Up" navHandler={()=>{navigation.navigate("signup")}} color="white"/>
        </View>
        <View className="w-[45%]">
          <StdButton text="Log In" navHandler={()=>{navigation.navigate("login")}} color="white"/> 
        </View>
      </View>
      </View>
  )
}

