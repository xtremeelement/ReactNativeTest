import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

const [password, setPassword] = useState("")
const [username, setUsername] = useState("")

const handlePassword = (text) =>{
  console.log(text);
  setPassword(text);
  console.log(password)
;}

const handleUsername = (text) =>{
  console.log(text);
  setUsername(text);
  console.log(username)
}
  return (
    <View style={styles.container}>
      <Text>Please Log in</Text>
      <View style={styles.input_fields}>
      <Text>Username</Text>
      <TextInput 
      onChangeText={(text)=>handleUsername(text)}
      placeholder="username" 
      id style={styles.text_input}
      />
      </View>
      <View style={styles.input_fields}>
      <Text>Password</Text>
      <TextInput 
      secureTextEntry={true} 
      onChangeText={(text)=>{handlePassword(text)}}
      placeholder="password" 
      style={styles.text_input}/>
      </View>
      <Button title="Submit" onPress={()=>{handlePassword}}/>
      <Text style={styles.usertext}>{username}</Text>
      <Text style={styles.usertext}>{password}</Text>
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
  text_input: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 40,
    width: 200,
    textAlign: "center"
  },
  input_fields:{
    display: "flex",
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 275,
    marginTop: 20
  },
  usertext:{
    borderWidth: 1,
    borderColor: 'gray',
    height: 40,
    width: 200,
    borderRadius: 5,
    marginBottom: 5
  }
});
