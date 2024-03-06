import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function PointsIconText({value}) {
    
  return (
    
    <View style={styles.rowContainer}>
        <MaterialCommunityIcons
          name="star-four-points-outline"
          size={28}
          color="lightblue"
        />
        <Text style={styles.pointsText}>{value}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
      },
      pointsText: {
        color: "lightblue",
        fontSize: 18,
        fontWeight: "500",
      },
})