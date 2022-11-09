import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Alert,  } from 'react-native'
import Card from '../components/Card'
import InstructionText from '../components/InstructionText'
import NumberContainer from '../components/NumberContainer'
import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title'
import  {Ionicons}   from "@expo/vector-icons" 




function generateRandomNumber(min, max,exclude) {
  const randomNum = Math.floor((Math.random() * (max - min)) + min )
  if (randomNum === exclude ){
    return generateRandomNumber(min, max,exclude)
  }
  return randomNum;
}

let minBoundary = 1;
let maxBoundary = 100;


const GameScreen = ({userNumber,gameOver}) => {
  const initialGuess = generateRandomNumber(1,100,userNumber)
  const [ currentGuess, setCurrentGuess ] = useState(initialGuess)
     

  useEffect(()=>{
    if (currentGuess === userNumber){
      // gameIsOver
      gameOver(true)
    }
  },[currentGuess,userNumber,gameOver])

   const nextGuessHandler = (direction)=>{
     
    if((direction === 'lower' && currentGuess < userNumber)||
     (direction === 'higher' && currentGuess > userNumber)
    ){
     Alert.alert('Dont lie',"You know this is wrong...",[{text:'Sorry!!', style:'Cancel'}])
    }


     if(direction === 'lower'){
      maxBoundary = currentGuess
     }
     else{
      minBoundary = currentGuess + 1;
     }
     const newRandNumber = generateRandomNumber(minBoundary,maxBoundary,currentGuess)
     setCurrentGuess(newRandNumber)
    }

  return (
    <View style={styles.screen}>
        <Title >Opponent Guess</Title>
         <NumberContainer>
          {currentGuess}
         </NumberContainer>
        <Card>
            <InstructionText style={InstructionText}>Higher or Lower </InstructionText>
            <View style={styles.buttonContainer}>
              <View>
              <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
                <Ionicons size={25} color="white" name="md-remove" /> 
                </PrimaryButton>
              </View>
              <View>
              <PrimaryButton onPress={nextGuessHandler.bind(this,'higher')}>
              <Ionicons size={25} color="white" name='add' />   
              </PrimaryButton>
              </View>
            </View>
        </Card>
        <View>
         <Text>Log Rounds</Text>
        </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding:50,
    },
    InstructionText:{
     marginBottom:12,
    },
    buttonContainer:{
      flexDirection:'row',
    },
    button:{
      flex:1,
    }
})