import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OtpScreen from './Src/Screens/OtpScreen'
import HomeScreen from './Src/Screens/HomeScreen'
import asynScreen from './Src/Screens/asynScreen'
import Chat from './Src/Screens/Chat'
import LoginScreen from './Src/Screens/LoginScreen'
import ChatContact from './Src/Screens/ChatContact'

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            title: 'HomeScreen', 
             headerShown: false  }}
        />
        
         <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{ title: 'Otp',  headerShown: false }}
        />

        <Stack.Screen
          name="asynScreen"
          component={asynScreen}
          options={{ title: 'asyn',  headerShown: false }}
        />
        
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ title: '',  
          //headerShown: false
         }}
        />
          <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Login',  headerShown: false }}
        />
         <Stack.Screen
          name="ChatContact"
          component={ChatContact}
          options={{ title: 'ChatContact'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;