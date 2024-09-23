import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';


const Counter33 = () => {
  const [value, setCounter] = useState(0);
  const [opacity , setOpacity] = useState(0.2);


  function increaseValue() {
    if(value==33){
      setCounter(0);
    setOpacity(0.2);
    return;
    }
    setCounter(value + 1);
    setOpacity(opacity+0.1)
  }
  function decreaseValue() {
    if(value==0){
      Alert.alert('Cannot decrease further')
      // console.error("Can not decrease further");
      return ;
    }
    setCounter(value - 1);
    setOpacity(opacity-0.1)
    
  }
  function resetValue() {
    setCounter(0);
    setOpacity(0.1)

  }

  return (
    <View style={styles.container}>

<ImageBackground style={[styles.backgroundImage , {opacity}]} source={require('./Assets/22.png')}/>
      <View style={styles.overlay}>
      <Text style={styles.text}>Counter App</Text>
      <Text style={styles.count}>{value}</Text>
      <View style={{flexDirection: 'row'}}>
        <View>
          <TouchableOpacity style={styles.counter}  onPress={increaseValue}>
            <Text
              style={{color: 'white', fontSize: 50}}
             >
              +
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.counter} onPress={decreaseValue}>
            <Text style={{color: 'white', fontSize: 50 ,marginTop:-35}}>_</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.reset} onPress={resetValue}>
          <Text style={{color: 'white', fontSize: 30}}>Reset</Text>
        </TouchableOpacity>
      </View>
      
      </View>
     
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'white',
    
  },
  overlay: {
    justifyContent:'center', 
    alignItems:'center',
    top:180,
  },
  backgroundImage:{

    height:'100%',
    width:'100%',
    position:'absolute'
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
  count: {
    fontSize: 50,
    marginTop: 20,
    fontWeight: 'bold',
  },
  counter: {
    height: 70,
    width: 70,
    backgroundColor: 'blue',
    color: 'white',
    // fontSize: ,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginTop: 50,
  },
  reset: {
    width: 170,
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 20,
  },
});

export default Counter33;

// const styles = StyleSheet.create({

// })
