import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login.js'
import ToDoList from './components/ToDoList.js'
import ImagePickerEx from './components/ImagePickerEx.js'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';




export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

    var AppNavigator = createStackNavigator({
        Login: {
            screen: Login
        },
        ToDoList: {
            screen: ToDoList
        },
        ImagePickerEx: {
            screen: ImagePickerEx
        }
    }, {
        initialRouteName: "Login"
    });

    var AppContainer = createAppContainer(AppNavigator);

    var styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });