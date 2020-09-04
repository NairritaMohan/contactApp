import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class SignUpScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}> 
   <TouchableOpacity style = {styles.button}>
<Text style = {styles.btnText}>SignUp</Text>
   </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems : 'center'
    },

    button:{
        backgroundColor:'red',
        width :100,
        height:40
    },
    btnText:{
        fontSize:20,
        fontWeight:'bold'
    }

})