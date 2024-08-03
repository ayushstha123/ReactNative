import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Foundation from '@expo/vector-icons/Foundation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name='home' options={{
        tabBarLabel: "Home",
        tabBarLabelStyle: { color: "#7CB9E8" },
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          focused ? (
            <FontAwesome name="home" size={24} color="#7CB9E8" />

          )
            : (
              <FontAwesome name="home" size={24} color="black" />
            )
        }
      }} />

      {/* for calender */}
      <Tabs.Screen name='calender' options={{
        tabBarLabel: "Calender",
        tabBarLabelStyle: { color: "#7CB9E8" },
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          focused ? (
            <Foundation name="calendar" size={24} color="#7CB9E8" />
          )
            : (
              <Foundation name="calendar" size={24} color="black" />)
        }
      }} />
      {/* for profile */}
      <Tabs.Screen name='profile' options={{
        tabBarLabel: "Profile",
        tabBarLabelStyle: { color: "#7CB9E8" },
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          focused ? (
            <MaterialCommunityIcons name="account" size={24} color="#7CB9E8" />
          )
            : (
              <MaterialCommunityIcons name="account" size={24} color="black" />        
            )}
      }} />

    </Tabs>
  )
}

