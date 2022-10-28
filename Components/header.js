import { View ,Text, Button,StyleSheet} from "react-native";
import {auth} from "../firebase";
import {MaterialIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function Header() {
    const navigation = useNavigation();
const handleLogout=()=>{
   auth.signOut()
   .then(()=>{
    navigation.replace("Login")
   })
   .catch(error=>alert(error.message))
}
  const openMenu=()=>{
    alert("clicked");
    // navigation.openDrawer();
  }


    return (
   <View style={styles.header}>     

   <MaterialIcons name="menu" onPress={openMenu} style={styles.icons} size={28}/>
   <View >
    <Text style={styles.headerText}>Rido</Text>
  
   </View>
   <MaterialIcons name="logout" onPress={handleLogout} style={styles.logout} size={28}/>
   {/* <Button title="Log out" onPress={handleLogout} style={styles.logout}></Button> */}
   </View>
    )};

const styles=StyleSheet.create(

{
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
          
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1,
    }
    ,
    icons:{
        position:'absolute',
        left:16,
    }
    ,
    logout:{
        position:'absolute',
        right:16,
    }
}


);
