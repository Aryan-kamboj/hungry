import React from 'react'
import { View,Text, TextInput } from 'react-native'
import { StdInput } from '../components/StdInput'
import { StdButton } from '../components/StdButton'
export const LoginScreen = ({navigation}) => {
  return (
    <View className="flex-1 items-center justify-center bg-[#ffffff] flex-col w-[100%] h-[100%]">
      <Text className="mt-[40] text-3xl text-[#ff4242]">Sign In</Text>
      <View className="w-[80%]">
        <StdInput placeholder="Email" icon="user" pass={false}/>
      </View>
      <View className="w-[80%]">
        <StdInput placeholder="Password" icon="lock" pass={true}/>
      </View>
      <View className="mt-[40] w-[80%]">
        <StdButton text="Sign In" color="red"/>
      </View>
      <Text className="mt-2 w-[80%] mx-auto text-blue-600">Forgot Password ?</Text>
      <Text className="mt-8 text-red-700" onPress={()=>{navigation.navigate("signup")}}>New to HUNGRYYYYY sign up now....</Text>
    </View>
  )
}

