import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App():JSX.Element {
  const [changedColor,setChangedColor]=useState('#fff');

  const generateColor=()=>{
    const hexRange='0123456789ABCDEF';
    let color='#';
    for(let i = 0; i < 6; i++ ){
      color+=hexRange[Math.floor(Math.random()*16)];
      console.log(color);
    }
    setChangedColor(color)
  }
  return (
    <>
    <StatusBar backgroundColor={changedColor}/>
    <View style={[styles.container,{backgroundColor:changedColor}]}>
    <Text style={styles.colorHex}>{changedColor}</Text>

      <TouchableOpacity>
        <View>
          <Text onPress={generateColor} style={styles.button}>Press Me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: 'white',
    borderRadius:12,
    padding:10
  },
  colorHex:{
    backgroundColor:'black',
    width:100,
    margin:20,
    padding:10,
    color:'white',
    textAlign:'center'
  }
});
