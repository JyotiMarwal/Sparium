import * as React from 'react';
import { View, Text, Button ,ScrollView, Image, TouchableOpacity,StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome'
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import asynScreen from '../Screens/asynScreen'



const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;


function Home({ navigation }) {
  return (
    // <View >
    //   <Text>Feed Screen</Text>
    //   <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
     
    //   <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    // </View>

    <ScrollView>
      <View style={styles.main}>
      <View style={styles.arrowView}>
      <TouchableOpacity  onPress={() => navigation.openDrawer()} >
      <Image
          style={styles.backLogo}
          source={require('../Assets/menuicon2.png')}
        />
        </TouchableOpacity>
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

function MyLeads({ navigation }) {
   return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Leads Screen</Text>
      <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer" />
    </View>
  );
}

function Connects({ navigation }) {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Connects Screen</Text>
      <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer" />
    </View>
  );
}
function Settings({ navigation }) {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer" />
    </View>
  );
}
function Logout({ navigation }) {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Logout Screen</Text>
      <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer" />
    </View>
  );
}


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      
      
      <Icons name="bell" color={'white'} size={30} style={{paddingLeft:230}} />
        <View style={styles.profileBorderView}>
        <Image
              style={styles.profileImage}
              source={require('../Assets/profile.jpg')}
            />
        </View>

    <Text style={styles.profileText}>Mayke Schuurs</Text>
      {/* <DrawerItem
        label="Close drawer" 
        onPress={() => props.navigation.closeDrawer()}
      /> */}
      
      {/* <DrawerItem
        label="Toggle drawer" style={{color:"red"}}
        onPress={() => props.navigation.toggleDrawer()}
      /> */}
        {/* <DrawerItem
        label="Toggle drawer" style={{color:"red"}}
        onPress={() =>navigation.jumpTo('Home')}
      /> */}

    

    <View style={styles.orangeView}>

    <View style={styles.roundedView}>
    <Icons name="list-alt" color={'white'} size={27} style={{paddingLeft:20 , marginTop:15}}/>
    </View>
           <Text style={styles.orangeText}>Soll Parts </Text>
    </View>
    <View style={styles.greenView}>
    <View style={styles.roundedView2}>
    <Icons name="envelope-o" color={'white'} size={27} style={{paddingLeft:20 , marginTop:15}}/>
       </View> 
           <Text style={styles.orangeText}>My Enquiry</Text>
    </View>


     {/* <View style={styles.containerView}> 
    <View style={styles.drawerView}> 
          <Icons name="home" color={'white'} size={25} /> 
        <TouchableOpacity onPress={() =>{props.navigation.navigate('Home')}}>
        <Text style={styles.drawerText} >Home</Text>
        </TouchableOpacity>
    </View>
       <View style={styles.drawerView}> 
        <Icons name="star" color={'white'} size={25} />
        <TouchableOpacity onPress={() =>{props.navigation.navigate('Home')}}>
           <Text style={styles.drawerText}>My leads</Text>
           </TouchableOpacity>
    </View>
       <View style={styles.drawerView}> 
        <Icons name="share" color={'white'} size={25} />
        <TouchableOpacity onPress={() =>{props.navigation.navigate('Home')}}>
           <Text style={styles.drawerText}>Connects</Text>
        </TouchableOpacity>
    </View>
       <View style={styles.drawerView}> 
        <Icons name="music" color={'white'} size={25} />
        <TouchableOpacity onPress={() =>{props.navigation.navigate('Home')}}>
           <Text style={styles.drawerText}>Settings</Text>
         </TouchableOpacity>
    </View>
       <View style={styles.drawerView}> 
        <Icons name="power-off" color={'white'} size={25} />
        <TouchableOpacity onPress={() =>{props.navigation.navigate('Home')}}>
           <Text style={styles.drawerText}>Logout</Text>
         </TouchableOpacity>
    </View>
    
  
  
   </View>  */}
   <View style={{height:30}}></View>
       <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator 
     drawerStyle={{
       backgroundColor: '#000066',
       //paddingHorizontal:30,
     
       fontWeight:'bold',
        }}
      drawerType={'slide'}
      drawerContentOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        itemStyle: { alignItems:'stretch', paddingLeft:10},  
        
       }}
     drawerContent={props => <CustomDrawerContent {...props}  />}>
     
      <Drawer.Screen  name="Home" component={Home} options={{ drawerIcon: ({focused, size}) => (
            <Icons
              name="home"
              size={size}
              color={focused ? '#7cc' : '#ccc'}     
            />
          ), 
          
           }} />
      <Drawer.Screen name="MyLeads" component={MyLeads} options={{ drawerIcon: ({focused, size}) => (
            <Icons
              name="star"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ), }} />
      <Drawer.Screen name="Connects" component={Connects} options={{ drawerIcon: ({focused, size}) => (
            <Icons
              name="share"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ), }} />
          <Drawer.Screen name="Settings" component={Settings} options={{ drawerIcon: ({focused, size}) => (
            <Icons
              name="music"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ), }} />
          <Drawer.Screen name="Logout" component={Logout} options={{ drawerIcon: ({focused, size}) => (
            <Icons
              name="power-off"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ), }} />

    </Drawer.Navigator>
  );
}

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
   
      <MyDrawer />
  
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
   main:
   {
     backgroundColor:"white",
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
  //marginLeft:width*0.25,

},
View1:
{
  flex:1,
  flexDirection:'row',

  marginTop: height*0.01,
  //backgroundColor:'white',
  width: width*0.82,
  height:height*0.20,
  marginLeft:width*0.06,
  
},
ViewImage1:
{
   width:width*0.71,
   height:height*0.17,
  marginLeft:width*0.17,
  borderRadius:25,
 
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
  marginTop:height*0.07,
  fontWeight:"bold",
},


