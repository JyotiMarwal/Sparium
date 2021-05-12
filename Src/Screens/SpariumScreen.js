import React from "react";
import { View, FlatList,Modal, ScrollView,Pressable, Image,Text, StyleSheet ,TextInput,TouchableOpacity} from "react-native";
import { Dimensions } from 'react-native';



const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;


export default class SpariumScreen extends React.Component {
constructor(props) {
        super (props)
        this.state = {
           
        }
    }

    
   

    
 
  render() {

//console.log("hello",this.state.selectedItem)
// console.log("hiiiii", item.item.text)
    return (
      <ScrollView>
      <View style={styles.main}>
      <View style={styles.arrowView}>
      <Image
          style={styles.backLogo}
          source={require('../Assets/menuicon2.png')}
        />
      <Text style={styles.spariumStyle} >SPAREIUM</Text>
      <Image
          style={styles.notification}
          source={require('../Assets/notificationImage.png')}
        />
      </View>

      <View style={styles.View1}>
          <Text style={styles.Text1}>Autoparts</Text>
          <Image
              style={styles.ViewImage1}
              source={require('../Assets/visaResources3.jpg')}
            />
       </View>
       <View style={styles.View1}>
          <Text style={styles.Text1}>Manuals</Text>
          <Image
              style={styles.ViewImage1}
              source={require('../Assets/visaResources3.jpg')}
            />
       </View>
       <View style={styles.View1}>
          <Text style={styles.Text1}>Agency</Text>
          <Image
              style={styles.ViewImage1}
              source={require('../Assets/visaResources3.jpg')}
            />
       </View>
       <View style={styles.View1}>
          <Text style={styles.Text1}>Workshop</Text>
          <Image
              style={styles.ViewImage1}
              source={require('../Assets/visaResources3.jpg')}
            />
       </View>




      </View>
      </ScrollView>

    );
  }
}
 const styles = StyleSheet.create({
   main:
   {
     backgroundColor:"white",
    //  borderRadius:10,
  
   // alignItems:'space-between',
 

   },

arrowView:
{
    flex:1,
  paddingHorizontal:width*0.02,
  flexDirection:'row',
  justifyContent:'space-between',
  
},
backLogo:
{

  width:width*0.10,
  height:height*0.05,
  marginTop:height*0.07,
  resizeMode:'contain',
},
spariumStyle:
{
  marginTop:height*0.07 ,
 // paddingLeft:width*0.15,
  fontSize:30,
  color:'#4f4f4f',
  fontWeight:'bold',
},
notification:
{
  width:width*0.08,
  height:height*0.04,
  marginTop:height*0.07,
  resizeMode:'contain',
  //marginLeft:width*0.20,

},
View1:
{
  flex:1,
  flexDirection:'row',

  marginTop:10,
  //backgroundColor:"red",
  width:320,
  height:170,
  marginLeft:20,
  
},
ViewImage1:
{
   width:280,
   height:150,
  marginLeft:70,
  borderRadius:20,
 
},
Text1:
{
  // transform: [{ rotate: '-90deg'}],
   transform: [{ rotate: '-90deg' }],
   fontSize:22,
   color:'grey',
   position:'absolute',
  //  marginLeft:5,
  //  marginTop:40,
  marginTop:60,
  fontWeight:"bold",
  

},
  });

