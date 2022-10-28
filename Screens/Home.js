import { View ,ScrollView,StyleSheet, Pressable, Button} from "react-native";
import {auth} from "../firebase";
import {MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';
import { Text, Card, Icon } from '@rneui/themed';
import { db } from "../firebase";
import { useEffect,useState } from "react";
import { FlatList } from "react-native-gesture-handler";

function handleAccept(id){
  // db.collection('users').doc("PYwHr7HGN5R3AhUoD1k77mtGVyo1").collection('Rides').doc(id).update({status:'confirmed'});
  console.log("ids : "+id)
}
    

export default function Login({navigation}) {
    const [clients, setClients] = useState([]);
    const todoRef=db.collection('users').doc("PYwHr7HGN5R3AhUoD1k77mtGVyo1").collection('Rides');
    
  
    
    
    
    
    useEffect(()=>{
      
      
       
        todoRef 
        .onSnapshot(
            querySnapshot=>{
              const details=[]
                querySnapshot.forEach((doc)=>{
                    
                    const {name,pickuploc,triptype,pickuptime,mobile,status}=doc.data()
                    console.log("Status : "+status);
                    if(status=="pending")
                    {
                    details.push({
                        id:doc.id
                        ,pickuploc,
                        name,triptype,pickuptime,mobile,
                    })
                  }
                 

                })
                setClients(details);
               
            }
       )
    }
,[]);


    return (
        
   
    <>
    <ScrollView>
      <View style={styles.container}>
      {clients.map((data) => {
            return (
        <Card>
          
          
          <View>
              <View >
                  <View style={styles.left}>
                    <MaterialCommunityIcons name="google-maps" style={styles.icons} size={28}></MaterialCommunityIcons>
                    <Text >{data.pickuploc}</Text>
                  </View>
                  <View style={styles.right}>
                    <MaterialCommunityIcons name="clock-time-ten" style={styles.icons} size={28}></MaterialCommunityIcons>
                    <Text >{data.pickuptime}</Text>
                  </View>
                 
              </View>
              <View style={styles.seperator}>
              <View style={styles.left}>
                <MaterialIcons name="person" style={styles.icons} size={28}></MaterialIcons>
                  <Text >{data.name}</Text>
                  </View>
                  <View style={styles.right}>
                    <Pressable style={styles.btn} onPress={()=>{db.collection('users').doc("PYwHr7HGN5R3AhUoD1k77mtGVyo1").collection('Rides').doc(data.id).update({status:'confirmed'})}}>
                    <Text style={styles.text}>Accept</Text>
                    </Pressable>
                  </View>
                  </View>
              </View> 
              
              {/* <Card.Divider /> */}
        </Card>  
          
       
        );
        })} 
      </View>
    </ScrollView>
  </>
    )};

    const styles = StyleSheet.create({
      btn: {
        
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 4,
        elevation: 3,
        backgroundColor:'black',
      
       
      },
      text:{
        color: 'white',
      },
        container: {
            flex: 1,
          },
          fonts: {
            marginBottom: 8,
          },
          user: {
            flexDirection: 'row',
            alignItems:'center',
          
          },
          image: {
            width: 30,
            height: 30,
            marginRight: 10,
          },
          name: {
            fontSize: 16,
            marginTop: 5,
          },
          right:{
            position:'absolute',
            right:16, flexDirection: 'row',
            alignItems:'center',
          }, left:{
           
             flexDirection: 'row',
            alignItems:'center',
          },seperator:{
            marginTop:10,
          },
        
    });


