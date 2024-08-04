import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
export default function index() {
  return (
    <View style={{backgroundColor:"black",height:"100%"}}>
      <View style={{gap:5,marginHorizontal: 10,marginVertical:10, flexDirection: "row"}} >
        <Pressable
          style={{   
            backgroundColor: "white",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Text style={{ color: "black",justifyContent:"center", textAlign: "center" }}>All</Text>
        </Pressable>
        <Pressable
          style={{

            backgroundColor: "white",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            marginRight:"auto"
          }}>
          <Text style={{ color: "black", textAlign: "center" }}>Personal</Text>
        </Pressable>
        <Pressable>
        <AntDesign name="pluscircle" size={30} color="white" />        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})