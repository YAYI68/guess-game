import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen() {
  return (
      <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput}
         maxLength={2}
         keyboardType="number-pad" 
         autoCorrect={false} 
         autoCapitalize="none" />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
             <PrimaryButton >Reset</PrimaryButton>
            </View>
            <View style={styles.button}>
              <PrimaryButton >Confirm</PrimaryButton>
            </View>
        </View> 
      </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        marginTop:100,
        padding:16,
        backgroundColor:"#3b021f",
        borderRadius:10,
        marginHorizontal:24,
        elevation:4,
        shadowColor:"black",
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        shadowOpacity:0.25,
        alignItems: "center",
        justifyContent: "center",
    },
    numberInput:{
       height:50,
       fontSize:32,
       borderBottomColor:'#ddb52f',
       borderBottomWidth:2,
       color:'#ddb52f',
       marginVertical:8,
       fontWeight:'bold',
       width:50,
       textAlign:'center',
    },
    buttonContainer:{
        width:'80%',
        flexDirection:'row',
        justifyContent: 'center',
    },
    button:{
        flex:1,
    }

})