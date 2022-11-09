import React from 'react'
import { Text, View,Pressable, StyleSheet } from 'react-native'
import { Colors } from '../constants/colors'

function PrimaryButton({children,onPress}) {

  return (
    <View style={styles.outerContainer}>
    <Pressable style={({pressed})=>pressed?[ styles.innerContainer,styles.pressed ] : styles.innerContainer} 
    onPress={onPress} 
    android_ripple={{color:Colors.primary600}}>
        <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    outerContainer:{
        borderRadius:28,
        margin:4,
        overflow: 'hidden',
        elevation:2,

    },
   innerContainer:{
    backgroundColor:Colors.primary500,
    paddingVertical:8,
    paddingHorizontal:16, 
   },
   buttonText:{
    color:'white',
    textAlign:'center',
   },
   pressed:{
    opacity:0.75,
   }



})