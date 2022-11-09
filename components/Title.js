import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../constants/colors'

function Title({children}) {
  return (
    <Text style={styles.titleText}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    titleText:{
       fontSize:24,
       fontWeight: 'bold',
       color:Colors.secondary500,
       textAlign: 'center',
       borderWidth:2,
       borderColor:'white',
       padding:12,
       borderRadius:6,
    }
});