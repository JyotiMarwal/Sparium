import React from 'react';
import {Button, Picker, Alert,useWindowDimensions, Text, View, Image, StyleSheet ,TextInput,  TouchableHighlight} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';
import TextScreen from '../Component/TextScreen';
import { Dimensions } from 'react-native';
//import { AsyncStorage } from 'react-native';
//import { firebase} from 'react-native-firebase';
//import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';



const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;
//const reference = database().ref('/users/123');
const reference = database().ref('/users/');


  export default class LoginScreen extends React.Component{
  constructor(props){
    super(props)
    this.state={
      email : "",
      password : "",
      contact : "",
    };
  }    
 

  
 onClickListener = () => {

       
          let reg =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(reg.test(this.state.email)===false)
          {   
               Alert.alert("Alert", " invalid email");
          }
          else if(this.state.password.length<8)
          {
            Alert.alert("Alert", " your password should contain atleast 8 characters ");
          }
           else if (this.state.contact.length<10) 
          {
           
             Alert.alert("Alert", "Invalid contact number"); 
          } 
          else
          {
           
            console.log(this.props,"@@@@@")
       {(navigation) =>navigation.navigate('Chat')}
          //  this.props.navigation.navigate('Chat', {
          //    email :this.state.email,
          //    password : this.state.password,
          //    contact :this.state.contact,
          
             
          //  })
          }     
 }



  render() {
    //const navigate  = this.props.navigation; 
   // const { navigate } = this.props.navigation;
  // const { navigate } = this.props.navigation;
  // const {navigate} = this.props.navigation;
   // const navigate  = this.props.navigation; 
  //const { navigation }= this.props.navigation;

    var data = [["C", "Java", "JavaScript"]];
   // const { navigate } = this.props.navigation;
    console.log("navigate", this.props.navigate)
   console.log("helloooo",this.props)
    return ( 
      
    <View style ={styles.container}> 
   

             <View style={styles.containerImage}>
               <Image style={styles.logoImage}
               source={require('../Assets/greenwood.png')}
               />
             </View>

             <View style={styles.maincontainer}>
              <Text style={styles.textContainer}>E-MAIL ADDRESS </Text>  
              <TextScreen  title="email" value={this.state.email} placeholder= "email" keyboardType="numbers-and-punctuation" textContentType ="emailAddress" onChangeText = {(email)=>this.setState({email})} />
                
              <Text style={styles.textContainer}>PASSWORD</Text>  
              <TextScreen  title="password" value={this.state.password} placeholder= "password"  keyboardType="numbers-and-punctuation"  maxLength={10} textContentType ="password" secureTextEntry ={true} onChangeText = {(password)=>this.setState({password})}/>
        

               <Text style={styles.textContainer}>CONTACT</Text> 
              <TextScreen  title="contact" maxLength={11} value={this.state.contact} placeholder= "contact" keyboardType="number-pad"  onChangeText = {(contact)=>this.setState({contact})} />

             

          <Text style={styles.textContainer}>QUALIFICATION</Text>
          <View style = {styles.dropdownStyle}>  
            <DropdownMenu
            style={{flex: 1, flexDirection : ''}}
            bgColor={'white'}
            tintColor={'#666666'}
            activityTintColor={'green'}
            handler={(selection, row) => this.setState({text: data[selection][row]})}
            data={data}
            >
            </DropdownMenu>
          </View>
              
       </View>  
              
              <View>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} 
                    onPress={() => {
                      this.onClickListener('login') 
                   }}
                  >
                <Text style={styles.loginText}>sign up</Text>
                </TouchableHighlight>
                </View>       
    </View>
    
    );
  }
}  


const styles = StyleSheet.create({
  container:
  { 
    flexDirection: 'column',
    flex : 1,
    backgroundColor : 'white',
  },
  maincontainer : 
  {
    flex : 3,
  },
  containerImage:{
    alignItems : 'center',
    justifyContent : 'center',
    flexDirection: 'row',
    flex : 1,
    alignItems: 'flex-start',
    paddingTop : height*0.08,
  },
  logoImage :
  {
     resizeMode: "contain",
     width : width*0.40,
     height :height*0.18,
 
  },
  textContainer :
  {
    color : 'gray',
    paddingLeft : width*0.07,
    paddingTop: height*0.02,
    fontSize : 15,
  },
  inputs :
  {
    borderBottomWidth : 1,
    paddingLeft : width*0.07,
    marginLeft :width*0.07,
    marginRight :width*0.07,
    color : 'grey',
    fontSize : 15,
  },
   buttonContainer: {
    height:height*0.06,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:width*0.38,
    borderRadius:5,
    marginLeft : width*0.07,
    position : 'absolute',
    bottom : height*0.01,
      
  },
   buttonContainer2: {
    height:height*0.06,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:width*0.38,
    borderRadius:5,
    marginLeft : width*0.50,
    position : 'absolute',
    //bottom : height*0.08,
      
  },
  loginButton: {
    backgroundColor: "#19d191",
    width : width*0.38,
    height : height*0.06,
  
  },
  loginText: {
    color: 'white',
    fontSize : 20,
  },
  
 dropdownStyle :
 {
   //marginLeft : width*0.05,
   //marginRight : width*0.05,
   position: 'relative',
   left :width*0.37,
 },
 showOtp :
 {
    
   justifyContent: 'center',
     alignItems: 'center',
    color : "#841584",
    position: 'relative',
   left :width*0.50,
  // bottom :height*0.10,
 
 },
 handlesignup:
 {
    backgroundColor:"#19d191",
    marginHorizontal:26,
    //marginBottom:20,
    width:width*0.39,
    height:height*0.05,
    alignItems:"center",
     borderRadius:5, 
     marginTop:40,
  },
 StoreRealtimeDatabase:
 {
  backgroundColor:"#19d191",
  marginHorizontal:5,
 // marginBottom:20,
  width:200,
  height:50,
  alignItems:"center",
  borderRadius:10, 
},

});

//export default HomeScreen;