import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import moment from 'moment';
import { Calendar } from 'react-native-calendars';

export default function index() {
  const today = moment().format("YYYY-MM-DD");
  const [selectedDays, setSelectedDays] = useState(today);
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
      <Calendar onDayPress={(day) => setSelectedDays(day.dateString)} />
    </View>
  )
}

const styles = StyleSheet.create({})