import * as React from 'react';
import {NavigationContainer} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';

const AppStack = createStackNavigator()

export default ()=>{
<NavigationContainer>
  <AppStack.Navigator>
    <AppStack.Screen name ="SignUp" component = {SignUpScreen}/>
    <AppStack.Screen name ="Login" component = {LoginScreen}/>
  </AppStack.Navigator>
</NavigationContainer>


}