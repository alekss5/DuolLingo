import { SafeAreaView, StyleSheet,StatusBar, Text, View } from 'react-native'
import React from 'react'
import CountryFlag from 'react-native-country-flag'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TopNavBar() {
  return (

      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <CountryFlag isoCode="de" size={25} style={styles.flag} />
        </View>
        <View style={styles.rowContainer}>
          <MaterialCommunityIcons name='fire' size={30} color='orange' />
          <Text style={styles.steakText}>0</Text>
        </View>
        <View style={styles.rowContainer}>
          <MaterialCommunityIcons name='star-four-points-outline' size={30} color='lightblue' />
          <Text style={styles.pointsText}>234</Text>
        </View>
        <View style={styles.rowContainer}>
          <MaterialCommunityIcons name='heart' size={30} color='red' />
          <Text style={styles.heartText}> 5</Text>
        </View>
      </View>
  
  )
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20, 
    marginTop: 5,
    marginBottom: 10,
   
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  flag: {
    borderRadius: 6,
    width: 30,
  },
  heartText:{
    fontSize:20,
    color:'red',
    fontWeight:"500"
  },
  steakText:{
    color:'orange',
    fontSize:20,
    fontWeight:"500"
  },
  pointsText:{
    color:'lightblue',
    fontSize:20,
    fontWeight:"500"
  }
})