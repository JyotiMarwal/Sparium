import React from "react";
import { View, FlatList, ScrollView, Image,Text, StyleSheet ,TextInput,TouchableOpacity} from "react-native";
import { Dimensions } from 'react-native';
import styles from '../Style/FlatDetailStyle'

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;



  const data = [
    {
      imageUrl: require("../Assets/exercise.jpg"),
      id:"1",
      discount:"15% OFF on Cardio & Yoga",
      subscription:"on yearly Subscription",
      date:"Exp. 15 Jun 2019",
   
    },
    {
      imageUrl: require("../Assets/gym.jpg"),
      id:"2",
      discount:"Flat 25% OFF on freeletics",
      subscription:"New Members Only",
      date:"Exp. 15 Jun 2019",
      
    },
    
 ];

  const ReviewFlatlist = [
    {
      imageUrl: require("../Assets/exercise.jpg"),
      id:"1",
      name:"John Mishiwas",
      description:"It's Awesome...",
      date:"12 Jun",
   
    },
    
    
 ];


export default class FlatDetail extends React.Component {
constructor(props) {
        super (props)
        this.state = {
            data:data,
            var:ReviewFlatlist, 
            liked: false,             
        }
    }
     
 changeImageColor = () => {
  this.setState({ 
    liked: true ,  
    })
 };

