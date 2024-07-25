import React from "react";
import {
    View, Text, SafeAreaView,StyleSheet, useColorScheme
  } from 'react-native'
  
function AppPro():JSX.Element{
    const isDarkMode=useColorScheme()==='dark'

       return (
        <View style={styles.container}>
            <Text style={isDarkMode? styles.whiteText:styles.whiteText}>Hello World</Text>
        </View>
       )
    
}
const styles= StyleSheet.create({
    container:{
        backgroundColor:"red",
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    },
    whiteText:{
        color:"white"
    },
    darkText:{
        color:"black"
    }
})
export default AppPro