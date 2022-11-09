import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Title from '../components/Title'
import { Colors } from '../constants/colors'

function GameOverScreen() {
  return (
    <View>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
      <Image source={require('../assets/images/success.png')} />
      </View>
    </View>

  )
}

export default GameOverScreen

const styles = StyleSheet.create({
    imageContainer:{
        width:400,
        height:400,
        borderRadius:200,
        borderWidth:3,
        borderColor:Colors.primary800,
        overflow:'hidden',
        margin:36,

    }
})