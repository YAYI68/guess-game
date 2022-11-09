import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../constants/colors'

function InstructionText({children,style}) {
  return (
    <Text style={[styles.instructText,style]}>{children}</Text>
  )
}

export default InstructionText

const styles =  StyleSheet.create({
    instructText:{
        color:Colors.secondary500,
        fontSize:24,
    }
})