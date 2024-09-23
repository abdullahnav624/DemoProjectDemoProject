import {StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'


const Signup = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput style={styles.title}
      placeholder='First Name'
      ></TextInput>
      <TextInput style={styles.title}
      placeholder='Last Name'
      ></TextInput>
      <TextInput style={styles.title}
      placeholder='Email'
      ></TextInput>
      <TextInput style={styles.title}
      placeholder='Create Password'
      ></TextInput>
      <TextInput style={styles.title}
      placeholder='Confirm Password'
      ></TextInput>
      
    </View>
  );
};


export default Signup

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    marginTop:20,
    fontSize:50,
    marginBottom:30
  },
  input:{

  },
})