import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Sems from '../../api/Sems';

const Sem = ({navigation}) => {

  const SemsCard = ({item}) => {
    return( 
    <View style={styles.mainContainer}>
      <View style={styles.semContainer}>
       <View>
        <Image style={styles.cardImage}
        source = {item.image}
        resizeMode="cover"
        />
       </View>

       <Text style={styles.mainHeader}>
        {item.title}
       </Text>

       
       <Text style={styles.description}>
        {item.description}
       </Text>
      
       <View style={styles.buttonContainer}>
          <TouchableOpacity 
          style={styles.buttonStyle}
             onPress = {() => navigation.navigate("SemDetails",{
                 semId:item.id,
             })
            }
             >
            <Text style={styles.buttonText}>
              Semester Details
            </Text>
          </TouchableOpacity>
       </View>

      </View>
    </View>
    );
  };

  return (
   <FlatList 
   keyExtractor={(item)=>item.id}
    data={Sems}
    renderItem={SemsCard}
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
    paddingBottom:10,
  },

  buttonContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
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

});

export default Sem;
