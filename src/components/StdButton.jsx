import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
export const StdButton = ({text,color,navHandler,handler}) => {
    
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
    const Touchable = styled.TouchableOpacity`
    width:100%;
    height:50;
    background-color:${bg};
    border-radius:10px;
    `
    const TextSt = styled.Text`
    color:${txt};
    font-weight:900;
    padding-top:10;
    width:99%;
    height:100%;
    margin-left:auto;
    text-align:center;
    align-self:center;
    font-size:20;
    padding-bottom:10;
    
    `

  return (
    // <TouchableOpacity onPress={navHandler} className={`bg-[${bg}] [elevation:20] h-[50] w-[100%] rounded-md`}>
    <Touchable onPress={navHandler?navHandler:handler}>
        {/* <Text className={`text-${txt} w-[100%] h-[100%]  font-[900] text-center py-2 self-center text-xl`}>{text}</Text> */}
        <TextSt>{text}</TextSt>
    </Touchable>
    // </TouchableOpacity>
  )
}