profileImage:
{
    width:width*0.25,
    height:height*0.11,
   // marginLeft:5,
    borderRadius:50,
    borderColor:'white',
    borderWidth:2,
},

profileText:
{
    marginLeft:width*0.20,
    marginTop:height*0.01,
    color:'white',
    fontSize:18,
    fontWeight:'bold',
},

drawerView:
{
    marginLeft:width*0.07,
    marginTop:height*0.02,
    flexDirection:'row',
    //alignItems:'space-evenly'
   // justifyContent: 'space-between'
},
drawerImage:{
    width:25,
    height:25,
},
drawerText:{
    paddingHorizontal:width*0.03,
    fontSize:18,
    color:'white',
}
,
containerView:
{
    marginTop:height*0.03,
    marginLeft:width*0.02,
},
orangeView:
{
    backgroundColor:'#ffa500',
    width:width*0.76,
    height:height*0.07,
    marginTop:height*0.04,
    flexDirection:'row',
},
orangeImage:
{
    width:width*0.06,
    height:height*0.02,
    marginTop:height*0.01,
    marginLeft:width*0.06,
},
orangeText:
{
   paddingLeft:width*0.02,
    fontSize:18,
    paddingTop:height*0.02,
    color:'white',
    fontWeight:'500',
},
greenView:
{
    backgroundColor:'#00b300',
    width:width*0.76,
    height:height*0.07,
    marginTop:height*0.02,
    flexDirection:'row',
},
roundedView:
{
     backgroundColor:"#FF8C00",
    width:width*0.17, 
    height:height*0.07,
     borderTopRightRadius:50,
      borderBottomRightRadius:50
},
roundedView2:
{
     backgroundColor:"#228B22",
    width:width*0.17, 
    height:height*0.07,
     borderTopRightRadius:50,
      borderBottomRightRadius:50
},
profileBorderView:{
  width:width*0.30,
  height:height*0.14,
  borderColor:'white',
  borderRadius:80,
  backgroundColor:'#000066',
  borderWidth:0.2,
  position:'relative',
  marginLeft:width*0.20,
  padding:10,
},
drawerActive:{
  //position:'absolute',
  //paddingHorizontal:30,
}

  });

