import React from "react";
import { View, FlatList,Modal, ScrollView,Pressable, Image,Text, StyleSheet ,TextInput,TouchableOpacity} from "react-native";
import { Dimensions } from 'react-native';



const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;


const firstlist = [
    {
      imageUrl: require("../Assets/inActiveEntertainment.png"),
      id:"1",
      text:'entertainment',
    },
    {
      imageUrl: require("../Assets/inActiveMedical.png"),
      id:"2",
      text:'Medical',
    },
    {
      imageUrl:require("../Assets/inActiveTech.png"),
      id:"3",
      text:'Technology',
    }, 
 ];

  const data = [
    {
      imageUrl: require("../Assets/workout.jpg"),
      id:"1",
      name:"Meditation"
    },
    {
      imageUrl: require("../Assets/workout5.jpg"),
      id:"2",
      name:"Dumbling"
    },
    {
      imageUrl:require("../Assets/women.jpg"),
      id:"3",
      name:"Physical fitness"
    }, 
 ];


export default class FlatExample extends React.Component {
constructor(props) {
        super (props)
        this.state = {
            data:data,
            var:firstlist,
            selectedItem:null,  
            modalVisible: false,
        }
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
const { modalVisible } = this.state;
//console.log("hello",this.state.selectedItem)
// console.log("hiiiii", item.item.text)
    return (
      <ScrollView>
      <View style={styles.main}>
      <View style={styles.arrowView}>
      <Image
          style={styles.backLogo}
          source={require('../Assets/back.png')}
        />
      <Text style={styles.storeStyle} >Stores</Text>
      <Image
          style={styles.location}
          source={require('../Assets/location.png')}
        />
      </View>

        <FlatList
         extraData={this.state.selectedItem} 
         showsHorizontalScrollIndicator={false}
         data={this.state.var}
          horizontal
          renderItem={item => ( 
         //console.log(item.item.text,"@@@@"),
            <TouchableOpacity
                            onPress={() => this.onPressHandler(item.item.id)}>
                            <View>
            <View 
              style={[styles.firstlistView, {backgroundColor:this.state.selectedItem == item.item.id ?"#19d191":"white"}] }>
              <Image style = {styles.imageStyle} source={item.item.imageUrl}/>
              <Text style={styles.firstListText}> {item.item.text}</Text>
            </View>
            </View>
            </TouchableOpacity>
          )}
        keyExtractor={item=>item.id} 
        />
    
 <FlatList
          ListHeaderComponent={<TextInput  
                style={styles.searchInputStyle}
                autoCapitalize="none"
                autoCorrect ={false}
                clearButtonMode="always"
                placeholder={"Search Data"} 
                //value={this.state.text}
                onChangeText={tex=>this.onSearchData(tex)}
                 />}       
                 data={this.state.data }
                 renderItem={item => (
              <View style={styles.container}>
              <Image style = {styles.verticalListImage} source={item.item.imageUrl}/>
                       <View style={styles.ratingView}>
                      <Image style = {styles.ratingStar} source={require('../Assets/whiteStar.png')}/>
                  
                       <Text style={styles.ratingText}>4.5</Text>
                       </View>
                       <Text style={styles.nameStyle}>{item.item.name}</Text>
              <View style={styles.textstyle}>
              <Text style={styles.text1}>Gold's Gym </Text>
              <Text style={styles.text2}>3.7km</Text>
              </View>
              <View style={styles.textstyle}>
              <Text style={styles.text3}>Fitness & Training </Text>
              <Text  style={styles.text4}>3 OFFERS</Text>
              </View>

            </View>
          )}
        keyExtractor={item=>item.id}
        />


    <TouchableOpacity
         onPress={() => this.setModalVisible(true)}
          style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Proceed
          </Text>
    </TouchableOpacity>

<View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          presentationStyle={'formSheet'}
        //  supportedOrientations={'portrait-upside-down'}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Credit/Debit Card Details</Text>
              {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable> */}
              <View style={styles.DetailView}> 
              <Text style={styles.xtext}>xxxx-xxxx-xxxx-xxxx</Text>
              <Image
                 style={styles.visaImage}
                source={require("../Assets/visa.png")}
                />
              </View>
              <View style={styles.DetailView2}> 
              <Text style={styles.monthtext}>MM-YY</Text>
              <View style={styles.DetailView3}> 
              <Text style={styles.ccvtext}>CCV</Text>
              </View>
              </View>
              <Image
                 style={styles.stripeImage}
                source={require("../Assets/imagesss.jpg")}
                />

            </View>
          </View>
        </Modal>
        
      </View>








      </View>
      </ScrollView>

    );
  }
}
 const styles = StyleSheet.create({
   main:
   {
     backgroundColor:"#eeeeee",
     borderRadius:10,

   },
container:
{
  height: height*0.26,
   width: width*0.94,
   backgroundColor:"white",
   margin: 10,
   marginTop:height*0.01,
   shadowColor :'black',
  shadowOpacity :0.3,
  flex:1,
  resizeMode:'contain',
  borderRadius:5,
  // paddingLeft:1,
  paddingHorizontal:1,
  //paddingVertical:1,

},
arrowView:
{
  paddingHorizontal:width*0.02,
  flexDirection:'row',
},
backLogo:
{

  width:width*0.07,
  height:height*0.03,
  marginTop:height*0.08,
  resizeMode:'contain',
},
storeStyle:
{
  marginTop:height*0.07 ,
  paddingLeft:width*0.03,
  fontSize:35,
  color:'#4f4f4f'
},
location:
{
  width:width*0.08,
  height:height*0.04,
  marginTop:height*0.07,
  resizeMode:'contain',
  marginLeft:width*0.48,

},
imageStyle:
{
  height:'30%', 
  width:'50%', 
  resizeMode:"contain",
  //flexDirection:'column',
  marginTop :height*0.02,
  marginHorizontal:width*0.06,
},

ratingView:
{
  backgroundColor:'#54940a',
   width:43, 
   height:17,
    position:'absolute', 
    marginTop:10, 
    marginLeft:310,
    borderRadius:3,
    flexDirection:'row',
    justifyContent:'center',
    
},
ratingStar:
{
  width:8,
  height:3,
  resizeMode:'contain',
  paddingTop:17,

},
ratingText:
{
  color:'white',
  fontSize:14,
  paddingLeft:3,
},
nameStyle:
{
  backgroundColor:"yellow",
   position:"relative", 
   fontWeight:"bold",
   color:'red',
   fontSize:16,
   paddingHorizontal:10,
},

searchInputStyle:
{
  marginHorizontal:10,
  borderWidth:1,
  borderRadius:5,
  borderColor:'grey',
  height:35,
  fontSize:15,
},
firstlistView:
{
  height: height*0.10,
  width: width*0.35,
  backgroundColor:"white",
   margin: 18, 
   marginTop:height*0.02,
   alignItems:'center',
   borderRadius:5,
   marginHorizontal:width*0.01,
   marginLeft:10,
},
verticalListImage:
{ 
  height:'70%', 
  width:'100%',
  //borderTopRightRadius:10,
  //borderTopLeftRadius:10,
},

firstListText:
{
 marginHorizontal:width*0.05,
},

  text1:
  {
   marginLeft:width*0.10,

  },
  textstyle:
  { 
    marginHorizontal :width*0.02,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:height*0.005,
  },
  text1:
  {
    color:"black",
    fontWeight:'bold',
    
  },
  text2:
  {
    color:"#9b9b9b",
    fontWeight:'bold',
    
  },
  text3:
  {
    color:"#555555",
    fontWeight:'bold',
    
  },
  text4:
  {
    color:"#56980a",
    fontWeight:'bold',
    
  },
   buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: '#19d191',
    padding: 5,
   // marginTop: 32,
   width:width*1,
   height:60,
   alignItems:'center',
    
    
  },
  buttonTextStyle: {
    padding: 15,
    color: 'white',
    textAlign: 'center',
    fontSize:19,
  },
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 10
  },
  modalView: {
   // margin: 20,
    backgroundColor: "white",
    // borderRadius: 10,
    marginTop:420,
   
   // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:355,
    height:270,
   marginLeft:18,
   
  
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    //marginBottom: 15,
    fontSize:20,
    paddingLeft:25,
    paddingTop:25,
  },
  DetailView:
  {
    width:310,
    height:50,
    backgroundColor:"#eeeeee",
    position:"relative",
    borderColor:"grey",
    borderWidth:1,
    marginLeft:25,
    marginTop:15,
    borderRadius:3,
    flexDirection:'row',
  },
   DetailView2:
  {
    width:310,
    height:50,
    backgroundColor:"#eeeeee",
    position:"relative",
    borderColor:"grey",
    borderWidth:1,
    marginLeft:25,
    // marginTop:15,
    borderRadius:3,
    flexDirection:"row",
  },
    DetailView3:
  {
    width:160,
    height:50,
    backgroundColor:"#eeeeee",
    position:"relative",
    borderColor:"grey",
    borderWidth:1,
    marginLeft:90,
    // marginTop:15,
    borderRadius:3,
  },
  xtext:
  {
    paddingTop:10,
    paddingLeft:10,
  },
  monthtext:
  {
    paddingTop:12,
    paddingLeft:10,
  },
  ccvtext:
  {
    paddingTop:12,
    paddingLeft:10,
  },
  visaImage:
  {
    width:40,
    height:25,
    marginTop:10,
    marginLeft:110,
  },
  stripeImage:
  {
    width:150,
    height:80,
    opacity:50,
    marginLeft:100,
    marginTop:10,
  },
  });

