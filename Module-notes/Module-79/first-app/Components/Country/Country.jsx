import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Country({country , index}) {
  return (
    <View key={index}>
      <Text style={styles.countryName}>{country.name.official}</Text>
      <Image
          source={{
            uri: `${country.flags.png}`,
          }}
          style={styles.image}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    countryName:{
        fontSize:20 ,
        textAlign:'center'
    },
    image:{
        width: 'auto', 
        height: 300 ,
        marginTop: 20,
        marginBottom:20
    }
})