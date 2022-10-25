
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import {auth} from "../firebase";
export default function Login({navigation}) 
{






const[user,setUser]=useState('');
  const loginPressHandler=()=>{

    auth.signInWithEmailAndPassword(email,password)
    .then(userCredentials=>{
      setUser(userCredentials.user.email);
      console.log("Logged in With : ",user);
      navigation.replace('Home');
    
    })
    .catch(error=>alert(error.message))
     
  }
  const [email,setEmail]=useState("");
  
  const [password,setPassword]=useState("");


useEffect(()=>{
  auth.onAuthStateChanged(user=>{
    if(user)
    {
      navigation.replace('Home');
    }
  })

},[])
if(!user.length===0)
{
  navigation.replace('Home');
}
else
{
  return (
    <View style={styles.container}>
      <Image source={require('../assets/loginLogo.png')} style={styles.logo}/>
      <Text style={styles.logoText}>Rido</Text>
      <TextInput
        placeholder={"Enter the Username"}
        style={{ height: 42, width: "80%", borderBottomWidth: 1 ,  marginBottom:5,}}
        value={email}
        onChangeText={val=>setEmail(val)}
      />

      <TextInput
        placeholder={"Enter the password"}
        style={{ height: 42, width: "80%", borderBottomWidth: 1  , marginBottom:5,}}
        value={password}
        onChangeText={val=>setPassword(val)}
      />
      <TouchableOpacity
        style={{
          borderWidth: 1,
          height: 40,
          width: "70 %",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          backgroundColor: "black",
          marginTop: "10%",
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "white" }} onPress={loginPressHandler} >Login</Text>
      </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  
  },
  logo:{
    height:"25%",
    width:"70%",
  }
  ,
  logoText:{
  fontSize:32,
  fontWeight:"500",
  marginBottom:5,
  }

});

