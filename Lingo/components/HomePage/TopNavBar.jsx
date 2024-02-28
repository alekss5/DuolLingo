import { StyleSheet, Text, View } from "react-native";
import CountryFlag from "react-native-country-flag";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useSelector } from "react-redux";
import {
 
  selectCurrentCourse,
  selectHearts,
  selectPoints,
  selectDaysStreak,
} from "../../redux/userReducer";

export default function TopNavBar() {
  
  const language = useSelector(selectCurrentCourse);
  const hearts = useSelector(selectHearts);
  const points = useSelector(selectPoints);
  const steak = useSelector(selectDaysStreak);

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <CountryFlag isoCode={language} size={25} style={styles.flag} />
      </View>
      <View style={styles.rowContainer}>
        <MaterialCommunityIcons name="fire" size={30} color="orange" />
        <Text style={styles.steakText}>{steak}</Text>
      </View>
      <View style={styles.rowContainer}>
        <MaterialCommunityIcons
          name="star-four-points-outline"
          size={30}
          color="lightblue"
        />
        <Text style={styles.pointsText}>{points}</Text>
      </View>
      <View style={styles.rowContainer}>
        <MaterialCommunityIcons name="heart" size={30} color="red" />
        <Text style={styles.heartText}> {hearts}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  flag: {
    borderRadius: 6,
    width: 30,
  },
  heartText: {
    fontSize: 20,
    color: "red",
    fontWeight: "500",
  },
  steakText: {
    color: "orange",
    fontSize: 20,
    fontWeight: "500",
  },
  pointsText: {
    color: "lightblue",
    fontSize: 20,
    fontWeight: "500",
  },
});
