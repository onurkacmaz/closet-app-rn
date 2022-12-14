import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../components/context'

const ResetPasswordScreen = ({route, navigation}) => {
 
  const [email, setEmail] = useState("");

  const { resetPassword } = useContext(AuthContext)

  const handleSendEmail = () => {
    resetPassword(email)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <View style={[styles.inputContainer, {alignItems:'center', marginBottom:10}]}>
        <Text style={{fontSize:30, fontWeight:'700'}}>RESET PASSWORD</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput value={email} onChangeText={email => setEmail(email)} keyboardType='email-address' placeholder='Email' placeholderTextColor={"#666"} style={styles.input} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleSendEmail()} style={styles.button}>
        <Text style={styles.buttonText}>Send Email</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default ResetPasswordScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  inputContainer: {
      width: '80%'
  },
  input: {
      backgroundColor: 'white',
      padding:20,
      borderRadius: 10,
      marginTop: 10
  },
  buttonContainer: {
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
  },
  button: {
      alignItems:'center',
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius:10
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth:2
  },
  buttonText: {
      color:'white',
      fontWeight: '700',
      fontSize: 16
  },
  buttonOutlineText: {
      color:'#0782F9',
      fontWeight: '700',
      fontSize: 16
  }
})