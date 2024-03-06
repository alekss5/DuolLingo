import { StyleSheet, SafeAreaView, View, Touchable } from "react-native";
import {  useState } from "react";
import { GlobalStyles } from "../constants/Colors";
import TopNavBar from "../components/HomePage/TopNavBar";
import CurrentLestonBanner from "../components/HomePage/CurrentLestonBanner";
import HomeTestPath from "../components/HomePage/HomeTestPath";

import HeartsModal from "../components/Modals/HeartsModal";


export default function HomeScreen({ navigation }) {
  const [heartsModal, setHeartsModal] = useState(false);

  function openHeartsModal() {
    setHeartsModal(true);
  }

  function closeHeartsModal() {
    setHeartsModal(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopNavBar navigation={navigation} openHeartsModal={openHeartsModal} />
      <HeartsModal isModalOpen={heartsModal} closeModal={closeHeartsModal} />

      <CurrentLestonBanner />

      <HomeTestPath />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.black,
  },
});
