
//  module.exports = {
import { StyleSheet} from "react-native";
import { Dimensions } from 'react-native';

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;



export default StyleSheet.create({
   "main":
   {
     backgroundColor:"white",
   },
"mainViewStyle":
{
    width:width*1,
    height:height*0.45,
},
"backLogo":
{

  width:width*0.09,
  height:height*0.04,
  marginTop:height*0.06,
  resizeMode:'contain',
  position:'absolute',
  marginHorizontal:width*0.05,
},
"heart":
{
  width:width*0.09,
  height:height*0.04,
  marginTop:height*0.01,
  resizeMode:'contain',
  position:'absolute',
  // marginLeft:width*0.82,
  // paddingLeft : 2,
  // backgroundColor: 'transparent',
      // tintColor: "red",
},
"button": {
  width:width*0.10,
   height: height*0.04,
   //backgroundColor:"yellow",
   marginTop:height*0.05,
   position:'absolute',
   paddingLeft : 10,
   marginLeft:320,
   
},
"cat":
{
  width:width*0.25,
  height:height*0.11,
  marginTop:height*0.32,
  resizeMode:'stretch',
  position:'absolute',
  marginHorizontal:width*0.05,
  borderColor: "white",
  borderWidth: 3,
  borderRadius :5,  
},

"GymView":
{
    width:width*1,
    height:height*0.11,
    backgroundColor:'white',
    paddingTop:height*0.01,
    paddingHorizontal:width*0.05,
},
"gymText":
{
  color:"#4a90e2",
  fontWeight :'bold',
  fontSize:18,
  letterSpacing:0.47,
},
"fitnessTrainingText":
{
  color:'#555555',
  paddingTop:height*0.008,
  fontWeight :'500',
  fontSize:14,
  letterSpacing:0.36,
},
"openedNow":
{
  color:'#54940a',
  paddingTop:height*0.008,
  fontWeight :'bold',
  fontSize:12,
  letterSpacing:0.31,
},
"timeText":
{
  color:'#9b9b9b',
  paddingTop:height*0.008,
  fontWeight :'bold',
  fontSize:12,
  letterSpacing:0.31,
},
"time":
{
  flexDirection:'row'
},
"fitnessTrainingView":
{
  flexDirection:'row',
  justifyContent:'space-between',
},
"ReviewText":
{
  color:'#909090',
  paddingTop:height*0.008,
  fontWeight :'bold',
  fontSize:9,
  letterSpacing:0.25,
},
"ratingView":
{
  backgroundColor:'#56980a',
   width:width*0.15, 
   height:height*0.03,
    position:'absolute', 
    marginTop:height*0.01, 
    marginLeft:width*0.79,
    borderRadius:3,
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:height*0.004,
    letterSpacing:0.36,
},
"ratingStar":
{
  width:width*0.03,
  height:height*0.01,
  resizeMode:'contain',
  paddingTop:height*0.02,
},
"ratingText":
{
  color:'white',
  fontSize:13,
  paddingLeft:width*0.007,
  letterSpacing:0.36,
  fontWeight:'bold',
},

"gpsMainView":
{
  width:width*1,
    height:height*0.08,
    backgroundColor:'#eeeeee',
    paddingTop:height*0.015,
    paddingHorizontal:width*0.05,
    flexDirection:'row',
    paddingLeft:width*0.03,
    //paddingBottom:30,  
},
"gpsimage":
{
  width:width*0.07,
  height:height*0.05,
  resizeMode:'contain',
},

"callMessageView":
{
   width:width*0.35,
   height:height*0.04,
   flexDirection:'row',
   //backgroundColor: 'red'
   justifyContent:'space-between',
   marginHorizontal:width*0.20,
},
  "callview":
{
  backgroundColor:'#00d2ea',
 width:width*0.16, 
 height:height*0.04,
 alignItems:'center',
 borderRadius:3,
},
"callImage":
{
  width:width*0.15,
  height:height*0.02,
  resizeMode:'contain',
  marginTop:height*0.009,
  
},
"messageView":
{
  backgroundColor:'#17c884',
   width:width*0.16, 
   height:height*0.041,
 alignItems:'center',
 borderRadius:3,
},
"messageImage":
{
  width:width*0.15,
  height:height*0.02,
  resizeMode:'contain',
  marginTop:height*0.009,  
},
"distanceText":
{
  fontSize:13,
  paddingTop:height*0.002,
   color:'#262626',
   fontWeight:'500',
},
"addressText":
{
  fontSize:11,
  paddingTop:height*0.002,
  color:'#686868',
  fontWeight:'500',
},

"offerDiscountView":
{
  width:width*1,
  height:height*0.05,
 // backgroundColor:"yellow",
  paddingTop:height*0.01,
  paddingLeft:width*0.05,
},

"offerDiscountText":
{
  color:"#4f4f4f",
  fontWeight:'500',
  fontSize:16,
},
"flatListImage":
{
  width:width*0.25,
  height:height*0.11,
},
"flatlistcontainer":
{
  width:width*0.89,
  flexDirection:'row',
  borderColor:'#eeeeee',
  borderRadius:5,
  borderWidth:1,
  marginHorizontal:width*0.05,
  margin:5,
},
"FlatlistTextView":
{
  flexDirection:'column',
  marginLeft:width*0.05,
  marginTop:height*0.02,
},
"discountStyle":
{
  color:"#4f4f4f",
  fontWeight:'bold',
},
"subscriptionStyle":
{
  color:"#4f4f4f",
  fontWeight:'500',
},
"dateStyle":
{
  color:"#5e5e5e",
},
"goldGymView":
{
  width:width*1,
  height:height*0.18,
  //backgroundColor:"yellow",
  paddingTop:height*0.01,
  paddingHorizontal:width*0.05,
  fontWeight:'bold',
},
"loremText":
{
 color:"#4f4f4f",
 paddingTop:height*0.01,
 letterSpacing:0.28,
 fontSize:13,
 fontWeight:'400',

},
"goldgymText":
{
 color:"#4f4f4f",
 paddingTop:height*0.01,
 letterSpacing:0.28,
 fontSize:16,
 fontWeight:'bold',
},
"ourOfferingView":
{
  width:width*1,
  height:height*0.05,
 // backgroundColor:"yellow",
  paddingTop:height*0.01,
  paddingLeft:width*0.05,
},

"ourOfferingText":
{
  color:"#4f4f4f",
  fontWeight:'500',
  fontSize:16,
  fontWeight:'bold',
},

"offeringImageView":
{
  width:width*1,
    height:height*0.17,
   // backgroundColor:'#eeeeee',
    paddingTop:height*0.01,
    paddingHorizontal:width*0.05,
    flexDirection:'row',
    paddingLeft:width*0.03,
    justifyContent:'space-between',
   
},

"Image":
{
    width:width*0.44,
    height:height*0.14,
    borderRadius:10,

},

"offeringImage2View":{
    width:width*1,
    //backgroundColor:'#eeeeee',
    // paddingTop:14,
    paddingHorizontal:width*0.05,
    flexDirection:'row',
    paddingLeft:width*0.03,
    justifyContent:'space-between',
},
"cardioText":
{
  position:'absolute',
  color: 'white',
  paddingLeft:width*0.15,
  paddingTop:height*0.07,
  fontWeight:'bold',
  fontSize:17, 
},
"yogaText":
{
  position:'absolute',
  color: 'white',
  paddingLeft:width*0.66,
  paddingTop:height*0.07,
  fontWeight:'bold',
  fontSize:17, 
},
"muscleText":
{
  position:'absolute',
  color: 'white',
  paddingLeft:width*0.11,
  paddingTop:height*0.07,
  fontWeight:'bold',
  fontSize:17, 
},
"strengthText":
{
  position:'absolute',
  color: 'white',
  paddingLeft:width*0.53,
  paddingTop:height*0.07,
  fontWeight:'bold',
  fontSize:17, 
},
"RatingView":
{
  width:width*1,
  height:height*0.05,
 // backgroundColor:"yellow",
  paddingTop:height*0.01,
  paddingLeft:width*0.05,
  marginTop:height*0.03,
},

"RatingText":
{
  color:"#4f4f4f",
  fontWeight:'500',
  fontSize:16,
},
"ImageView":
{
    width:50,
    height:50,
    borderRadius:100,
    backgroundColor:"white",
    borderColor:'#979797',
    borderWidth:2,
    padding :2,
    alignItems:"center",
    marginLeft:5,
    marginTop:2,

},
"RatingflatListImage":
{
  width:40,
  height:40,
  borderRadius:80,
  // borderWidth:3,
  // borderColor:'#979797',
  // padding:20,
  resizeMode:"cover",
},
"Ratingflatlistcontainer":
{
  width:width*0.89,
  height:height*0.09,
  flexDirection:'row',
  borderColor:'#eeeeee',
  borderRadius:5,
  borderWidth:3,
  marginHorizontal:width*0.05,
  margin:5,
  marginTop:height*0.01,
  paddingTop:height*0.01,
  paddingHorizontal:width*0.05,
  // shadowOpacity:10,
  // shadowColor:'#eeeeee',
  // shadowRadius :20,
  // shadowOffset :{
  //   height:1,
  //   width:1,
  // },
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.10,
shadowRadius: 1, 
},
"ReviewnameStyle":
{ paddingTop:2,
  color:"#4f4f4f",
  fontWeight:'bold',
},
"ReviewdescriptionStyle":
{ 
  paddingTop:height*0.002,
  color:"#4f4f4f",
  fontWeight:'400',
  fontSize:10,
},
"ReviewdateStyle":{
  color:"#4f4f4f",
  fontWeight:'500',
  fontSize:10,
  paddingTop:height*0.005,
  paddingLeft:width*0.20,

},
"RatingFlatlistTextView":
{

  marginLeft:width*0.05,
  marginTop:height*0.005,
 
  
},
"ReviewratingView":
{
  // backgroundColor:'#56980a',
   width:width*0.15, 
   height:height*0.03,
    position:'absolute', 
    marginTop:height*0.04, 
    marginLeft:width*0.69,
    borderRadius:3,
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:height*0.004,
    letterSpacing:0.36,
},
"ReviewratingText":
{
  color:"#56980a",
  fontWeight:'500',
  fontSize:12,
  fontWeight:'bold',
  paddingTop:5,
  
},
"ReviewratingStar":
{
  width:width*0.03,
  height:height*0.03,
  resizeMode:'contain',
  // paddingTop:-120,
  
},
"RateBusinessView":
{
  width:width*1,
  height:height*0.07,
  backgroundColor:"#17c884",
  paddingTop:height*0.02,
  paddingLeft:width*0.05,
  alignItems:'center',
  marginTop:height*0.02,
},

"RateBusinessText":
{
  color:"white",
  fontWeight:'500',
  fontSize:18,
  
},

})