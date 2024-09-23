import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  Alert,
} from 'react-native';
import React from 'react';

const Login = props => {
  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={[styles.search]} placeholder="Email"></TextInput>
        <TextInput
          style={[styles.search, {marginTop: 10}]}
          placeholder="Password"></TextInput>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress={() => Alert.alert('The text is clicked!')}>
            <Text style={styles.text}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row', gap:10, alignItems:'center' }}>
            <Text style={{fontSize:20}}>Didn't have an account?</Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Signup')}>
              <Text style={{color:'purple',fontSize:20}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    marginTop: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 490,
    width: 350,
    borderRadius: 40,
  },
  title: {
    marginTop: 20,
    padding: 10,
    fontSize: 40,
    fontWeight: 'bold',
    // color:'white'
  },
  search: {
    fontSize: 30,
    marginTop: 30,
    marginBottom: 30,
    paddingLeft: 20,
    // textAlign:'center',
    height: 60,
    width: 300,
    borderColor: 'gray',
    borderWidth: 4,
    borderColor: 'blue',
    borderRadius: 40,
  },
  button: {
    paddingTop: 8,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 50,
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: 'blue',
    height: 60,
    width: 300,
  },
  text: {
    fontSize: 20,
    color: 'black',
    paddingBottom: 20,
  },
});

export default Login;