  render() {
    console.log("@@@@@", this.state.liked)
    console.log("###3", this.setState.liked)
    return (
      <ScrollView>
      
  <View style={styles.main}>
  

        <View>
              <Image
               style={styles.mainViewStyle}
               source={require('../Assets/jumba.jpg')}
               />
                
                <Image
                style={styles.backLogo}
                source={require('../Assets/whiteBack.png')}
                 />
              
                    {/* <Image
                     style={styles.heart}
                     source={require('../Assets/heart.png')}
                    /> */}
                    {/* <TouchableOpacity */}
                    {/* // onPress={() => this.changeImageColor()}> */}

                      <TouchableOpacity style={styles.button}
                      onPress={() => this.changeImageColor()}>
                      <Image 
                       source={this.state.liked ? require('../Assets/redHeart.png') : require('../Assets/heart.png')}  
                       style = {styles.heart} />
                      </TouchableOpacity>
                <Image
                style={styles.cat}
                source={require('../Assets/funny-cat.jpg')}
                 />
      
        </View>

         <View  style={styles.GymView}>   
          <Text style={styles.gymText}>Gold's gym</Text>
                     <View style={styles.ratingView}>
                      <Image style = {styles.ratingStar} source={require('../Assets/whiteStar.png')}/>
                       <Text style={styles.ratingText}> 4.5</Text>
                       </View>
          <View style={styles.fitnessTrainingView}>
          <Text style={styles.fitnessTrainingText}>Fitness & Training</Text>
          <Text style={styles.ReviewText}> 124 Reviews</Text>
          </View>
          <View style={styles.time}>
            <Text style={styles.openedNow}>OPENED NOW</Text>
            <Text style={styles.timeText}> -10:00 - 07:00 PM</Text>
          </View>
        </View>

        {/* view for distance , map , call & message */}

      <View  style={styles.gpsMainView}>
       <Image style = {styles.gpsimage} source={require('../Assets/gps.png')}/>
          <View style={styles.distanceTextView}>
              <Text style={styles.distanceText}>Distance 3.7 KM</Text>
               <Text style={styles.addressText}>21 street, Hamshare</Text>
          </View>
        <View style={styles.callMessageView}>
             <View style={styles.callview}>
                <Image style = {styles.callImage} source={require('../Assets/call.png')}/>
              </View>
              <View style={styles.messageView}> 
              <Image style = {styles.messageImage} source={require('../Assets/message.png')}/>
              </View>
        </View>
        </View>

        {/*  today's offers & Discounts */}

        <View style={styles.offerDiscountView}>
        <Text style={styles.offerDiscountText}>Today's offers & Discount </Text>
        </View>



      {/* flat list start */}


 <FlatList
             
             data={this.state.data }
            renderItem={item => (
              <View style={styles.flatlistcontainer}>
              <Image style = {styles.flatListImage} source={item.item.imageUrl}/>
                       
                        <View style={styles.FlatlistTextView}>
                             <Text style={styles.discountStyle}>{item.item.discount}</Text>
                             <Text style={styles.subscriptionStyle}>{item.item.subscription}</Text>
                             <Text style={styles.dateStyle}>{item.item.date}</Text>
                     </View>
            </View>
          )}
        keyExtractor={item=>item.id}
        />

        {/* Abount Gold's Gym */}
      
      <View style={styles.goldGymView}>
        <Text style={styles.goldgymText}>About Gold's Gym </Text>
        <Text style={styles.loremText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit porta sem, bibendum interdum lectus pretium sit amet. Praesent eleifend et nulla dictum fringilla. Etiam eget nisi interdum, sagittis orci nec, dictum eros. Donec luctus elit sed mi ultricies venenatis quis condimentum turpis. 
        </Text>
        </View>
      {/* our offerings */}

      <View style={styles.ourOfferingView}>
        <Text style={styles.ourOfferingText}>Our Offerings</Text>
        </View>

      <View style={styles.offeringImageView}> 
              <Image style = {styles.Image} source={require('../Assets/jumba.jpg')}/>
               <Image style = {styles.Image} source={require('../Assets/workout5.jpg')}/>
               <Text style={styles.cardioText}>Cardio</Text>
               <Text style={styles.yogaText}>Yoga</Text>
      </View>  
              <View style={styles.offeringImage2View}> 
              <Image style = {styles.Image} source={require('../Assets/workout.jpg')}/>
               <Image style = {styles.Image} source={require('../Assets/workout5.jpg')}/>
                <Text style={styles.muscleText}>Muscle Building</Text>
               <Text style={styles.strengthText}>Strength Training</Text>
              </View>
    
    {/* Rating & Reviews */}

        <View style={styles.RatingView}>
        <Text style={styles.RatingText}>Rating & Reviews</Text>
        </View>

      <FlatList
             
             data={this.state.var }
            renderItem={item => (
              <View style={styles.Ratingflatlistcontainer}>
                  <View style={styles.ImageView}>
                  
                    <Image style = {styles.RatingflatListImage} source={item.item.imageUrl}/>
                    </View>
                       
                        <View style={styles.RatingFlatlistTextView}>
                             <Text style={styles.nameStyle}>{item.item.name}</Text>
                             <Text style={styles.ReviewdescriptionStyle}>{item.item.description}</Text>
                     </View>
                     <View style={styles.RatingFlatlistTextView}>
                             <Text style={styles.ReviewdateStyle}>{item.item.date}</Text>
                     </View>
                     <View style={styles.ReviewratingView}>
                      <Image style = {styles.ReviewratingStar} source={require('../Assets/star.png')}/>
                       <Text style={styles.ReviewratingText}> 4.5</Text>
                       </View>
            </View>
           )}
           keyExtractor={item=>item.id}
           />

{/* rate the business */}

    <View style={styles.RateBusinessView}>
        <Text style={styles.RateBusinessText}>RATE THIS BUSINESS </Text>
        </View>
      </View>
      </ScrollView>
    );
  }
}
//  const styles = StyleSheet.create({
//    main:
//    {
//      backgroundColor:"white",
//    },
// mainViewStyle:
// {
//     width:width*1,
//     height:height*0.45,
// },
// backLogo:
// {

//   width:width*0.09,
//   height:height*0.04,
//   marginTop:height*0.06,
//   resizeMode:'contain',
//   position:'absolute',
//   marginHorizontal:width*0.05,
// },
// heart:
// {
//   width:width*0.09,
//   height:height*0.04,
//   marginTop:height*0.01,
//   resizeMode:'contain',
//   position:'absolute',
//   // marginLeft:width*0.82,
//   // paddingLeft : 2,
//   // backgroundColor: 'transparent',
//       // tintColor: "red",
// },
// button: {
//   width:width*0.10,
//    height: height*0.04,
//    //backgroundColor:"yellow",
//    marginTop:height*0.05,
//    position:'absolute',
//    paddingLeft : 10,
//    marginLeft:320,
   
// },
// cat:
// {
//   width:width*0.25,
//   height:height*0.11,
//   marginTop:height*0.32,
//   resizeMode:'stretch',
//   position:'absolute',
//   marginHorizontal:width*0.05,
//   borderColor: "white",
//   borderWidth: 3,
//   borderRadius :5, 

  
// },

// GymView:
// {
//     width:width*1,
//     height:height*0.11,
//     backgroundColor:'white',
//     paddingTop:height*0.01,
//     paddingHorizontal:width*0.05,
// },
// gymText:
// {
//   color:"#4a90e2",
//   fontWeight :'bold',
//   fontSize:18,
//   letterSpacing:0.47,
// },
// fitnessTrainingText:
// {
//   color:'#555555',
//   paddingTop:height*0.008,
//   fontWeight :'500',
//   fontSize:14,
//   letterSpacing:0.36,
// },
// openedNow:
// {
//   color:'#54940a',
//   paddingTop:height*0.008,
//   fontWeight :'bold',
//   fontSize:12,
//   letterSpacing:0.31,
// },
// timeText:
// {
//   color:'#9b9b9b',
//   paddingTop:height*0.008,
//   fontWeight :'bold',
//   fontSize:12,
//   letterSpacing:0.31,
// },

// time:
// {
//   flexDirection:'row'
// },
// fitnessTrainingView:
// {
//   flexDirection:'row',
//   justifyContent:'space-between',
// },
// ReviewText:
// {
//   color:'#909090',
//   paddingTop:height*0.008,
//   fontWeight :'bold',
//   fontSize:9,
//   letterSpacing:0.25,
// },
// ratingView:
// {
//   backgroundColor:'#56980a',
//    width:width*0.15, 
//    height:height*0.03,
//     position:'absolute', 
//     marginTop:height*0.01, 
//     marginLeft:width*0.79,
//     borderRadius:3,
//     flexDirection:'row',
//     justifyContent:'center',
//     paddingTop:height*0.004,
//     letterSpacing:0.36,
// },
// ratingStar:
// {
//   width:width*0.03,
//   height:height*0.01,
//   resizeMode:'contain',
//   paddingTop:height*0.02,
// },
// ratingText:
// {
//   color:'white',
//   fontSize:13,
//   paddingLeft:width*0.007,
//   letterSpacing:0.36,
//   fontWeight:'bold',
// },

// gpsMainView:
// {
//   width:width*1,
//     height:height*0.08,
//     backgroundColor:'#eeeeee',
//     paddingTop:height*0.015,
//     paddingHorizontal:width*0.05,
//     flexDirection:'row',
//     paddingLeft:width*0.03,
//     //paddingBottom:30,  
// },
// gpsimage:
// {
//   width:width*0.07,
//   height:height*0.05,
//   resizeMode:'contain',
// },

// callMessageView:
// {
//    width:width*0.35,
//    height:height*0.04,
//    flexDirection:'row',
//    //backgroundColor: 'red'
//    justifyContent:'space-between',
//    marginHorizontal:width*0.20,
// },
// callview:
// {
//   backgroundColor:'#00d2ea',
//  width:width*0.16, 
//  height:height*0.04,
//  alignItems:'center',
//  borderRadius:3,
// },
// callImage:
// {
//   width:width*0.15,
//   height:height*0.02,
//   resizeMode:'contain',
//   marginTop:height*0.009,
  
// },
// messageView:
// {
//   backgroundColor:'#17c884',
//    width:width*0.16, 
//    height:height*0.041,
//  alignItems:'center',
//  borderRadius:3,
// },
// messageImage:
// {
//   width:width*0.15,
//   height:height*0.02,
//   resizeMode:'contain',
//   marginTop:height*0.009,  
// },
// distanceText:
// {
//   fontSize:13,
//   paddingTop:height*0.002,
//    color:'#262626',
//    fontWeight:'500',
// },
// addressText:
// {
//   fontSize:11,
//   paddingTop:height*0.002,
//   color:'#686868',
//   fontWeight:'500',
// },

// offerDiscountView:
// {
//   width:width*1,
//   height:height*0.05,
//  // backgroundColor:"yellow",
//   paddingTop:height*0.01,
//   paddingLeft:width*0.05,
// },

// offerDiscountText:
// {
//   color:"#4f4f4f",
//   fontWeight:'500',
//   fontSize:16,
// },
// flatListImage:
// {
//   width:width*0.25,
//   height:height*0.11,
// },
// flatlistcontainer:
// {
//   width:width*0.89,
//   flexDirection:'row',
//   borderColor:'#eeeeee',
//   borderRadius:5,
//   borderWidth:1,
//   marginHorizontal:width*0.05,
//   margin:5,
// },
// FlatlistTextView:
// {
//   flexDirection:'column',
//   marginLeft:width*0.05,
//   marginTop:height*0.02,
// },
// discountStyle:
// {
//   color:"#4f4f4f",
//   fontWeight:'bold',
// },
// subscriptionStyle:
// {
//   color:"#4f4f4f",
//   fontWeight:'500',
// },
// dateStyle:
// {
//   color:"#5e5e5e",
// },
// goldGymView:
// {
//   width:width*1,
//   height:height*0.18,
//   //backgroundColor:"yellow",
//   paddingTop:height*0.01,
//   paddingHorizontal:width*0.05,
//   fontWeight:'bold',
// },
// loremText:
// {
//  color:"#4f4f4f",
//  paddingTop:height*0.01,
//  letterSpacing:0.28,
//  fontSize:13,
//  fontWeight:'400',

// },
// goldgymText:
// {
//  color:"#4f4f4f",
//  paddingTop:height*0.01,
//  letterSpacing:0.28,
//  fontSize:16,
//  fontWeight:'bold',
// },
// ourOfferingView:
// {
//   width:width*1,
//   height:height*0.05,
//  // backgroundColor:"yellow",
//   paddingTop:height*0.01,
//   paddingLeft:width*0.05,
// },

// ourOfferingText:
// {
//   color:"#4f4f4f",
//   fontWeight:'500',
//   fontSize:16,
//   fontWeight:'bold',
// },

// offeringImageView:
// {
//   width:width*1,
//     height:height*0.17,
//    // backgroundColor:'#eeeeee',
//     paddingTop:height*0.01,
//     paddingHorizontal:width*0.05,
//     flexDirection:'row',
//     paddingLeft:width*0.03,
//     justifyContent:'space-between',
   
// },

// Image:
// {
//     width:width*0.44,
//     height:height*0.14,
//     borderRadius:10,

// },

// offeringImage2View:{
//     width:width*1,
//     //backgroundColor:'#eeeeee',
//     // paddingTop:14,
//     paddingHorizontal:width*0.05,
//     flexDirection:'row',
//     paddingLeft:width*0.03,
//     justifyContent:'space-between',
// },
// cardioText:
// {
//   position:'absolute',
//   color: 'white',
//   paddingLeft:width*0.15,
//   paddingTop:height*0.07,
//   fontWeight:'bold',
//   fontSize:17, 
// },
// yogaText:
// {
//   position:'absolute',
//   color: 'white',
//   paddingLeft:width*0.66,
//   paddingTop:height*0.07,
//   fontWeight:'bold',
//   fontSize:17, 
// },
// muscleText:
// {
//   position:'absolute',
//   color: 'white',
//   paddingLeft:width*0.11,
//   paddingTop:height*0.07,
//   fontWeight:'bold',
//   fontSize:17, 
// },
// strengthText:
// {
//   position:'absolute',
//   color: 'white',
//   paddingLeft:width*0.53,
//   paddingTop:height*0.07,
//   fontWeight:'bold',
//   fontSize:17, 
// },
// RatingView:
// {
//   width:width*1,
//   height:height*0.05,
//  // backgroundColor:"yellow",
//   paddingTop:height*0.01,
//   paddingLeft:width*0.05,
//   marginTop:height*0.03,
// },

// RatingText:
// {
//   color:"#4f4f4f",
//   fontWeight:'500',
//   fontSize:16,
// },
// ImageView:
// {
//     width:50,
//     height:50,
//     borderRadius:100,
//     backgroundColor:"white",
//     borderColor:'#979797',
//     borderWidth:2,
//     padding :2,
//     alignItems:"center",
//     marginLeft:5,
//     marginTop:2,

// },
// RatingflatListImage:
// {
//   width:40,
//   height:40,
//   borderRadius:80,
//   // borderWidth:3,
//   // borderColor:'#979797',
//   // padding:20,
//   resizeMode:"cover",
// },
// Ratingflatlistcontainer:
// {
//   width:width*0.89,
//   height:height*0.09,
//   flexDirection:'row',
//   borderColor:'#eeeeee',
//   borderRadius:5,
//   borderWidth:3,
//   marginHorizontal:width*0.05,
//   margin:5,
//   marginTop:height*0.01,
//   paddingTop:height*0.01,
//   paddingHorizontal:width*0.05,
//   // shadowOpacity:10,
//   // shadowColor:'#eeeeee',
//   // shadowRadius :20,
//   // shadowOffset :{
//   //   height:1,
//   //   width:1,
//   // },
// shadowColor: "#000",
// shadowOffset: {
// 	width: 0,
// 	height: 2,
// },
// shadowOpacity: 0.10,
// shadowRadius: 1,

// // elevation: 1,
  
  
// },
// ReviewnameStyle:
// { paddingTop:2,
//   color:"#4f4f4f",
//   fontWeight:'bold',
// },
// ReviewdescriptionStyle:
// { 
//   paddingTop:height*0.002,
//   color:"#4f4f4f",
//   fontWeight:'400',
//   fontSize:10,
// },
// ReviewdateStyle:{
//   color:"#4f4f4f",
//   fontWeight:'500',
//   fontSize:10,
//   paddingTop:height*0.005,
//   paddingLeft:width*0.20,

// },
// RatingFlatlistTextView:
// {

//   marginLeft:width*0.05,
//   marginTop:height*0.005,
 
  
// },
// ReviewratingView:
// {
//   // backgroundColor:'#56980a',
//    width:width*0.15, 
//    height:height*0.03,
//     position:'absolute', 
//     marginTop:height*0.04, 
//     marginLeft:width*0.69,
//     borderRadius:3,
//     flexDirection:'row',
//     justifyContent:'center',
//     paddingTop:height*0.004,
//     letterSpacing:0.36,
// },
// ReviewratingText:
// {
//   color:"#56980a",
//   fontWeight:'500',
//   fontSize:12,
//   fontWeight:'bold',
//   paddingTop:5,
  
// },
// ReviewratingStar:
// {
//   width:width*0.03,
//   height:height*0.03,
//   resizeMode:'contain',
//   // paddingTop:-120,
  
// },
// RateBusinessView:
// {
//   width:width*1,
//   height:height*0.07,
//   backgroundColor:"#17c884",
//   paddingTop:height*0.02,
//   paddingLeft:width*0.05,
//   alignItems:'center',
//   marginTop:height*0.02,
// },

// RateBusinessText:
// {
//   color:"white",
//   fontWeight:'500',
//   fontSize:18,
  
// },

//   });

