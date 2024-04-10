import React from 'react'
import { ScrollView,View,Text,Alert } from 'react-native'
import { StdInput } from '../components/StdInput'
import { StdButton } from '../components/StdButton'
import {signUpApi} from '../services/auth/authApis'
export const SignUpScreen = ({navigation}) => {
  const [email,setEmail] = React.useState("")
  const [password,setPassword] = React.useState("")
  const [name,setName] = React.useState("")
  const [phoneNo,setPhone] = React.useState("")
  const [confirmPassword,setConfirmPassword] = React.useState("")
  const signUpHandler = async()=>{
    if(name===""|| phoneNo===""|| email===""|| password===""|| confirmPassword===""){
      Alert.alert("Attention","Please fill all the fields",[
        {
          text: 'Ok',
          onPress: () => "",
          style: 'cancel',
        },
      ])
      return
    }
    if(!isValidEmail(email)){
      Alert.alert("Attention","Invalid Email",[
        {
          text: 'Ok',
          onPress: () => "",
          style: 'cancel',
        },
      ])
      return
    }
    if(password!==confirmPassword){
      Alert.alert("Attention","Passwords do not match",[
        {
          text: 'Ok',
          onPress: () => "",
          style: 'cancel',
        },
      ])
      return
    }
    if(isNaN(phoneNo)){
      Alert.alert("Attention","Phone number must contain numbers only",[
        {
          text: 'Ok',
          onPress: () => "",
          style: 'cancel',
        },
      ])
      return
    }
    if(phoneNo.length !== 10){
      Alert.alert("Attention","Phone number must be 10 digits long",[
        {
          text: 'Ok',
          onPress: () => "",
          style: 'cancel',
        },
      ])
      return
    }

    try {
      const res = await signUpApi({name,phoneNo,email,password});
      if(res){
        navigation.navigate("login")
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Attention","Something went wrong please try again",[
        {
          text: 'Ok',
          onPress: () => "",
          style: 'cancel',
        },
      ])
    }
  }
  function isValidEmail(email) {
    // Regular expression for validating email
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }
  

  return (
    <ScrollView contentContainerStyle={{alignItems:'center',justifyContent:'center'}} className="flex-1 overflow-scroll  bg-[#ffffff] flex-col w-[100%] h-[100%]">
      <Text className="mt-[40] text-3xl text-[#ff4242]">Sign Up</Text>
      <View className="w-[80%] mt-[20]">
        <StdInput placeholder="Full name" icon="user" pass={false} setterFn={setName}/>
      </View>
      <View className="w-[80%]  mt-[20]">
        <StdInput placeholder="Phone" icon="phone" pass={false} setterFn={setPhone}/>
      </View>
      <View className="w-[80%]  mt-[20]">
        <StdInput placeholder="Email" icon="mail" pass={false} setterFn={setEmail}/>
      </View>
      <View className="w-[80%] mt-[20]">
        <StdInput placeholder="Password" icon="lock" pass={true} setterFn={setPassword}/>
      </View>
      <View className="w-[80%] mt-[20]">
        <StdInput placeholder="Confirm Password" icon="exclamation" pass={true} setterFn={setConfirmPassword}/>
      </View>
      <View className="mt-[40] w-[80%]">
        <StdButton text="Sign Up" color="red" handler={signUpHandler}/>
      </View>
      <Text className="self-start w-[80%] mx-auto mt-2" onPress={()=>{navigation.navigate("login")}}>Already have an account ?</Text>
    </ScrollView>
  )
}
