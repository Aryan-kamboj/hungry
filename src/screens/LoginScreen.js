import React from 'react'
import { View,Text, TextInput,Alert } from 'react-native'
import { StdInput } from '../components/StdInput'
import { StdButton } from '../components/StdButton'
import {loginApi} from '../services/auth/authApis'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const LoginScreen = ({navigation}) => {
  const [email,setEmail] = React.useState("")
  const [password,setPassword] = React.useState("")
  const loginHandler = async()=>{ 
    if(email===""|| password===""){
      Alert.alert("Attention","Please fill all the fields",[
        {
          text: 'Ok',
          onPress: () => "",
          style: 'cancel',
        },
      ])
      return
    }
    try {
      const res = await loginApi({email,password});
      if(res){
        AsyncStorage.setItem("token",res.data.token)
        navigation.navigate("home")
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Attention","Invalid Credentials",[
        {
          text: 'Ok',
          onPress: () => "",
          style: 'cancel',
        },
      ])
    }
  }
  return (
    <View className="flex-1 items-center justify-center bg-[#ffffff] flex-col w-[100%] h-[100%]">
      <Text className="mt-[40] text-3xl text-[#ff4242]">Sign In</Text>
      <View className="w-[80%]  mt-[20]">
        <StdInput placeholder="Email" icon="user" pass={false} setterFn={setEmail}/>
      </View>
      <View className="w-[80%]  mt-[20]">
        <StdInput placeholder="Password" icon="lock" pass={true} setterFn={setPassword}/>
      </View>
      <View className="mt-[40] w-[80%]">
        <StdButton text="Sign In" color="red" handler={loginHandler}/>
      </View>
      <Text className="mt-2 w-[80%] mx-auto text-blue-600">Forgot Password ?</Text>
      <Text className="mt-8" onPress={()=>{navigation.navigate("signup")}}>New here ? Sign up now....</Text>
    </View>
  )
}

