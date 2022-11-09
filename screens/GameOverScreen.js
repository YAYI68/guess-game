import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import Title from '../components/Title'
import { Colors } from '../constants/colors'

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {


  return (
    <View style={styles.container}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={require('../assets/images/success.png')} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.hightLight}>{roundsNumber}</Text> rounds to guess  the number <Text style={styles.hightLight}>{userNumber}</Text>
    </Text>
    <PrimaryButton  onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>

  )
}

export default GameOverScreen

const styles = StyleSheet.create({
    container:{
      
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:24,
    },
    imageContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        width:300,
        height:300,
        borderRadius:200,
        borderWidth:3,
        borderColor:Colors.primary800,
        overflow:'hidden',
        margin:36,
    },
    image:{
        width: '100%',
        height: '100%',
    },
    summaryText:{
        fontFamily:'open-sans',
        fontSize:24,
        textAlign: 'center',
        marginVertical:24,
    },
    hightLight:{
        fontFamily:'open-sans-bold',
        color:Colors.primary500,
    }

})