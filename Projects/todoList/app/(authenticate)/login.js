import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAvoidingView, TextInput } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    const checkLoginStatus=async()=>{
      try {
        token=await AsyncStorage.getItem("authToken");
      if(token){
        router.replace("/(tabs)/home")
      }
      } catch (error) {
        console.log(error)
      }
    }
    checkLoginStatus();
  },[])
  const handleLogin=()=>{
    try {
      const user={
        email:email,
        password:password,
      }

      axios.post("http://192.168.1.5:5000/api/login",user).then((response)=>{
        const token=response.data.token;
        AsyncStorage.setItem("authToken",token)
        Alert.alert("Login Successful");
        router.replace("/(tabs)/home")
      }).catch((error)=>{
        console.log("something went wrong!!!",error)
        Alert.alert("Login Failed");
      })
    } catch (error) {
      console.log("something went wrong!",error)
    }
  }
  const router=useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black", alignItems: "center" }}>
      <View style={{ marginTop: 100 }}>
        <Text style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "white",
          fontFamily: 'Arial',
        }}>Login</Text>
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: "white", marginBottom: 10, marginTop: 10 }}>Log in to your account!</Text>
        </View>
        <View>
          <View style={{flexDirection: "row", alignItems: "center",backgroundColor:"#E0E0E0",marginTop:30,paddingVertical:5,borderRadius:5 }}>
            <MaterialIcons style={{color:"gray", margin: 10 }} name="email" size={28} color="black" />
            <TextInput 
            value={email}
            onChangeText={(text)=>setEmail(text)}
            placeholder='Email' style={{color:"gray", padding: 5,fontSize:17, margin: 5, width: 250, }} />
          </View>
          <View style={{flexDirection: "row", alignItems: "center",backgroundColor:"#E0E0E0",marginTop:30,paddingVertical:5,borderRadius:5 }}>
          <AntDesign style={{color:"gray", margin: 10 }} name="eye" size={28} color="black" />
            <TextInput 
            secureTextEntry={true}
            value={password}
            onChangeText={(text)=>setPassword(text)}
            placeholder='Password' style={{color:"gray", padding: 5,fontSize:17, margin: 5, width: 250, }} />
          </View>
          <View style={{flexDirection:"row",alignItems:'center',justifyContent:'space-between',marginTop:12}}>
            <Text style={{color:"white"}}>Keep me logged in</Text>
            <Text style={{color:"red",fontWeight:500}}>Forgot password ?</Text>
          </View>
          <View style={{marginTop:60}}>
            <Pressable onPress={handleLogin} style={{backgroundColor:"white",padding:10,alignItems:"center",justifyContent:"center",borderRadius:5}}>
              <Text style={{color:"black",textAlign:'center',fontWeight:'bold',fontSize:16,fontFamily:'arial'}}>Login</Text>
            </Pressable>
            <Pressable onPress={()=>router.replace('/register')} style={{marginTop:16}}>
              <Text style={{color:"gray",textAlign:'center',fontSize:15,fontFamily:'arial'}}>Dont have an account? Sign up</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default login

