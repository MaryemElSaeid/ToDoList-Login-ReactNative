import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login.js'
import ToDoList from './ToDoList.js'

export default class App extends Component {
 render(){
   return(
     <Login />
    // <ToDoList />
   )
 }
}


