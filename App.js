import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {AppStackNavigator} from './components/AppStackNavigator';


export default class App extends React.Component{
  render(){
    return(
      <AppStackNavigator/>
    )
  }
}