import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAvoidingView, TextInput } from 'react-native-web'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            value={password}
            onChangeText={(text)=>setPassword(text)}
            placeholder='Password' style={{color:"gray", padding: 5,fontSize:17, margin: 5, width: 250, }} />
          </View>
          <View style={{flexDirection:"row",alignItems:'center',justifyContent:'space-between',marginTop:12}}>
            <Text style={{color:"white"}}>Keep me logged in</Text>
            <Text style={{color:"red",fontWeight:500}}>Forgot password ?</Text>
          </View>
          <View style={{marginTop:60}}>
            <Pressable style={{backgroundColor:"white",padding:10,alignItems:"center",justifyContent:"center",borderRadius:5}}>
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

