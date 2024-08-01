import { StatusBar } from 'expo-status-bar';
import {  Image  , ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import DiceOne from './assets/One.png'
import DiceTwo from './assets/Two.png'
import DiceThree from './assets/Three.png'
import DiceFour  from './assets/Four.png'
import DiceFive from './assets/Five.png'
import DiceSix from './assets/Six.png'
import { PropsWithChildren } from 'react';

type DiceProps=PropsWithChildren<{
  imageUrl:ImageSourcePropType
}> //error prone approach for image url >best way to do it
const Dice=({imageUrl}:DiceProps):JSX.Element =>{
  return(
    <Image style={styles.diceImage} source={imageUrl}/>
  )
}


export default function App():JSX.Element {
  return (
    <View style={styles.container}>
      <Dice imageUrl={DiceOne}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceImage:{
    width:200,
  }
});
