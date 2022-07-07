import { StyleSheet, Text, View,TouchableOpacity, ScrollView, FlatList, Linking } from 'react-native'
import React, { useEffect } from 'react'
import * as OpenAnything from "react-native-openanything";
import NoticeApi from '../../api/NoticeApi';

const Notice = () => { 
  
  const noticesCard = ({item}) =>{

    return (
      <ScrollView>
         <View style = {styles.mainContainer}>
          <View style={styles.noticeContainer}>
           
           <View>
              <Text style={styles.mainHeader}>
                {item.title}
              </Text>
            </View>

            <View>
              <Text style={styles.description}>
                 {item.description}
              </Text>
            </View>
            {/* <View>
              <Text style={styles.description}>
                 var pdflink = {item.link}
              </Text>
            </View> */}


         <View style={styles.buttonContainer}>
          
          <TouchableOpacity 
          style={styles.buttonStyle}
             onPress = {() => OpenAnything.Pdf(`${item.link}`)
            }
             >
            <Text style={styles.buttonText}>
              Click Me
            </Text>
          </TouchableOpacity>

          {/* <Text onPress={()=> Linking.openURL(`${item.link}`)}>
              Click Me
          </Text> */}

       </View>


          </View>
         </View>
         </ScrollView>
      );
  };

  return(
    <FlatList
      keyExtractor={(item)=>item.id}
      data={NoticeApi}
      renderItem={noticesCard}

      />
  );
 
};


const styles = StyleSheet.create({
  cardImage:{
    width:"100%",
    height:undefined,
    aspectRatio:1,

  },

  mainContainer:{
    paddingHorizontal:20,
    // color:"black",
    // backgroundColor:"green",

  },
  
  noticeContainer:{
    padding:30,
    backgroundColor:"black",
    textAlign:"center",
    borderRadius:25,
    shadowColor:"blue",
    shadowOffset:{width:0,height:0},
    shadowOpacity:0.5,
    showdowRadius:5,
    elevation:8,
    marginVertical:30,
  },
   
  mainHeader:{
    paddingTop:10,
    fontSize:22,
    color:"white",
    textTransform:"uppercase",
    paddingBottom:15,
    textAlign:"center",
    fontFamily:"JosefinSans_400Regular",
  },

  description:{
    textAlign:"left",
    fontFamily:"JosefinSans_500Medium",
    fontWeight:"bold",
    paddingBottom:0,
    lineHeight:20,
    fontSize:16,
    color:"#7d7d7d",
    paddingBottom:10,
  },

  buttonContainer:{
    paddingTop:5,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
  },

  buttonStyle:{
    backgroundColor: "green",
    borderRadius:5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },


  buttonText:{
    fontSize:15,
    color:"#efefef",
    fontFamily:"Nunito_700Bold",
    textTransform:"capitalize",
  }, 

});

export default Notice;