import React from 'react'
import { ScrollView,View,Text } from 'react-native'
import { StdInput } from '../components/StdInput'
import { StdButton } from '../components/StdButton'
export const SignUpScreen = ({navigation}) => {

  return (
    <ScrollView contentContainerStyle={{alignItems:'center',justifyContent:'center'}} className="flex-1 overflow-scroll  bg-[#ffffff] flex-col w-[100%] h-[100%]">
      <Text className="mt-[40] text-3xl text-[#ff4242]">Sign Up</Text>
      <View className="w-[80%] mt-[20]">
        <StdInput placeholder="Full name" icon="user" pass={false}/>
      </View>
      <View className="w-[80%]  mt-[20]">
        <StdInput placeholder="Phone" icon="phone" pass={false}/>
      </View>
      <View className="w-[80%]  mt-[20]">
        <StdInput placeholder="Email" icon="mail" pass={false}/>
      </View>
      <View className="w-[80%] mt-[20]">
        <StdInput placeholder="Password" icon="lock" pass={true}/>
      </View>
      <View className="w-[80%] mt-[20]">
        <StdInput placeholder="Confirm Password" icon="exclamation" pass={true}/>
      </View>
      <View className="mt-[40] w-[80%]">
        <StdButton text="Sign Up" color="red"/>
      </View>
      <Text className="self-start w-[80%] mx-auto mt-2" onPress={()=>{navigation.navigate("login")}}>Already have an account ?</Text>
    </ScrollView>
  )
}
