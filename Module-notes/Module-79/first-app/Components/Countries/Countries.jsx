import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Country from '../Country/Country'

export default function Countries() {
    const [countries, setCountries] = useState([])
    const [searched, setSearched] = useState([])
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
      .then(res=>res.json())
      .then(data=>{
          setSearched(data)
          setCountries(data)
        })
    }, [])
    const handleSearch =(text)=>{
        const filteredCountries = countries.filter(country=> country.name.common.includes(text) || country.name.official.includes(text))
        setSearched(filteredCountries);
        
    }
  return (
    <View>
      <Text style={styles.header}>There are {countries.length} countries in the world</Text>
      <TextInput 
        style={styles.inputField}
        onChangeText={handleSearch}
        placeholder="Type your name here"
      />
      <ScrollView>
          {
              searched?.map((country,index)=><Country country={country} key={index}/>)
          }
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    header:{
        color: '#226597',
        fontSize:20,
        backgroundColor:'#fff',
        fontWeight:'600',
        marginTop:30,
        marginBottom:30,
        marginRight:20,
        marginLeft:20
    },
    inputField:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
  });
