import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,

} from "react-native";
import CountryFlag from "react-native-country-flag";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useSelector } from "react-redux";
import {
  selectCurrentCourse,
  selectHearts,
  selectPoints,
  selectDaysStreak,
} from "../../redux/userReducer";

export default function TopNavBar({openHeartsModal}) {
  const language = useSelector(selectCurrentCourse);
  const hearts = useSelector(selectHearts);
  const points = useSelector(selectPoints);
  const streak = useSelector(selectDaysStreak);
 
  const displayLanguage = language || "DE"; 
  const displayHearts = hearts !== undefined ? hearts : 0;
  const displayPoints = points !== undefined ? points : 0;
  const displayStreak = streak !== undefined ? streak : 0;

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <CountryFlag isoCode={displayLanguage} size={25} style={styles.flag} />
      </View>
      <View style={styles.rowContainer}>
        <MaterialCommunityIcons name="fire" size={30} color="orange" />
        <Text style={styles.steakText}>{displayStreak}</Text>
      </View>
      <View style={styles.rowContainer}>
        <MaterialCommunityIcons
          name="star-four-points-outline"
          size={28}
          color="lightblue"
        />
        <Text style={styles.pointsText}>{displayPoints}</Text>
      </View>
      <TouchableOpacity onPress={openHeartsModal}>
        <View style={styles.rowContainer}>
          <MaterialCommunityIcons name="heart" size={30} color="red" />
          <Text style={styles.heartText}> {displayHearts}</Text>
        </View>
      </TouchableOpacity>

    
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
    fontSize: 18,
    color: "red",
    fontWeight: "500",
  },
  steakText: {
    color: "orange",
    fontSize: 18,
    fontWeight: "500",
  },
  pointsText: {
    color: "lightblue",
    fontSize: 18,
    fontWeight: "500",
  },
});
