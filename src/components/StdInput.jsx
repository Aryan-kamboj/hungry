import React from 'react'
import { View,TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
export const StdInput = ({placeholder,icon,pass,setterFn,submitHandler}) => {
  const changeHandler = (text)=>{
    setterFn(text)
  }
  return (
      <View className="w-[100%] items-center rounded-md flex-row bg-white  h-[50] px-4 [elevation:20]">
        <AntDesign name={icon} size={24} color="black" />
        <TextInput className=" ml-[10] self-center w-[80%] [fontSize:18] " onSubmitEditing={submitHandler} onChangeText={changeHandler} secureTextEntry={pass} placeholder={placeholder}/>
      </View>
  )
}
