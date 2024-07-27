import React from "react";
import {
    View, Text, SafeAreaView,StyleSheet ,ScrollView, useColorScheme
  } from 'react-native'
import FlatCards from "./Components/FlatCards";
import ElevatedCards from "./Components/ElevatedCards";
import FancyCards from "./Components/FancyCards";
import ActionCards from "./Components/ActionCards";
import ContactList from "./Components/ContactList";
  
function AppPro():JSX.Element{
    const isDarkMode=useColorScheme()==='dark'

       return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <FlatCards/>
            <ElevatedCards/>
            <FancyCards/>
            <ActionCards/>
            <ContactList/>
            </ScrollView>
        </SafeAreaView>
       )
    
}
const styles= StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
         
    },
})
export default AppPro