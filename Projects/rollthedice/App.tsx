import { StatusBar } from 'expo-status-bar';
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import DiceOne from './assets/One.png'
import DiceTwo from './assets/Two.png'
import DiceThree from './assets/Three.png'
import DiceFour from './assets/Four.png'
import DiceFive from './assets/Five.png'
import DiceSix from './assets/Six.png'
import { PropsWithChildren, useState } from 'react';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}> //error prone approach for image url >best way to do it
/**
 * This is a functional component that renders an Image component with a 
 * specific image source. The image source is passed as a prop to the 
 * component and is used to display a dice image.
 *
 * @param {DiceProps} props - An object containing the image source for the dice.
 * @returns {JSX.Element} - A JSX element representing the Image component.
 */
const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  // Render an Image component with the specified image source
  return (
    <Image
      // Apply the style defined in the stylesheet to the Image component
      style={styles.diceImage}
      // Specify the source of the image to be displayed
      source={imageUrl}
    />
  );
}


export default function App(): JSX.Element {
  //creating a state
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)//useState<ImageSourcePropType>(DiceOne): The useState hook initializes the state. The generic type <ImageSourcePropType> specifies that the state will be of this type. DiceOne is the initial state value, which is a valid ImageSourcePropType.

  const rollDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1; //here we are multipling by 6 and adding 1 to it to generate a random number between thats not zero
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
    }
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable>
        <Text  style={styles.rollbutton} onPress={rollDice}>Roll The Dice</Text>
      </Pressable>
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
  diceImage: {
    height: 200,
    width: 200
  },
  rollbutton:{
    marginTop: 20,
    backgroundColor:'black',
    color:'white',
    padding:12
  }
});
