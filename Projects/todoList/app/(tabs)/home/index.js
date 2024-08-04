import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <>
      <View style={{marginHorizontal: 10,marginVertical:10, flexDirection: "row"}} >
        <Pressable
          style={{
            margin:2,
            backgroundColor: "black",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Text style={{ color: "white", textAlign: "center" }}>All</Text>
        </Pressable>
        <Pressable
          style={{
            margin:2,
            backgroundColor: "black",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Text style={{ color: "white", textAlign: "center" }}>Personal</Text>
        </Pressable>
      </View>
    </>
  )
}

const styles = StyleSheet.create({})