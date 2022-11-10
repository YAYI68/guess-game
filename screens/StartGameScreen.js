import React, { useState } from 'react'
import { StyleSheet, TextInput, View,Alert,
    useWindowDimensions, KeyboardAvoidingView,
    ScrollView, 
} from 'react-native'
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title';
import { Colors } from '../constants/colors';

function StartGameScreen({onPickedNum}) {
   const [enterNum,setEnterNum] = useState('');

   const { width, height } = useWindowDimensions();

   const numInpputHandler = (enterText)=>{
    setEnterNum(enterText)
   }

   const resetInpput = ()=>{
    setEnterNum("")
   }

   const confirmNumber = ()=>{
    const chosenNumber = parseInt(enterNum)

    if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber >=99 ){
       Alert.alert('Invalid number',
        "Number must be between 1 and 99",
        [{text: 'Okay', style:'destructive', onPress:resetInpput}]
       )
        return;
    }
    onPickedNum(chosenNumber)
    console.log({chosenNumber})
   }

   const topSpace = height  < 400 ? 30 : 100

  return (
    <ScrollView style={{flex:1}}>
    <KeyboardAvoidingView style={{flex:1}} behavior="position">
      <View style={[styles.rootContainer,{marginTop:topSpace}]}>
        <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput style={styles.numberInput}
         maxLength={2}
         keyboardType="number-pad" 
         autoCorrect={false} 
         value={enterNum}
         onChangeText={numInpputHandler}
         autoCapitalize="none" />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
             <PrimaryButton >Reset</PrimaryButton>
            </View>
            <View style={styles.button}>
              <PrimaryButton onPress={confirmNumber} >Confirm</PrimaryButton>
            </View>
        </View> 
      </Card>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen
// const deviceHeight =  Dimensions.get("window").height 

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        alignItems: 'center'
    },
   
    numberInput:{
       height:50,
       fontSize:32,
       borderBottomColor:Colors.secondary500,
       borderBottomWidth:2,
       color:Colors.secondary500,
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
    },
   

})