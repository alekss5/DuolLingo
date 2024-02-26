import { StyleSheet, View } from "react-native";
import React from "react";
import ProfileImage from "../components/Profile/ProfileImage";
import { GlobalStyles } from "../constants/Colors";
import ProfileInformation from "../components/Profile/ProfileInformation";

import Statistics from "../components/Profile/Statistics";
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ProfileImage />
      <ProfileInformation />
      <Statistics />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.darkGreen,
    flex: 1,
  },
});
