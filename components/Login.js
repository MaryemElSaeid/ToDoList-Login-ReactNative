import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
 
  class Login extends Component {
    state = {
      email: '',
      password: ''
  }
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
   this.setState({ password: text })
  }
  login = async (email, pass) => {
    let user = {
        email:this.state.email,
        password:this.state.password
    }
    let res = await fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
    });
    let resJson = await res.json();
    if(resJson.token){
        alert('Login succes'+resJson.token)
    } else {
        alert('Login failed'+resJson.error)
    }
    
  }
  render() {
  return (
    <View style = {styles.container}>
    <TextInput style = {styles.input}
      underlineColorAndroid = "transparent"
      placeholder = "Email"
      placeholderTextColor = "#9a73ef"
      autoCapitalize = "none"
      onChangeText = {this.handleEmail}/>
    <TextInput style = {styles.input}
      underlineColorAndroid = "transparent"
      placeholder = "Password"
      placeholderTextColor = "#9a73ef"
      autoCapitalize = "none"
      onChangeText = {this.handlePassword}/>
    <TouchableOpacity
      style = {styles.submitButton}
      onPress = {
        () => this.login(this.state.email, this.state.password)
      }>
    <Text style = {styles.submitButtonText}> Submit </Text>
    </TouchableOpacity>
    <Button
          title="Go to ToDoList"
          onPress={() => this.props.navigation.navigate('ToDoList')}
/>
<Button
          title="Go to ImagePicker"
          onPress={() => this.props.navigation.navigate('ImagePickerEx')}
/>
    </View>
    )
  }
  }
  export default Login
  const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText:{
   color: 'white'
  }
  })