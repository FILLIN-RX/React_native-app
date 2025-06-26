import { Text,View , StyleSheet } from 'react-native'
import React from 'react'

export default function aboutScreen() {
  return (
   <view style={styles.container}>
    <Text style={styles.text}>About screen</Text>
   </view>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: '#fff'
    }
})
