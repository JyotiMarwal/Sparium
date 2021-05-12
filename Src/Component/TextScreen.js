import React from 'react';
import { View ,Text, StyleSheet, TextInput} from 'react-native';
import { Dimensions } from 'react-native';



const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;


const TextScreen=(props)=>{
      
      //console.log(props);
    
    return(
        <View>
        <Text>

      {/* {props.title}     */}
        </Text>
         <TextInput 
         style={styles.inputs} 
         autoCapitalize ="none"
         autoCorrect ={false}
         placeholder = {props.placeholder}
         keyboardType= {props.keyboardType}
        textContentType = {props.textContentType} 
        secureTextEntry ={props.secureTextEntry}
        onChangeText = {props.onChangeText}
        
        />
         
         


        </View>
    );
};

const styles = StyleSheet.create({
    inputs :
 {
    borderBottomWidth : 1,
    paddingLeft : 1,
    paddingTop: height*0.01,
    marginLeft : width*0.07,
    marginRight : width*0.07,
    color : 'grey',
    fontSize : 15,                                                                                                                                                                                                                                                                                                                                                                                                     
  },
});

export default TextScreen;