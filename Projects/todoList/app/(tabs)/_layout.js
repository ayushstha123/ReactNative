import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Foundation from '@expo/vector-icons/Foundation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function Layout() {
  return (

    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: 'white', // Change the background color here
      },
    }}>
      <Tabs.Screen name='home' options={{
        tabBarLabel: "Home",
        tabBarLabelStyle: {
          marginBottom: 5,
          color: "black",
          fontWeight: "thin"
        },
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          focused ? (
            <FontAwesome name="home" size={24} color="#616161" />

          )
            : (
              <FontAwesome name="home" size={24} color="black" />
            )
        )
      }} />

      {/* for calender */}
      <Tabs.Screen name='calender' options={{
        tabBarLabel: "Calender",
        tabBarLabelStyle: {
          marginBottom: 5,
          color: "black",
          fontFamily: "Arial",
          fontWeight: "thin"
        },
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          focused ? (
            <Foundation name="calendar" size={24} color="#616161" />
          )
            : (
              <Foundation name="calendar" size={24} color="black" />)
        )
      }} />
      {/* for profile */}
      <Tabs.Screen name='profile' options={{
        tabBarLabel: "Profile",
        tabBarLabelStyle: {
          marginBottom: 5,
          color: "black",
          fontFamily: "Arial",
          fontWeight: "thin"
        },
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          focused ? (
            <MaterialCommunityIcons name="account" size={24} color="#616161" />
          )
            : (
              <MaterialCommunityIcons name="account" size={24} color="black" />
            ))
      }} />

    </Tabs>
  )
}

