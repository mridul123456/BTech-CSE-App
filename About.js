import { Linking, ScrollView, TouchableOpacity, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <ScrollView>
      <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>
        GRAPHIC ERA HILL UNIVERSITY
      </Text>
      <Text style={styles.paraStyle}>Best University in Uttarakhand</Text>
      
      <View>
        <Image
         style={styles.imgStyle}
         source={{
          uri:"https://www.namastedehradun.com/wp-content/uploads/2016/06/Graphic_Era_Hill_University_Logo-300x300.png"
         }}
        />
      </View>

      <View style = {styles.aboutLayout}>
       <Text style={styles.aboutSubHeader}>About Us</Text>
       <Text style={[styles.paraStyle,styles.aboutPara]}>Graphic Era Hill University offers comprehensive curriculum over a large number of degree programs in engineering, law, management, computer applications, humanities, applied sciences, animation, fashion designing, journalism and mass communication, Agriculture. These programs offer the students multiple academic pathways. The University has an abiding commitment to create excellent education opportunities for the youth hailing from the hills, at affordable cost. Therefore 25% concession in the fee is offered to the students of hill areas, across the country. University also offers unstinting support for community services, through its social responsibility endeavor</Text>
      </View>
   

     <Text style = {styles.mainHeader}>Follow Us On Social Media</Text>
      
      <View style={styles.menuContainer}>
        <TouchableOpacity
         style={styles.buttonStyle}
        onPress={()=>Linking.openURL("https://www.youtube.com/c/GraphicEraOfficial")}
        >
         <Image
          style={styles.iconStyle}
          source={{
            uri:"https://1.bp.blogspot.com/-zaoiLHspoKI/XeI_0uFAeCI/AAAAAAAAF38/CyHgdY8bdOQ7d979yOJ0voSIA8b5bAF2wCLcBGAsYHQ/s1600/Youtube-Icon-2000x2000.png",
          }}
         />
        </TouchableOpacity>
      
        <TouchableOpacity
         style={styles.buttonStyle}
        onPress={()=>Linking.openURL("https://www.linkedin.com/school/graphicerahilluniversity/")}
        >
         <Image
          style={styles.iconStyle}
          source={{
            uri:"https://pngimg.com/uploads/linkedIn/linkedIn_PNG24.png",
          }}
         />
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.buttonStyle}
        onPress={()=>Linking.openURL("https://instagram.com/geuofficial?igshid=YmMyMTA2M2Y=")}
        >
         <Image
          style={styles.iconStyle}
          source={{
            uri:"https://www.pngfind.com/pngs/m/243-2436165_download-instagram-logo-png-format-click-here-to.png",
          }}
         />
        </TouchableOpacity>
      
      
      
      
      </View>
      </View>
    </ScrollView>

  );
};


const styles = StyleSheet.create({
  aboutContainer:{
    display:"flex",
    alignItems:"center",
  },
  imgStyle:{
    width:150,
    height:150,
    borderRadius:100,
  },
  mainHeader:{
    fontSize:18, 
    color:"#000",
    textTransform:"uppercase",
    fontWeight:"500",
    marginTop:20,
    marginBottom:10,
    fontFamily:"Nunito_700Bold",
    
  },

  paraStyle:{
    fontSize:18,
    color:"#985612",
    paddingBottom:30,
    justifyContent:"center",

  },
  aboutLayout:{
    backgroundColor:"#4c5dab",
    paddingHorizontal:30,
    marginVertical:30, 
  },
  aboutSubHeader:{
    fontSize:18,
    color:"white",
    textTransform:"uppercase",
    fontWeight:"500",
    marginVertical:15,
    fontFamily:"Nunito_700Bold",
    alignSelf:"center",
  },
  aboutPara:{
     color:"#fff",

  },
  menuContainer:{
    width :"100%",
    flexDirection:"row",
    justifyContent:"space-evenly",
    paddingBottom:20,
  },
  iconStyle:{
    width:"100%",
    height:50,
    aspectRatio:1,
  }
});

export default About;