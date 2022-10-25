import { View ,Text, Button} from "react-native";
import {auth} from "../firebase";
export default function Login({navigation}) {
const handleLogout=()=>{
   auth.signOut()
   .then(()=>{
    navigation.replace("Login")
   })
   .catch(error=>alert(error.message))
}
    return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Hello</Text>
    <Button title="Log out" onPress={handleLogout}></Button>
</View>
    )};
