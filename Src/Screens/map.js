import * as React from 'react';
import MapView from 'react-native-maps';
// import { StyleSheet, Text, View, Dimensions , ScrollView, Image,FlatList, TouchableOpacity} from 'react-native';
import { View,ImageBackground,ScrollView,  FlatList, Image,Text, StyleSheet ,TextInput,TouchableOpacity} from "react-native";
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';


const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;



const firstlist = [
    {
      imageUrl: require("../Assets/inActiveEntertainment.png"),
      id:"1",
      text:'entertainment',
    },
    {
      imageUrl: require("../Assets/inActiveMedical.png"),
      id:"2",
      text:'Medical',
    },
    {
      imageUrl:require("../Assets/inActiveTech.png"),
      id:"3",
      text:'Technology',
    }, 
 ]


export default class map extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        var:firstlist,
        selectedItem:null,  
        activeIndex:0,
          carouselItems: [
          {
              title:"Cardio Mantra",
              text: "Fitness & Training",
                imageUrl: require("../Assets/workout.jpg"),
                distance :"3.7 KM",
                 offer :"3 OFFERS",
          },
          {
              title:"Cardio Mantra",
              text: "Fitness & Training",
            imageUrl:require("../Assets/women.jpg"),
            distance :"3.7 KM",
            offer :"3 OFFERS",
          },
          {
              title:"Cardio Mantra",
              text: "Fitness & Training",
               imageUrl: require("../Assets/workout.jpg"),
               distance :"3.7 KM",
                offer :"3 OFFERS",
          },
          {
              title:"Cardio Mantra",
              text: "Fitness & Training",
              imageUrl: require("../Assets/workout5.jpg"),
              distance :"3.7 KM",
               offer :"3 OFFERS",
          },
          {
              title:"Cardio Mantra",
              text: "Fitness & Training",
              imageUrl:require("../Assets/women.jpg"),
              distance :"3.7 KM",
               offer :"3 OFFERS",
          },
        ]


        }
    }



onPressHandler(id) {
        this.setState({selectedItem: id});
      }

_renderItem({item,index}){
        return (

          <View style={styles.carouselView}>
           
            <Image style={styles.carouselImage} source={item.imageUrl}/>
            <View style={styles.textstyle}>
              <Text style={styles.title}>{item.title} </Text>
              <Text style={styles.distance}>{item.distance}</Text>
              </View>
              <View style={styles.textstyle}>
              <Text style={styles.text}>{item.text} </Text>
              <Text  style={styles.offer}>{item.offer}</Text>
              </View>
               <View style={styles.ratingView}>
                      <Image style = {styles.ratingStar} source={require('../Assets/whiteStar.png')}/>
                  
                       <Text style={styles.ratingText}>4.5</Text>
                </View>
             </View>

        )
    }

  render() {
    return (
       <ScrollView>
      <View style={styles.container2}>
      <MapView
       //provider={PROVIDER_GOOGLE} 
        style={styles.mapStyle} />
        
      <View style={styles.arrowView}>
      <Image
          style={styles.backLogo}
          source={require('../Assets/back.png')}
        />
      <Text style={styles.storeStyle} >Stores</Text>
      
      </View>

        <FlatList
         extraData={this.state.selectedItem} 
         showsHorizontalScrollIndicator={false}
         data={this.state.var}
          horizontal
          renderItem={item => ( 
         //console.log(item.item.text,"@@@@"),
            <TouchableOpacity
                            onPress={() => this.onPressHandler(item.item.id)}>
                            <View>
            <View 
              style={[styles.firstlistView, {backgroundColor:this.state.selectedItem == item.item.id ?"#19d191":"white"}] }>
              <Image style = {styles.imageStyle} source={item.item.imageUrl}/>
              <Text style={styles.firstListText}> {item.item.text}</Text>
            </View>
            </View>
            </TouchableOpacity>
          )}
        keyExtractor={item=>item.id} 
        />

     <View style={{ flex: 1, flexDirection:'row' }}>
                <Carousel
                   layout={"default"}
                   inactiveSlideScale={1}
                  slideStyle={{ flex: 1 }}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={362}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>     
    </View>
    </ScrollView>
 
    );
  }
}






const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    position:"relative",
  },
  mapStyle: {
    position:"absolute",
    width:width,
    height:height,
  },
      main:
   {
     backgroundColor:"#eeeeee",  

   },
container:
{
  height: height*0.26,
   width: width*0.94,
   backgroundColor:"white",
   margin: 10,
   marginTop:height*0.01,
   shadowColor :'black',
  shadowOpacity :0.3,
  flex:1,
  resizeMode:'contain',
  borderRadius:5,
  // paddingLeft:1,
  paddingHorizontal:1,
  //paddingVertical:1,

},
arrowView:
{
  paddingHorizontal:width*0.02,
  flexDirection:'row',
},
backLogo:
{

  width:width*0.07,
  height:height*0.03,
  marginTop:height*0.08,
  resizeMode:'contain',
},
storeStyle:
{
  marginTop:height*0.07 ,
  paddingLeft:width*0.03,
  fontSize:35,
  color:'#4f4f4f'
},

imageStyle:
{
  height:'30%', 
  width:'50%', 
  resizeMode:"contain",
  //flexDirection:'column',
  marginTop :height*0.02,
  marginHorizontal:width*0.06,
},

ratingView:
{
  backgroundColor:'#54940a',
   width:43, 
   height:17,
    position:'absolute', 
    marginTop:10, 
    marginLeft:274,
    borderRadius:3,
    flexDirection:'row',
    justifyContent:'center',
    
},
ratingStar:
{
  width:8,
  height:3,
  resizeMode:'contain',
  paddingTop:17,

},
ratingText:
{
  color:'white',
  fontSize:14,
  paddingLeft:3,
},
nameStyle:
{
  backgroundColor:"yellow",
   position:"relative", 
   fontWeight:"bold",
   color:'red',
   fontSize:16,
   paddingHorizontal:10,
},

firstlistView:
{
  height: height*0.10,
  width: width*0.35,
  backgroundColor:"white",
   margin: 18, 
   marginTop:height*0.02,
   alignItems:'center',
   borderRadius:5,
   marginHorizontal:width*0.01,
   marginLeft:10,
},

 carouselView:{
              backgroundColor:'white',
              borderRadius: 10,
              borderColor:'#19d191',
              borderWidth:5,
              height: height*0.29,
                 
             // padding: 50,
              marginLeft: width*0.03,
              //marginRight: width*0.06,
              marginTop:height*0.30 ,
             // flexDirection: 'column',
            
              },
    carouselImage:
    {
        position:'absolute',
        width:width*0.87,
        height:height*0.21,
        resizeMode:"cover",
    },
    textstyle:
  { 
    marginHorizontal :width*0.02,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:5,
    lineHeight:5,
  },
  title:
  {
    color:"black",
    fontWeight:'bold',
   // marginTop:120,
   paddingTop:180,
   fontSize:18,
   letterSpacing:0.36,
    
  },
  distance:
  {
    color:"#9b9b9b",
    fontWeight:'bold',
    paddingTop:180,
    letterSpacing:0.36, 
  },
  text:
  {
    color:"#555555",
    fontWeight:'bold',
    letterSpacing:0.36,
  },
  offer:
  {
    color:"#56980a",
    fontWeight:'bold', 
    letterSpacing:0.36,
  },
  firstListText:
    {
     marginHorizontal:width*0.05,
    },


});
