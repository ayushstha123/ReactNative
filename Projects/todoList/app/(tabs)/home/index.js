import { Image,ScrollView, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { BottomModal, ModalContent, ModalTitle, SlideAnimation } from 'react-native-modals';
import { TextInput } from 'react-native-web';
export default function index() {
  const todos = []
  const [isModalVisible,setModalVisible]=useState(false)
  const [todo,setTodo]=useState("")
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
        <Pressable onPress={()=>setModalVisible(!isModalVisible)}>
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
              <Pressable onPress={()=>setModalVisible(!isModalVisible)}>
          <AntDesign name="pluscircle" size={30} color="white" />
        </Pressable>
            </View>
          )}
        </View>
      </ScrollView>
      <BottomModal
      onHardwareBackPress={()=>setModalVisible(!isModalVisible)}
      onBackdropPress={()=>setModalVisible(!isModalVisible)}
      swipeDirection={["up","down"]}
      swipeThreshold={200}
      modalTitle={<ModalTitle title="add todo"/>}
      modalAnimation={
        new SlideAnimation({ slideFrom: "bottom" })
      }
      visible={isModalVisible}
      onTouchOutside={()=> setModalVisible(!isModalVisible)}
      >
        <ModalContent style={{width:"100%",height:200}}>
          <View>
            <TextInput value={todo} onChangeText={(text)=>setTodo(text)} placeholder="Create a new Todo here"/>
          </View>
        </ModalContent>
      </BottomModal>

    </>

  )
}

const styles = StyleSheet.create({})