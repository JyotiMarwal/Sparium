import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import database from '@react-native-firebase/database';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { AsyncStorage } from 'react-native';
const reference = database().ref('/users/chat');


 

// const getAccountInfo = () => {
//   return async dispatch => {
//     const cu = auth().currentUser;
//     const user = await firestore().collection('/users/chat').doc(cu.uid).get();
//     dispatch({
//       type: Types.INFO_FETCHED,
//       data: user.data()
//     });
//   };
// };



class Chat extends React.Component {
  state = {
    messages: [],
    username: '',
    text:'',
  }



//  StoreRealtimeDatabase = () => {
//     const newReference = database()
//       .ref('/users/chat')
//       .push();
//     console.log('Auto generated key: ', newReference.key);
//     newReference
//       .set({
//         messages:this.state.messages
//       })
//       .then(() => console.log('Data updated.'));
//     }

//   StoreRealtimeDatabase = () => {
//   database()
//   .ref('/users/chat')
//   .set({
//     messages:this.state.messages,
//     //email:this.props.route.params.email
    
//   })
//   .then(() => console.log('Data set.'));
//  }  

  StoreMessage = () => {
         const cu = auth().currentUser;
         const user_id = cu.uid;
        const newReference = database()
        .ref('/users/chat')
        .set({    
             messages:this.state.messages,
             //email:this.emailAddress,  
  })
  .then(() => console.log('Data set.'));
 };


 sendMsg = () => {
  //setText('');
  console.log( auth().currentUser.email)
  console.log("other user", auth().email)
  if (this.state.text != "") {
      const newRef = database()
          .ref('/users/chat')
          .push();
      newRef
          .set({
              senderUid: auth().currentUser.email,
              recieverUid: auth().email,
              msg: this.state.messages,
              createdAt: date,
          })
          .then(() => console.log('massege set to database.'));
  }
}




 ReadMessage=()=>{
  database()
  .ref('/users/chat')
  .on('value', snapshot => {
    console.log('User data: ', snapshot.val());
  });
 };


  UNSAFE_componentWillMount() {
    this.setState({
      messages: [
        {
        //   _id: 1,
        //   avatar: 'https://placeimg.com/140/140/any',
        //  // text: 'Hello developer',
        //  recieverUid:auth().email,
        //   createdAt: new Date(),
          
        //   user: {
        //     _id: 0,
        //     // name: 'Default',
        //     avatar: 'https://placeimg.com/140/140/any',
        //     sender:auth().currentUser.email,
            
        //   },

        user: {
              //_id: 0,
              // name: 'Default',
              //avatar: 'https://placeimg.com/140/140/any',
              sender:auth().currentUser.email,
              receiver:"jkkkkmarwal",
              messages:this.state.messages,
              
            },
        },
      ],
    })
  }

  get uid() {
    return (auth().currentUser || {}).uid;
    console.log(uid)
}

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages), 
  }))
   this.StoreMessage()
  //this.sendMsg()
  }

  render() {
    const { params } = this.props.route;  
  // const { emailAddress }= this.props.route.params.email;
  
    console.log({params})
    //console.log("for params",this.props.route.params.email)
    return (
      <GiftedChat
        messages={this.state.messages}
        //renderUsernameOnMessage={true}
        onSend={messages => this.onSend(messages)}
        // user={this.username}
        //sent='true'
        //received= 'true'
        user={{
          // _id: this.props.account?.user?.uid,
          // name: this.props.account?.data?.fullName,
          // avatar: this.props.account?.data?.avatar,
         // email:this.emailAddress
        }}
      />
    )
  }
}

export default Chat;


