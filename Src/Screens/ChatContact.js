import React from "react";
import {highlighted,separators, highlight,unhighlight, TouchableHighlight, View, FlatList,Modal, ScrollView,Pressable, Image,Text, StyleSheet ,TextInput,TouchableOpacity} from "react-native";
import { Dimensions } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome'

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;



  const data = [
    {
      imageUrl: require("../Assets/1.jpeg"),
      id:"1",
      name:"Radhe",
      email:"radhe@gmail.com",
      password:"123456789",
    },
    {
      imageUrl: require("../Assets/2.jpeg"),
      id:"2",
      name:"Cherry",
      email:"cherry@gmail.com",
      password:"22446688",
    },
    {
      imageUrl:require("../Assets/3.jpeg"),
      id:"3",
      name:"Ishita",
      email:"ishita@gmail.com",
      password:"12121212",
    }, 
    {
      imageUrl: require("../Assets/4.jpeg"),
      id:"4",
      name:"Akshita",
      email:"akshita@gmail.com",
      password:"44445555",
    },
    {
      imageUrl: require("../Assets/5.jpeg"),
      id:"5",
      name:"Joy",
      email:"joy@gmail.com",
      password:"88668866",
    },
   
 ];


export default class ChatContact extends React.Component {
constructor(props) {
        super (props)
        this.state = {
            data:data,
            selectedItem:null,  
        }
    }

    FlatListItemSeparator = () => {
      return (
        <View
          style={{
            height: 0.7,
            width: "100%",
            
            backgroundColor:"#A9A9A9",
             highlighted 
          }}
        />
      );
    }
    
     onPressHandler(id) {
        this.setState({selectedItem: id});
      }

     
  onSearchData=(text)=>{
    if(text)
    {
      const { data } = this.state
       const newData= data.filter(item=>{  
      return (item.name).toLowerCase().includes(text.toLowerCase());     
    })
    this.setState({
         data:newData,         
    });
    }
    else
    {
       this.setState({
            data:data,
            text:text
          })
    }
    
  }

 setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  render() {
    const { navigate } = this.props.navigation; 

//console.log("hello",this.state.selectedItem)
// console.log("hiiiii", item.item.text)
    return (
      //<ScrollView>
      <View style={{backgroundColor:'white', width:390, height:844}}>
      <View style={styles.arrowView}>
      <Image
          style={styles.backLogo}
          source={require('../Assets/back.png')}
        />  
      </View>     
      <FlatList
          ListHeaderComponent={<TextInput  
                style={styles.searchInputStyle}
                autoCapitalize="none"
                autoCorrect ={false}
                clearButtonMode="always"
                placeholder={"Search Data"}   
               
                //value={this.state.text}
                onChangeText={tex=>this.onSearchData(tex)}
                 />
                 
                }   
                 ItemSeparatorComponent = {this.FlatListItemSeparator}    
                 data={this.state.data }
                 renderItem={item => (
                  <TouchableHighlight
                                 key={item.key}
                                 onPress={(navigation) =>this.props.navigation.navigate('Chat')}
                                //  onShowUnderlay={separators.highlight}
                                //  onHideUnderlay={separators.unhighlight}
                               >
              <View style={styles.container}>
              <Image style = {styles.verticalListImage} source={item.item.imageUrl}/> 
             <View style={{alignSelf:'center', paddingHorizontal:10}}> 
              <Text style={styles.nameStyle}>{item.item.name}</Text>
              <Text style={styles.emailStyle}>{item.item.email}</Text>
              </View>
              
            </View>
            </TouchableHighlight>
          )}
        keyExtractor={item=>item.id}
        />
      </View>
     // </ScrollView>

    );
  }
}
 const styles = StyleSheet.create({
  

container:
{
  height: height*0.13,
   width: 390,
   backgroundColor:"white",
   //margin: 1,
   //marginTop:height*0.005,
  //  shadowColor :'black',
  // shadowOpacity :0.3,
 // flex:1,
  resizeMode:'contain',
  flexDirection:'row',
},
arrowView:
{
  paddingHorizontal:width*0.02,
  flexDirection:'row',
  marginTop:5,
  alignSelf:'flex-start',
 
},
backLogo:
{

  width:width*0.07,
  height:height*0.03,
  //marginTop:height*0.08,
  resizeMode:'contain',
},

nameStyle:
{
   position:"relative", 
   fontWeight:"bold",
   fontSize:16, 
},
emailStyle:
{
   position:"relative", 
   fontSize:16,
},

searchInputStyle:
{
  marginHorizontal:10,
  borderWidth:1,
  borderRadius:5,
  borderColor:'grey',
  height:35,
  fontSize:15,
  marginVertical:10, 
},

verticalListImage:
{ 
  height:'50%', 
  width:'12%',
  borderRadius:50,
  marginHorizontal:10,
  alignSelf:'center',
},
  
  });








// const DATA = [{
//   id: '1',
//   title: 'First Item',
// },{
//   id: '2',
//   title: 'Second Item',
// },{
//   id: '3',
//   title: 'Third Item',
// },{
//   id: '4',
//   title: 'Fourth Item',
// },{
//   id: '5',
//   title: 'Fifth Item',
// },{
//   id: '6',
//   title: 'Sixth Item',
// }];

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//        <FlatList
//           ItemSeparatorComponent={({highlighted}) => (
//             <View style={[styles.item, highlighted && {marginLeft: 0}]}/>
//           )}
//           data={DATA}
//           renderItem={({item, index, separators}) => (
//             <TouchableHighlight
//                key={item.key}
//                onPress={() =>this._onPress(item)}
//                onShowUnderlay={separators.highlight}
//                onHideUnderlay={separators.unhighlight}
//              >
//                <View style={{backgroundColor: 'white'}}>
//                  <Text>{item.title}</Text>
//                </View>
//              </TouchableHighlight>
//           )}
//           ListHeaderComponent={()=>(
//              <View style={{backgroundColor: 'white', alignSelf:'center'}}>
//                 <Text>Chat List</Text>
//              </View>
//           )}
//           // ListFooterComponent={()=>(
//           //   <View style={{backgroundColor: 'white', alignSelf:'center'}}>
//           //      <Text>End of Flat List</Text>
//           //   </View>
//           // )}
//        />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//      flex: 1,
//      marginTop: 12,
//   },
//   item: {
//      backgroundColor: 'lightgreen',
//      padding: 1,
//      marginVertical: 8
//   },
//   title: {
//      fontSize: 32,
//   },
// });