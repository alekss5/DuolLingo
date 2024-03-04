import { StyleSheet, Text, Share, View } from "react-native";
import React, { useState } from "react";
import StatisticsButton from "../UI/StatisticsButton";

import CustomModal from "../UI/CustomModal";
import { selectDaysStreak,selectTotalXp } from "../../redux/userReducer";
import { useSelector } from "react-redux";
export default function Statistics() {
  const steak = useSelector(selectDaysStreak)
  const totalXp = useSelector(selectTotalXp)
  const [modalOpen, setModalOpen] = useState(false);
  const [pressedStatisticInfo, setPressedStatisticInfo] = useState();

  function handleButtonPress(icon, boldText, grayText,color,shareText,mainButtonText) {
    setPressedStatisticInfo({ icon, boldText, grayText,color,shareText,mainButtonText });
    setModalOpen(true);
  }

  const closeModal = () => setModalOpen(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Statistics</Text>
      <View style={styles.buttonRow}>
        <StatisticsButton
          icon="fire"
          iconColor="red"
          boldText={steak}
          grayText="Day streak"
          onPress={() => handleButtonPress("fire", "You' ve earned 0 Day Steak", "Play every day to keep your day streak!",'red',"I've earned 0 Day Steak","Share")}
        />
        <StatisticsButton
          icon="flash-outline"
          iconColor="orange"
          boldText={totalXp}
          grayText="Total XP"
          onPress={() => handleButtonPress("flash-outline", "You' ve earned 39 XP!", "Do more leassons to earn more XP!","orange","I've earned 39 XP points","Share")}
        />
      </View>
      <View style={styles.buttonRow}>
        <StatisticsButton
          icon="key"
          iconColor="orange"
          boldText="No current"
          grayText="Current League"
          onPress={() => handleButtonPress("key", "No current", "Current League",'orange',"","Share")}
        />
        <StatisticsButton
          icon="star-four-points-outline"
          iconColor="orange"
          boldText="0"
          grayText="Top 3 finishes"
          onPress={() => handleButtonPress("star-four-points-outline", "0", "Top 3 finishes",'orange',"","Share")}
        />
      </View>
      <CustomModal
        modalVisible={modalOpen}
        setModalVisible={closeModal}
        pressedStatisticInfo={pressedStatisticInfo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: "40%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
});
