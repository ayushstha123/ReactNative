import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAvoidingView, TextInput } from 'react-native-web'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import axios from 'axios';

const register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
//AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It is used in React Native to store data locally on the device. This can be particularly useful for persisting user preferences, settings, or any small amounts of data that you want to keep between app launches.
  const handleRegister=async()=>{
    const user={
      name:name,
      email:email,
      password:password,
    }
    axios.post("http://localhost:5000/api/register",user).then((response)=>{
      console.log(response);
      Alert.alert("Registration Successful");
      setEmail("");
      setPassword("");
      setName("");
    }).catch((error)=>{
      Alert("Registration Failed");
    })
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black", alignItems: "center" }}>
      <View style={{ marginTop: 100 }}>
        <Text style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "white",
          fontFamily: 'Arial',
        }}>Register</Text>
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: "white", marginBottom: 10, marginTop: 10 }}>Log in to your account!</Text>
        </View>
        <View>
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#E0E0E0", marginTop: 30, paddingVertical: 5, borderRadius: 5 }}>
            <AntDesign style={{ color: "gray", margin: 10 }} name="user" size={28} color="black" />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder='Username' style={{ color: "gray", padding: 5, fontSize: 17, margin: 5, width: 250, }} />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#E0E0E0", marginTop: 30, paddingVertical: 5, borderRadius: 5 }}>
            <MaterialIcons style={{ color: "gray", margin: 10 }} name="email" size={28} color="black" />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder='Email' style={{ color: "gray", padding: 5, fontSize: 17, margin: 5, width: 250, }} />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#E0E0E0", marginTop: 30, paddingVertical: 5, borderRadius: 5 }}>
            <AntDesign style={{ color: "gray", margin: 10 }} name="eye" size={28} color="black" />
            <TextInput
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder='Password' style={{ color: "gray", padding: 5, fontSize: 17, margin: 5, width: 250, }} />
          </View>
          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
            <Text style={{ color: "white" }}>Keep me logged in</Text>
            <Text style={{ color: "red", fontWeight: 500 }}>Forgot password ?</Text>
          </View>
          <View style={{ marginTop: 60 }}>
            <Pressable 
            onPress={handleRegister}
            style={{ backgroundColor: "white", padding: 10, alignItems: "center", justifyContent: "center", borderRadius: 5 }}>
              <Text style={{ color: "black", textAlign: 'center', fontWeight: 'bold', fontSize: 16, fontFamily: 'arial' }}>Register</Text>
            </Pressable>
            <Pressable onPress={() => router.replace('/login')} style={{ marginTop: 16 }}>
              <Text style={{ color: "gray", textAlign: 'center', fontSize: 15, fontFamily: 'arial' }}>Already have an account? Login </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default register

