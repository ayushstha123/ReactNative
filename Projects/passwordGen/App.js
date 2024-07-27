import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


//form validation
import * as Yup from 'yup';

const passwordSchema=Yup.object().shape({
  passwordLength:Yup.number,
  
})
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <StatusBar style="auto" />
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
});
