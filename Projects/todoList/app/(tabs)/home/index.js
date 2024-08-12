import { Image, ScrollView, Pressable, StyleSheet, Text, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BottomModal, ModalContent, ModalTitle, SlideAnimation } from 'react-native-modals';
import { TextInput } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import axios from 'axios';
import moment from 'moment';
export default function index() {
  const [todos, setTodos] = useState([])
  const [isModalVisible, setModalVisible] = useState(false)
  const [todo, setTodo] = useState("");
  const [category, setCategory] = useState("All");
  const [pendingTodo, setPendingTodo] = useState([]);
  const [completedTodo, setCompletedTodo] = useState([]);
  const [marked, setMarked] = useState(false)
  const [unMarked, setUnMarked] = useState(true)
  useEffect(() => {
    getTodo();
  }, [marked, unMarked]);

  const markedTodo = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/update/${id}`);
      setMarked(!marked); // Toggle marked state to trigger useEffect
    } catch (error) {
      console.log(error);
    }
  }

  const unMarkedTodo = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/update/undo/${id}`);
      setUnMarked(!unMarked); // Toggle marked state to trigger useEffect
    } catch (error) {
      console.log(error);
    }
  }

  const addTodo = async () => {
    try {
      const todoData = {
        title: todo,
        category: category,
      };
      await axios.post("http://localhost:5000/api/create/66b39ceeb4b03c41fd35d075", todoData);
      setModalVisible(false);
      setTodo("");
      setMarked(!marked); // Toggle marked state to trigger useEffect
      Alert.alert("Todo added successfully");
    } catch (error) {
      console.log(error);
      Alert.alert("Something went wrong");
    }
  }

  const getTodo = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/getTask/66b39ceeb4b03c41fd35d075");
      console.log(response.data);
      const fetchedTodo = response.data.todos || [];
      const pending = fetchedTodo.filter((todo) => todo.status !== "completed");
      const completed = fetchedTodo.filter((todo) => todo.status === "completed");

      setPendingTodo(pending);
      setCompletedTodo(completed);
      setTodos(fetchedTodo); // Update todos state
    } catch (error) {
      console.log(error);
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
        <View style={{ flex: 1, padding: 10 }}>
          <Text style={{ color: 'white', fontWeight: 'light', fontSize: 20, marginVertical: 20 }}>🗓️ Today : {moment().format("dddd, MMMM Do, YYYY")}</Text>
          {todos?.length > 0 ? (
            <View>
              {pendingTodo?.length > 0 && (
                <>
                  <View style={{ flexDirection: 'row' }}>
                    <MaterialIcons name="pending-actions" style={{ marginRight: 10, marginTop: 5, }} size={32} color="white" />
                    <Text style={{ color: "white", fontWeight: "bold", marginHorizontal: 10, fontSize: 30 }}>
                      Pending Tasks</Text></View></>)}


              {pendingTodo?.map((item, index) => (
                <Pressable key={index} style={{ marginBottom: 10, padding: 10, borderRadius: 7, marginVertical: 10, backgroundColor: "#E0E0E0" }}>
                  <View style={{ flexDirection: "row", alignItems: 'center', gap: 10 }}>
                    <Feather onPress={() => markedTodo(item?._id)} name="circle" size={24} color="black" />
                    <Text style={{ color: "black" }}>{item?.title}</Text>
                    <Text style={{ color: "black", marginLeft: "auto" ,backgroundColor:"black", borderRadius:50,padding:10,color:'white'}}>{moment(item?.createdAt).format('hh:mm a')}</Text>
                  </View></Pressable>
              ))}
              <View style={{ marginVertical: 20, justifyContent: 'center', height: 1, backgroundColor: 'white' }} />
              <Text style={{ color: "white", fontWeight: "bold", marginBottom: 10, fontSize: 30 }}>Completed Task</Text>
              {completedTodo?.length > 0 && (
                <View>
                  {completedTodo?.map((item, index) => (
                    <Pressable key={index} style={{ marginBottom: 10, padding: 10, borderRadius: 7, marginVertical: 10, backgroundColor: "#E0E0E0" }}>
                      <View style={{ flexDirection: "row", alignItems: 'center', gap: 10 }}>
                        <FontAwesome onPress={() => unMarkedTodo(item?._id)} name="check-circle" size={24} color="black" />
                        <Text style={{ color: "black", textDecorationLine: 'line-through', color: 'grey' }}>{item?.title}</Text>
                      </View></Pressable>
                  ))}
                </View>
              )}
            </View>
          ) : (
            <View style={{ paddingTop: "40%", paddingBottom: "auto", justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ width: 200, height: 200, resizeMode: "cover", margin: 10, borderRadius: 50 }}
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
                onPress={() => setCategory("Work")}
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
                onPress={() => setCategory("Personal")}
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
                onPress={() => setCategory("All")}
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
            <View style={{ marginTop: 10, paddingHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
              {suggestions.map((item, index) => (
                <Pressable
                  onPress={() => setTodo(item.todo)}
                  key={index}>
                  <Text style={{ padding: 8, borderRadius: 5, backgroundColor: '#F0F8FF', color: 'black', margin: 2 }}>{item.todo}</Text>
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