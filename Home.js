import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import Menu from '../../component/Menu';


const Home = (props) => {
  const description = "The Graphic Era Educational Society, established in 1993, is a non-profit organization that aims to mobilize world class education.Founded in 2011 Graphic Era Hill University is today widely known for its innovative and rigorous education which has nurtured professionals across industries and sectors in India and beyond.Its faculty is the bedrock of the University and composed of academic luminaries across India and abroad."

  return (
    <ScrollView>
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>

      <Text style={styles.mainHeader}>Graphic Era Hill University</Text>

        <Image style={styles.headerImage}
        resizeMode="cover"
        source={require("../.././assets/gehu.jpeg")}/> 
        
        <Text style={[styles.mainHeader,{
          fontSize : 20,
          color : "#465481",
          marginTop : 10, 
          marginBottom:10,
        },
        ]}>Welcomes You To BTECH CSE DEPARTMENT</Text>
  
        <Text style={styles.paraStyle}>{description}</Text>

      </View>

       <View style={styles.menuStyle}>
      
        <Menu/>
        
      </View>
    </View>
    </ScrollView>
  ); 
}

const styles = StyleSheet.create({
  mainContainer: {
      height : "100%",
      dispplay : "flex", 
      justifyContent: "space-between",
      paddingHorizontal: 20,
      backgroundColor : "#fff", 
      textAlign : "center",
      // backgroundColor:"#E6E6E3",
  },

  homeTop:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:10,
    
  },
  
  headerImage:{
    height:undefined,
    width:"100%",
    aspectRatio:1,
    display:"flex",
    alignItems:"stretch",
    marginTop:20,
    marginBottom:20,
    borderRadius:20,
  },

  mainHeader:{
    marginTop:50,
    fontSize:25,
    color:"black",
    textTransform:"uppercase",
    textAlign:"center",
  },

  paraStyle:{
    textAlign:"left",
    fontSize:15,
    color:"#7d7d7d",
    marginTop:0,
    paddingBottom:10,
  },

  lineStyle:{
    marginBottom:2,
    borderWidth:0.5,
    borderColor:"grey",
  },

}); 


export default Home;