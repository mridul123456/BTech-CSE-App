import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import React from 'react';
import Sems from '../../api/Sems';
import * as OpenAnything from "react-native-openanything"; 



const SemDetails = ({navigation,route}) => {

  const id = route.params.semId;
  console.log(id);

  const selectedSem = Sems.find((element)=>{
     return id === element.id;
  });

   return( 
    <ScrollView style={styles.mainContainer}>
      <View style={styles.semContainer}>
       <View>
        <Image style={styles.cardImage}
        source = {selectedSem.image}
        resizeMode="cover"
        />
       </View>

       <Text style={styles.mainHeader}>
        {selectedSem.title}
       </Text>

       
       <Text style={styles.subjectDescription}>
        {selectedSem.subtit}
       </Text>

       <Text style={styles.description}>
        {selectedSem.subject1}
       </Text>
      
       <Text style={styles.description}>
        {selectedSem.subject2}
       </Text>
       <Text style={styles.description}>
        {selectedSem.subject3}
       </Text> 
       <Text style={styles.description}>
        {selectedSem.subject4}
       </Text>
       <Text style={styles.description}>
        {selectedSem.subject5}
       </Text>
      
       <View style={styles.buttonContainer}>
          <TouchableOpacity 
          style={styles.buttonStyle}
             onPress = {() => OpenAnything.Pdf("http://btechcsegehu.in/wp-content/uploads/2020/12/syllabus-CSE_-14.pdf")
            }
             >
            <Text style={styles.buttonText}>
              Syllabus
            </Text>
          </TouchableOpacity>

       </View>

      <View style={styles.buttonContainer}> 
       <TouchableOpacity 
          style={styles.buttonStyle}
             onPress = {() => navigation.navigate("Home")
            }
             >
            <Text style={styles.buttonText}>
               Home
            </Text>
          </TouchableOpacity>
       </View>

      
      </View>
    </ScrollView>
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
  
    },
    
    semContainer:{
      padding:30,
      backGroundColor:"rgba(255,255,255,0.90)",
      textAlign:"center",
      borderRadius:5,
      shadowColor:"grey",
      shadowOffset:{width:0,height:0},
      shadowOpacity:0.5,
      showdowRadius:8,
      elevation:8,
      marginVertical:30,
    },
     
    mainHeader:{
      paddingTop:10,
      fontSize:22,
      color:"#344055",
      textTransform:"uppercase",
      paddingBottom:15,
      textAlign:"center",
      fontFamily:"JosefinSans_400Regular",
    },
  
    description:{
      textAlign:"left",
      fontFamily:"Nunito_600SemiBold_Italic",
      paddingBottom:0,
      lineHeight:20,
      fontSize:16,
      color:"#7d7d7d",
    },
  
    buttonContainer:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      marginTop:10,
    },
  
    buttonStyle:{
      backgroundColor: "#809fff",
      borderRadius:5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  
  
    buttonText:{
      fontSize:20,
      color:"#efefef",
      fontFamily:"Nunito_700Bold",
      textTransform:"capitalize",
    }, 

    subjectDescription:{
      fontSize:20,
      fontFamily:"Nunito_700Bold",
      textAlign:"center",
    },
  
  });
  

export default SemDetails;