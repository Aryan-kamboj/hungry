import React,{useEffect,useState,useMemo} from 'react'
import { Entypo } from '@expo/vector-icons';
import { StdInput } from '../../components/StdInput';
import { DrawerActions } from '@react-navigation/native';
import { FlatList,TouchableOpacity, Text, Modal, View } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import { vegDishesApi, nonVegDishesApi } from '../../services/coreApis/dishes';
import { EvilIcons } from '@expo/vector-icons';
import logo from '../../../assets/logo.png'
import { StdButton } from '../../components/StdButton';
import { FontAwesome6 } from '@expo/vector-icons';
import styled from 'styled-components/native'
import { FoodItemCard } from '../../components/mainScreen/FoodItemCard';
import { allDishes } from '../../services/coreApis/dishes';
import RadioGroup from 'react-native-radio-buttons-group';
export const HomeScreen = ({navigation}) => {
  const radioButtons = useMemo(() => ([
    {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Less than Rs.50',
        value: 51
    },
    {
        id: '2',
        label: 'Less than Rs.100',
        value: 101
    },
    {
        id: '3',
        label: 'Less than Rs.150',
        value: 151
    }
]), []);
  const [foodData,setFoodData] = useState([]) 
  useEffect(()=>{
    (async()=>{
      try {
        const res = await allDishes();
        setFoodData(res.data);
      } catch (error) {
        
      }
    })()
  },[])

  function filterByPriceRange(items, targetPrice) {
    return items.filter(item => {
      const minPrice = targetPrice - 50;
      const maxPrice = targetPrice;
      return (item.price >= minPrice && item.price <= maxPrice);
    });
  }
  const getVegDishes = async()=>{
    try {
      const res = await vegDishesApi();
      setFoodData(res.data);
    }
    catch (error) {
      console.error(error);
    }
  }
  const getNonVegDishes = async()=>{
    try {
      const res = await nonVegDishesApi();
      setFoodData(res.data);
    }
    catch (error) {
      console.error(error);
    }
  }
  const [filterModalVisible, setFilterModal] = useState(false);
//   const foodData = [
//     {
//       "itemName": "Burger",
//       "price": 8.75,
//       "vegetarian": false,
//       "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644584/samples/food/amirali-mirhashemian-sc5sTPMrVfk-unsplash_pzsaim.jpg",
//       "restro": "Restaurant A",
//       "rating": 4.2,
//       "distance": 3
//     },
//     {
//       "itemName": "Salad",
//       "price": 7.21,
//       "vegetarian": true,
//       "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644587/samples/food/monika-grabkowska-pCxJvSeSB5A-unsplash_tuvfa0.jpg",
//       "restro": "Restaurant B",
//       "rating": 4.5,
//       "distance": 5
//     },
//     {
//       "itemName": "Pizza",
//       "price": 9.89,
//       "vegetarian": false,
//       "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644587/samples/food/saahil-khatkhate-kfDsMDyX1K0-unsplash_asu5se.jpg",
//       "restro": "Restaurant C",
//       "rating": 3.8,
//       "distance": 2
//     },
//     {
//       "itemName": "Pasta",
//       "price": 11.45,
//       "vegetarian": true,
//       "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644583/samples/food/ben-lei-flFd8L7_B3g-unsplash_xtonhf.jpg",
//       "restro": "Restaurant A",
//       "rating": 4.0,
//       "distance": 4
//     },
//     {
//       "itemName": "Sandwich",
//       "price": 6.33,
//       "vegetarian": true,
//       "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644584/samples/food/eiliv-aceron-mAQZ3X_8_l0-unsplash_vk77rv.jpg",
//       "restro": "Restaurant B",
//       "rating": 4.7,
//       "distance": 3
//     },
//     {
//       "itemName": "Soup",
//       "price": 5.99,
//       "vegetarian": true,
//       "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644587/samples/food/monika-grabkowska-_y6A9bhILkM-unsplash_tdyv4r.jpg",
//       "restro": "Restaurant C",
//       "rating": 4.3,
//       "distance": 6
//     },
//     {
//       "itemName": "Sushi",
//       "price": 12.55,
//       "vegetarian": false,
//       "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644588/samples/food/vinicius-benedit--1GEAA8q3wk-unsplash_zj66ew.jpg",
//       "restro": "Restaurant A",
//       "rating": 4.9,
//       "distance": 1
//     },
//     {
//       "itemName": "Fries",
//       "price": 4.25,
//       "vegetarian": true,
//       "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644584/samples/food/louis-hansel-vi0kZuoe0-8-unsplash_m0csok.jpg",
//       "restro": "Restaurant B",
//       "rating": 4.1,
//       "distance": 5
//     },
//     {
//       "itemName": "Taco",
//       "price": 8.10,
//       "vegetarian": false,
//       "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644590/samples/food/the-nix-company-61wG5-SAF_Y-unsplash_zogrqz.jpg",
//       "restro": "Restaurant C",
//       "rating": 4.6,
//       "distance": 2
//     },
//     {
//       "itemName": "Omelette",
//       "price": 6.75,
//       "vegetarian": true,
//       "image": "https://res.cloudinary.com/studynotion/image/upload/v1712644584/samples/food/igor-miske-N0u8bLrB_-g-unsplash_vlehoj.jpg",
//       "restro": "Restaurant A",
//       "rating": 4.4,
//       "distance": 4
//     }
// ]
const Center = styled.View`
  height:100%;
  flex:1;
  display:flex;
  margin-horizontal:10%;
  justify-content: center;
  `
const ModalContent = styled.View`
  borderRadius: 20px;
  backgroundColor: #ffffff;
  padding: 35px;
  height: 50%;
  align-items: center;
  justify-content: center;
  `
const ModalContainer = styled.View`
  justify-content: center;
  align-items: center;
  height:50%;
  `
  const Nav = styled.View`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  margin-top:48px;
  margin-left:16px;
  margin-right:16px;
  `
  const Icon = styled.Image`
  height:90px;
  width:30%;
  object-fit:contain;
  `
  const Main = styled.View`
  background-color:#fbeded;
  border-top-left-radius:20px;
  border-top-right-radius:20px;
  height:100%;
  `
  const Search = styled.View`
  border-color: #ff4242;
  border-width: 2px;
  margin-top: 20px;
  overflow: hidden;
  border-radius: 100px;
  align-self:center;
  width: 80%;
  margin-left: 4px;
  margin-right: 4px;
  `
  const Heading = styled.Text`
  font-size:40px ;
  font-weight: 500;
  text-align: center;
  padding-bottom: 2px;
  color: #d97a7a;
  `
  const WhiteBgCard = styled.View`
  background-color: #ffffff;
  width: 95%;
  height:100%;
  margin-top: 20px;
  padding: 4px;
  border-radius: 25px;
  align-self: center;
  `
  const Line = styled.View`
  border-top-width: 1px;
  border-color: #ff4242;
  margin-top: 4px;
  padding-bottom: 16px;
  width: 75%;
  align-self: center;
  `
  const ButtonContainer = styled.View`
    width: 45%;
    borderWidth: 2px;
    borderColor: ${props=>props.color||"black"};
    borderRadius: 10px;
  `
  function filterByPriceRange(items, targetPrice) {
    console.log(targetPrice);
    return items.filter(item => {
      const maxPrice = targetPrice;
      return  item.price <= maxPrice;
    });
  }
  const [selectedId, setId] = useState(1);
  const setSelectedId = async (id)=>{
    setId(id);
    const allItems = await allDishes();
    console.log(allItems.data);
    setFoodData(filterByPriceRange(allItems.data,radioButtons[id].value))
    setFilterModal(false);
  }
  let search;
  const setSearch = (e)=>{
    search = e;
  }
  const searchFood = async()=>{
    const allItems = await allDishes();
    const filteredItems = allItems.data.filter(item=>item.itemName.toLowerCase().includes(search.toLowerCase()));
    setFoodData(filteredItems);
  }
  return (
    <ScrollView>
      <Nav>
        <Entypo name="menu" size={44} color="black" onPress={()=>{navigation.dispatch(DrawerActions.openDrawer())}} />
        <Icon source={logo}/>
        <EvilIcons name="user" size={44} color="black" />
      </Nav>
      <Main>
        <Search >
            <StdInput setterFn={setSearch} submitHandler={searchFood} placeholder="Search for food" icon="search1" pass={false}/>
        </Search>
        <WhiteBgCard >
          <Heading>Categories</Heading>
          <Line/>
          <View className="flex-row justify-evenly">
            <ButtonContainer color="#ff4242">
              <StdButton text="Non-veg" color={"white"} handler={getNonVegDishes}/>
            </ButtonContainer>
            <ButtonContainer color="#1ac929">
              <StdButton text="Veg" color={"white"} handler={getVegDishes}/>
            </ButtonContainer>
          </View>
          <View>
            <TouchableOpacity onPress={()=>{setFilterModal(true)}} style={{position:"absolute",right:10,top:4}}>
              <FontAwesome6 name="filter" size={24} color="#d97a7a" />
            </TouchableOpacity>
            <View style={{paddingTop:12}}>
              <Line/>
            </View>
              <FlatList contentContainerStyle={{gap:9}} numColumns={2}  data={foodData} renderItem={({item})=><FoodItemCard dish={item}/>}/>
          </View>
        </WhiteBgCard>   
      </Main>
      <ModalContainer>
        <Modal
          animationType="slide"
          transparent={true}
          visible={filterModalVisible}
          onRequestClose={() => {
            setFilterModal(false);
          }}>
          <Center>
            <ModalContent>
              <Text style={{fontSize:20}}>Filter By Price</Text>
              <RadioGroup 
              accessibilityLabel = " Price Range " 
              radioButtons={radioButtons} 
              onPress={setSelectedId}
              selectedId={selectedId}
              />
            </ModalContent>
          </Center>
        </Modal>
      </ModalContainer>
    </ScrollView>
  )
}
