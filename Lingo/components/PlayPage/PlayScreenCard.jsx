import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../../constants/Colors';

export default function PlayScreenCard({ icon, text, onPress, isPressed }) {
  return (
    <TouchableHighlight
      style={[styles.container, isPressed && styles.containerPressed]}
      onPress={onPress}
      underlayColor={GlobalStyles.colors.lightBlue}
    >
      <View>
        <MaterialCommunityIcons name={icon} size={120} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 2,
    width: '44%', 
    borderRadius: 10,
    borderColor: 'darkgray',
    marginBottom: 10,
    marginLeft:"4%",
  },
  containerPressed: {
    backgroundColor: GlobalStyles.colors.lightBlue,
  },
  icon: {
    alignSelf: 'center',
    paddingBottom: 20,
    opacity: 0.8,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
  },
});
