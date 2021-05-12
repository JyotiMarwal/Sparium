import React from 'react';
import { View ,Text, StyleSheet, TextInput, Image} from 'react-native';
import { Dimensions } from 'react-native';



const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;


const HorizontalView=(props)=>{
      
      //console.log(props);
    
    return(
        <View>
        <Image
       style={styles.logoImage}
        source={props.source}
        backgroundColor={props.backgroundColor}
        />
        
        <Text>{props.Text} </Text>
        
        
       
         
         


        </View>
    );
};

const styles = StyleSheet.create({
  
  logoImage:
  {   flex:0.3,
      width: width*0.40,
      height:height*0.06,
      resizeMode : 'contain',
     
  }
});

export default HorizontalView;