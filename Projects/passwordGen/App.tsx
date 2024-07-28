import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


//form validation
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be minimum of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Password is required')
})
export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setlowerCase] = useState(false);
  const [upperCase, setupperCase] = useState(false);
  const [numbers, setnumbers] = useState(false);
  const [symbols, setsymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = ''
    const upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz'
    const numbersChar = '0123456789'
    const symbolsChar = '!@#$%^&*()_+'

    if (upperCase) {
      characterList += upperCaseChar
    }
    if (lowerCase) {
      characterList += lowerCaseChar
    }
    if (numbers) {
      characterList += numbersChar
    }
    if (symbols) {
      characterList += symbolsChar
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  }





  const createPassword = (characters: string,
    passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result;
  }
  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setlowerCase(false);
    setupperCase(false);
    setnumbers(false);
    setsymbols(false);
  }
  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <SafeAreaView>
        <View>
          <Text>Password Generator</Text>
          <Formik
       initialValues={{passwordLength: '' }}
       validationSchema={passwordSchema}
       onSubmit={values =>{
        generatePasswordString(+values.passwordLength) //TODO plus makes it convert into number typescript
        console.log(values)
       }}
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         handleReset,
         /* and other goodies */
       }) => (
         <>
         <View>
          <View>
            <Text>Password Length</Text>
            {touched.passwordLength && errors.passwordLength&&(
              <Text>{errors.passwordLength}</Text>
            )}
            <TextInput value={values.passwordLength}
            onChangeText={handleChange('passwordLength')}
            placeholder='Password Length'
            keyboardType='numeric'
            ></TextInput>
          </View>
         </View>
         <View></View>
         <View></View>
         <View></View>
         <View></View>

         <View style={styles.formAction}>
          <TouchableOpacity>
            
            <Text>Generate Password</Text></TouchableOpacity>
          <TouchableOpacity>
            <Text>Reset</Text>
            </TouchableOpacity>
         </View>

         </>
       )}
     </Formik>
        </View>
      </SafeAreaView>
    </ScrollView> 
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
