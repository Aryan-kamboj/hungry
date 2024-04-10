import React from 'react'
import { useState } from 'react'
import veg from "../../../assets/veg.png"
import nonVeg from "../../../assets/nonVeg.png"
import styled from 'styled-components/native'
import { Image, Text,Modal, View , StyleSheet,Pressable,TouchableOpacity} from 'react-native'
import { StdButton } from '../StdButton'
import { FontAwesome } from '@expo/vector-icons';
export const FoodItemCard = ({dish}) => {
    const FoodItemCard = styled.TouchableOpacity`
    background-color: #ffffff;
    border-radius: 20px;
    borderWidth: 2px;
    height: 250px;
    margin-bottom:9px;
    width: 47%;
    marginHorizontal: 5px;
    overflow:hidden;
  `
  const Name = styled.Text`
    font-size: 24px;
    font-weight: 500;
    padding: 4px;
    text-align: center;
    color: #00000;
    `
  const ImageCir = styled.Image`
    width: 300px;
    height: 300px;
    border-radius: 50px;
  `
  const Heading = styled.Text`
    display:flex;
    flexDirection:row;
    alignItems:baseline;
    max-height: 30px;
  `
  const ModalContent = styled.View`
    backgroundColor: #ffffff;
    borderRadius: 20px;
    padding: 35px;
    `
    const Centered = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    marginTop: 22px;
    `
    const Icon = styled.Image`
    height:40px;
    width:40px;
    object-fit:contain;
    top:0;

    `
    const Price = styled.Text`
        fontSize:28px;
        padding:4px;
        display:flex;
        flex-direction:row;
    `
    const VegNonVeg = styled.View`
        display:flex;
        flex-direction:row;
        align-items:center;
        flex-wrap:nowrap;
        padding-vertical:4px;
    `
    const RatingDist = styled.View`
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        padding:2px;
    `
  const [modalVisible, setModalVisible] = useState(false);    
  return (
    <FoodItemCard onPress={()=>{setModalVisible(true)}}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <Centered>
          <ModalContent>
            <ImageCir source={{uri:dish.image}}/>
            <Heading>
                <Name>{dish.itemName}</Name>
                <Text style={{alignSelf:'baseline'}}> by {dish.restro}</Text>
            </Heading>
            <Price>
                <FontAwesome  name="rupee" size={24} color="black" /> {dish?.price}
            </Price>
            <RatingDist>
                <Text>{dish.distance} Kms away</Text>
                <Text>{dish.rating} / 5</Text>
            </RatingDist>
            <VegNonVeg>
                {(dish.vegetarian)?<Icon source={veg}/>:<Icon source={nonVeg}/>}
                <Text>{(dish.vegetarian)?"This is vegetarian dish":"This is a Non-vegetarian dish"}</Text>
            </VegNonVeg>
            <View style={{width:300}}>
                <StdButton text="Order Now" color="red" handler={()=>{console.log("ordered");setModalVisible(false)}}/>
            </View>
          </ModalContent>
        </Centered>
    </Modal>
    <Image source={{uri:dish.image}} style={{width:'100%',height:'55%',borderTopRightRadius:19,borderTopLeftRadius:18}}/>
    <View style={{paddingHorizontal:8, paddingVertical:2,flex:1}}>
        <Text style={{fontSize:25,fontWeight:500}}>{dish.itemName}</Text>
        <View style={{flex:1,flexDirection:'row',alignItems:'baseline'}}>
        <Text>Rs.</Text>
        <Text style={{paddingLeft:2,fontSize:20,fontWeight:500}}>{dish.price}</Text>
        </View>
        <View style={{width:10,height:10,backgroundColor:'white',position:'absolute',right:35,top:2}}>
        {(dish.vegetarian)?
            <Image style={{width:40,height:40}} source={veg}/>
            :<Image style={{width:40,height:40}} source={nonVeg}/>
        }   
        </View>
        <Text style={{fontSize:14}}>{dish?.rating} / 5</Text>
        <Text style={{fontSize:20}}>{dish?.restro}</Text>
    </View>
    </FoodItemCard> 
  )
}
const styles = StyleSheet.create({
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
});
