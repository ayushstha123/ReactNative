import { Image,ScrollView, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
export default function index() {
  const todos = []
  return (
    <>
      <View style={{ gap: 5, marginHorizontal: 10, marginVertical: 10, flexDirection: "row" }} >
        <Pressable
          style={{
            backgroundColor: "black",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Text style={{ color: "white", justifyContent: "center", textAlign: "center" }}>All</Text>
        </Pressable>
        <Pressable
          style={{

            backgroundColor: "black",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            marginRight: "auto"
          }}>
          <Text style={{ color: "white", textAlign: "center" }}>Personal</Text>
        </Pressable>
        <Pressable>
          <AntDesign name="pluscircle" size={30} color="black" />
        </Pressable>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 10 }}>
          {todos?.length > 0 ? (
            <View></View>
          ) : (
            <View style={{ paddingTop: "40%", paddingBottom: "auto",justifyContent:'center',alignItems:'center' }}>
              <Image
                style={{ width: 200, height: 200, resizeMode: "cover", margin: 10, borderRadius: "50%" }}
                source={{
                  uri: "https://media.newyorker.com/photos/63b87993e1937a452d9dd0e9/master/w_2560%2Cc_limit/r41710web-story.gif"
                }}
              />
              <Text style={{margin:20, color: "white", fontFamily: 'Arial', fontWeight: "" }}>No Task Today ! Wanna add a task?</Text>
              <Pressable>
          <AntDesign name="pluscircle" size={30} color="white" />
        </Pressable>
            </View>
          )}
        </View>
      </ScrollView>

    </>

  )
}

const styles = StyleSheet.create({})