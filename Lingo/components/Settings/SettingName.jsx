import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SettingName({settingName}) {
  return (
      <Text style={styles.settingsText}>{settingName}</Text>
  )
}

const styles = StyleSheet.create({
    settingsText: {
        fontSize: 18,
        fontWeight:'500',
    }
})