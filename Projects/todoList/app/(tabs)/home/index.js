import { Image, ScrollView, Pressable, StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
 import { BottomModal, ModalContent, ModalTitle, SlideAnimation } from 'react-native-modals';
import { TextInput } from 'react-native';
import axios from 'axios';
export default function index() {
  const todos = []
  const [isModalVisible, setModalVisible] = useState(false)
  const [todo, setTodo] = useState("");
  const [category,setCategory]=useState("All");

  const getTodo=async()=>{
    try {
      const response=await axios.get("http://localhost:5000/api/getTask/66b3683974da1e4ca870ca5c").then((response)=>{
        console.log(response.data)
      })
    } catch (error) {
      
    }
  }

  const addTodo=async()=>{
    try {
      const todoData={
        title:todo,
        category:category,
      }
      axios.post("http://localhost:5000/api/create/66b3683974da1e4ca870ca5c",todoData).then((response)=>{
      console.log(response)
      Alert.alert("Todo added successfully");
      })
      setModalVisible(false)
      setTodo("");
    } catch (error) {
      console.log(error)
      Alert.alert("Something went wrong")
    }
  }
  const suggestions = [
    {
      id: '0',
      todo: 'Drink Water, keep healthy'
    },
    {
      id: '1',
      todo: 'lunch 🍔, 1 hour'
    },
    {
      id: '2',
      todo: 'Deep Work👿, 2 hours'
    },
    {
      id: '3',
      todo: 'Code 💻 1 hour'
    }
  ]
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
        <Pressable onPress={() => setModalVisible(!isModalVisible)}>
          <AntDesign name="pluscircle" size={30} color="black" />
        </Pressable>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 10 }}>
          {todos?.length > 0 ? (
            <View></View>
          ) : (
            <View style={{ paddingTop: "40%", paddingBottom: "auto", justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ width: 200, height: 200, resizeMode: "cover", margin: 10, borderRadius: '50%'}}
                source={{
                  uri: "https://media.newyorker.com/photos/63b87993e1937a452d9dd0e9/master/w_2560%2Cc_limit/r41710web-story.gif"
                }}
              />
              <Text style={{ margin: 20, color: "white", fontFamily: 'Arial', fontWeight: "" }}>No Task Today ! Wanna add a task?</Text>
              <Pressable onPress={() => setModalVisible(!isModalVisible)}>
                <AntDesign name="pluscircle" size={30} color="white" />
              </Pressable>
            </View>
          )}
        </View>
      </ScrollView>
      <BottomModal
        onHardwareBackPress={() => setModalVisible(!isModalVisible)}
        onBackdropPress={() => setModalVisible(!isModalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        modalTitle={<ModalTitle title="Add Task" />}
        modalAnimation={
          new SlideAnimation({ slideFrom: "bottom" })
        }
        visible={isModalVisible}
        onTouchOutside={() => setModalVisible(!isModalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 280 }} >
          <ScrollView>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <TextInput value={todo} onChangeText={(text) => setTodo(text)} style={{ width: 300, height: 'auto', padding: 10, borderRadius: 5 }} placeholder="Create a new Todo here" />
              <Ionicons onPress={addTodo}
              name="send-sharp" size={24} style={{ padding: 10 }} color="black" />
            </View>
            <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Change Category</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginVertical: 10 }}>
              <Pressable
              onPress={()=>setCategory("Work")}
              style={{
                borderColor: 'black',
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderWidth: 1,
                borderRadius: 20,
              }}>
                <Text >Work </Text>
              </Pressable>

              <Pressable 
              onPress={()=>setCategory("Personal")}
              style={{
                borderColor: 'black',
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderWidth: 1,
                borderRadius: 20,
              }}>
                <Text>Personal </Text>
              </Pressable>

              <Pressable 
              onPress={()=>setCategory("All")}
              style={{
                borderColor: 'black',
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderWidth: 1,
                borderRadius: 20,
              }}>
                <Text>All </Text>
              </Pressable>
            </View>

            <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Some Suggestions</Text>
            <View style={{marginTop:10,paddingHorizontal:10,flexDirection:'row',flexWrap:'wrap',gap:10 }}>
              {suggestions.map((item, index) => (
                <Pressable
                onPress={()=>setTodo(item.todo)}
                key={index}>
                  <Text style={{ padding: 8, borderRadius: 5, backgroundColor: '#F0F8FF', color: 'black', margin: 2}}>{item.todo}</Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        </ModalContent>
      </BottomModal>

    </>

  )
}

const styles = StyleSheet.create({})