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
    <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.container}>
      <SafeAreaView>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={passwordSchema}
            onSubmit={(values) => {
              generatePasswordString(+values.passwordLength); // Convert to number
              console.log(values);
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
            }) => (
              <>
                <View style={styles.inputContainer}>
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.error}>{errors.passwordLength}</Text>
                    )}
                    <TextInput
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder="Password Length"
                      keyboardType="numeric"
                      style={styles.input}
                    />
                  </View>
                </View>
                <View style={styles.checkboxContainer}>
                  <View style={styles.checkboxGroup}>
                    <BouncyCheckbox
                      isChecked={lowerCase}
                      onPress={() => setlowerCase(!lowerCase)}
                      fillColor='green'
                    />
                    <Text>Include Lowercase</Text>
                  </View>
                  <View style={styles.checkboxGroup}>
                    <BouncyCheckbox
                      isChecked={upperCase}
                      onPress={() => setupperCase(!upperCase)}

                    />
                    <Text>Include UpperCase</Text>
                  </View>
                  <View style={styles.checkboxGroup}>

                    <BouncyCheckbox
                      isChecked={numbers}
                      onPress={() => setnumbers(!numbers)}

                    /><Text>Include Numbers</Text>
                  </View>
                  <View style={styles.checkboxGroup}>

                    <BouncyCheckbox
                      isChecked={symbols}
                      onPress={() => setsymbols(!symbols)}

                    /><Text>Include Symbols</Text>
                  </View>
                </View>
                <View style={styles.formAction}>
                  <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
                    <Text style={styles.buttonText}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { handleReset(); resetPasswordState(); }} style={styles.button}>
                    <Text style={styles.buttonText}>Reset</Text>
                  </TouchableOpacity>
                </View>
                {isPassGenerated && (
                  <View style={styles.passwordContainer}>
                    <Text disabled={!isValid} style={styles.passwordText}>Generated Password:</Text>
                    <Text selectable={true} style={styles.password}>{password}</Text>
                  </View>
                )}
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
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  innerContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  error: {
    fontSize: 14,
    color: 'red',
    marginTop: 5,
  },
  checkboxContainer: {
    marginBottom: 20,

  },
  checkboxGroup: {
    flexDirection: 'row',
    marginRight: 20,
    marginBottom: 10,

  },
  formAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  passwordContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  passwordText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  password: {
    fontSize: 24,
    color: '#007bff',
    marginTop: 10,
  },
});
