import { StyleSheet, Text, View,Pressable,TouchableOpacity } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function StatisticsButton({ icon,iconColor, boldText, grayText, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.buttonContainer}>
      <View style={styles.rowContainer}>
        {icon && <MaterialCommunityIcons name={icon} size={24} color={iconColor} />} 
        <Text style={styles.boldText}>{boldText}</Text>
      </View>
      <Text style={styles.grayText}>{grayText}</Text>
    </View>
  </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  buttonContainer: {
    minWidth:'47%',
    padding: 16,
    borderWidth: 1,
    borderColor:"gray",
    backgroundColor: 'transparent', 
    borderRadius: 8,
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  boldText: {
    marginLeft: 8,
    fontWeight: 'bold',
  },
  grayText: {
    color: 'gray',
  },
});