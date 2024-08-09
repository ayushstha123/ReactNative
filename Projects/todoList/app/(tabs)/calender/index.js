import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Calendar } from 'react-native-calendars';
import axios from 'axios';

export default function index() {
  const today = moment().format("YYYY-MM-DD");
  const [selectedDays, setSelectedDays] = useState(today);
  const [todos, setTodos] = useState([]);
  const fetchCompletedTodos = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/completed/${selectedDays}`);
      const completedTodo = response.data.completedTodos || [];
      setTodos(completedTodo);
    } catch (error) {
      console.log(error)
    }
  }
const handleDayPress=(day)=>{
setSelectedDays(day.dateString)
}
  useEffect(() => {
    fetchCompletedTodos();
  }, [selectedDays]);
  console.log(todos)
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Calendar 
      onDayPress={handleDayPress}
      markedDates={{[selectedDays]: {selected: true,selectedColor: 'black'}}}
      />

              <Text style={{ color: "black", fontWeight: "bold", marginTop: 20,marginHorizontal:10, fontSize: 30 }}>Completed Task</Text>
                <View style={{ marginHorizontal: 10 }}>
                  {todos?.map((item, index) => (
                    <Pressable key={index} style={{ marginBottom: 10, padding: 10, borderRadius: 7, marginVertical: 10, backgroundColor: "#E0E0E0" }}>
                      <View style={{ flexDirection: "row", alignItems: 'center', gap: 10 }}>
                      <FontAwesome name="check-circle" size={24} color="black" />

                        <Text style={{ color: "black", textDecorationLine: 'line-through', color: 'grey' }}>{item?.title}</Text>
                      </View></Pressable>
                  ))}
                </View>
             
           
    </View>
  )
}

const styles = StyleSheet.create({})