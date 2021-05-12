/**
 * @format
 */
 import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//import helloo from '../Screens/helloo';
import Chat from './Src/Screens/Chat';
import LoginScreen from './Src/Screens/LoginScreen';
import OtpScreen from './Src/Screens/OtpScreen';
import ChatContact from './Src/Screens/ChatContact';

AppRegistry.registerComponent(appName, () => App);
