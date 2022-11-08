import React from 'react'
import { TextInput, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen() {
  return (
      <View>
        <TextInput />
        <PrimaryButton >Start</PrimaryButton>
        <PrimaryButton >Reset</PrimaryButton>
      </View>
  )
}

export default StartGameScreen