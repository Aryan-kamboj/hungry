import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
export const StdButton = ({text,color,navHandler}) => {
    let bg;
    let txt;
    if(color=="red"){
        bg="#ff4242"
        txt="white"
    }
    if(color=="green"){
        bg="#1ac929"
        txt="white"  
    }
    if(color=="grey"){
        bg="#a8a8a8"
        txt="black" 
    }
    if(color=="white"){
        bg="#ffffff"
        txt="black"
    }
  return (
    <TouchableOpacity onPress={navHandler} className={`bg-[${bg}] w-[100%] px-6 py-3 rounded-md`}>
        <Text className={`text-${txt} self-center font-[900] text-xl`}>{text}</Text>
    </TouchableOpacity>
  )
}
