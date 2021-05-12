import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Alert, TextInput, Image} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import { Dimensions } from 'react-native';



const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
  },
   containerImage:{
    alignItems : 'center',
    justifyContent : 'center',
    flexDirection: 'row',
    flex : 1,
    alignItems: 'flex-start',
    paddingTop : height*0.13,
  },
  logoImage :
  {
     resizeMode: "contain",
     width : width*1.0,
     height :height*0.24,
 
  },
 
  instructions: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333333',
    marginBottom: height*0.04,
  },
  textInputContainer: {
    marginBottom: height*0.04,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 4,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 210,
    width: '60%',
    borderRadius: 10,
    //borderWidth: 1,
    backgroundColor : '#19d191',
    height : '6%',
   
  },
  textInput: {
    height: 40,
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    letterSpacing: 5,
   // marginBottom: 10,
    textAlign: 'center',
  },
  buttonStyle: {
    marginHorizontal: 20,

  },
    textStyle: {  
        fontSize: 23,  
        textAlign: 'center',  
        color: '#f00',  
    },  
});


export default class OtpScreen extends Component {
  state = {
    otpInput: '',
    inputText: '',
  };
 
  alertOtp = () => {
    const {otpInput = ''} = this.state;


    console.log(otpInput,"helllo")
     if (otpInput===(this.props.route.params.OTP) ){
     // Alert.alert(otpInput);
        Alert.alert("OTP verified");
       }
       else{
         Alert.alert("OTP not match")
       }

  };



  render() {
 console.log("propsssssssssssssss",this.props.route.params)
     const { params } = this.props.route;  
      

    return (
      <View style={styles.container}>

        <View style={styles.containerImage}>
               <Image style={styles.logoImage}
               source={require('../Assets/greenwood.png')}
               />
             </View>

          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
                <Text style={{ marginTop: 16,fontSize: 20,}}>  
                    This is otp Screen and we receive value from Home Screen  
                </Text>  
                <Text style={styles.textStyle}>email: {(params.email)}</Text>  
                <Text style={styles.textStyle}>password: {(params.password)}</Text>
                <Text style={styles.textStyle}>contact: {(params.contact)}</Text>  
                <Text style={styles.textStyle}>OTP: {(params.OTP)}</Text>    
            

            
          </View>
        <Text style={styles.instructions}>Enter OTP</Text>
      
        <OTPTextView
       
          handleTextChange={(otpInput) => {this.setState({otpInput})}}
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
        
        //  defaultValue="1234"
        />
        <View style={styles.buttonWrapper}>
        
        <Button
          style={styles.buttonStyle}
          title="Verify"
          onPress={this.alertOtp}
        
        />
      </View>
       
      </View>
    );
  }
}

