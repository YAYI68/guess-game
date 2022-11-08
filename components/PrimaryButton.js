import React from 'react'
import { Text, View,Pressable, StyleSheet } from 'react-native'

function PrimaryButton({children,onPress}) {
  return (
    <View style={styles.outerContainer}>
    <Pressable style={({pressed})=>pressed?[ styles.innerContainer,styles.pressed ] : styles.innerContainer} 
    onPress={onPress} 
    android_ripple={{color:'#640233'}}>
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
    backgroundColor:"#4e0329",
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