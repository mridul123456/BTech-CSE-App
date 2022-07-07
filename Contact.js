import { StyleSheet, Text, View,TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CheckBox from "expo-checkbox";

const Contact = ({navigation}) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const submit =()=>{
      if(!name && !email && !phone && !message){
         Alert.alert("Please fill all the fields");
      }else{
        Alert.alert(`Thank you ${name}`);
        navigation.navigate("Home");
      }
  };
  return (
    <ScrollView>
   <View style={styles.mainContainer}>
    <Text style={styles.mainHeader}>
      Have Some Doubt?
    </Text>
    <Text style={styles.description}>
      Feel Free to contact Us By Submitting the form and we will reach you.
    </Text>
     
     <View style={styles.inputContainer}>
       <Text style={styles.labels}>Enter Your Name</Text>
       <TextInput
        style={styles.inputStyle}
        placeholder={"Mridul Semwal"}
        value={name}
        onChangeText={(studentName) => setName(studentName)}
       />
     </View>
    
     <View style={styles.inputContainer}>
       <Text style={styles.labels}>Enter Your Email</Text>
       <TextInput
        style={styles.inputStyle}
        placeholder={"mridul@gmail.com"}
        value={email}
        onChangeText={(studentEmail) => setEmail(studentEmail)}
       />
     </View>

     <View style={styles.inputContainer}>
       <Text style={styles.labels}>Enter Your Mobile Number</Text>
       <TextInput
        style={styles.inputStyle}
        placeholder={"9192939495"}
        value={phone}
        onChangeText={(studentPhone)=>setPhone(studentPhone)}
       />
     </View>

     <View style={styles.inputContainer}>
       <Text style={styles.labels}>What query do you have?</Text>
       <TextInput
        style={[styles.inputStyle,styles.multiLineStyle]}
        placeholder={"Tell us about your query"}
        value={message}
        onChangeText={(studentMessage)=>setMessage(studentMessage)}
        numberOfLines={5}
        multiline={true}
       />
     </View>
    
    <View style={styles.wrapper}>
       <CheckBox
        value={agree}
        onValueChange={()=>setAgree(!agree)}
        color={agree ? "#4630EF" : undefined}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed with Terms and Condtions
        </Text>
       
    </View>

     <TouchableOpacity
      style={[styles.buttonStyle,
        {
            backgroundColor:agree ? "blue" :"grey",
        },
    ]}
    disabled={!agree}
    onPress={submit}>
      <Text style={styles.buttonText}>Contact Us</Text>
     </TouchableOpacity>

   </View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    height:"100%",
    paddingHorizontal:30,
    backgroundColor:"#fff",
    // backgroundColor:"black",
  },
  mainHeader:{
    fontSize:20,
    color:"#456789",
    fontWeight:"bold",
    paddingTop:20,
    paddingBottom:20,
    textTransform:"capitalize",

  },

  description:{
    fontSize:20,
    color:"#7d7d7d",
    paddingBottom:20,
    lineHeight:20, 
  },

  inputContainer:{
    marginTop:20,
  },
  labels:{
    fontWeight:"bold",
    color:"#7d7d7d",
    paddingBottom:5,
    lineHeight:25,
  },
  inputStyle:{
    borderWidth:1,
    borderColor:"rgba(0,0,0,0.5)",
    paddingHorizontal:15,
    paddingVertical:6,
    borderRadius:5,

  },
  
  multiLineStyle:{
   paddingVertical:4,
  },

  buttonStyle:{
    borderRadius:5,
    paddingVertical:10,
    paddingHorizontal:18,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginVertical:30,
  },
  buttonText:{
    color:"white",
  },

  wrapper:{
    display:"flex",
    flexDirection:"row",
    marginTop:20,

  },

  wrapperText:{
    marginLeft:10,
    color:"#7d7d7d",

  },
  
});

export default Contact;
