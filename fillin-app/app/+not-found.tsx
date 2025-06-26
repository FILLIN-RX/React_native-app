import React from 'react'
import { View , StyleSheet } from 'react-native'
import { Link , Stack } from 'expo-router'
export default function notFoundScreen() {
  return (
    <>
        <Stack.Screen options={{ title : 'Oops No Found'}} />
        <View style={styles.container}> 
            <Link href="/" style={styles.button}>
                Go back to Home screen
            </Link>
        </View>
    
    
    </>
  )
   
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center'

    },
    button:{
        fontSize: 20,
       textDecorationLine: 'underline',
       color: '#fff'
    }
})
