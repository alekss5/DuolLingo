import { StyleSheet, SafeAreaView } from "react-native";
import { useState } from "react";
import { GlobalStyles } from "../constants/Colors";
import TopNavBar from "../components/HomePage/TopNavBar";
import CurrentLestonBanner from "../components/HomePage/CurrentLestonBanner";
import HomeTestPath from "../components/HomePage/HomeTestPath";
import HeartsModal from "../components/Modals/HeartsModal";
import { mediumVibration } from "../utils/vibrationPaterns";

export default function HomeScreen({ navigation }) {
  const [heartsModal, setHeartsModal] = useState(false);

  function openHeartsModal() {
   mediumVibration()
    setHeartsModal(true);
    // fetch("http://localhost:8080/auth/", {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     name: "Aleksandar Grigorov",
    //     email: "aleksndar305@gmail.com",
    //     password: "5505667Sa",
    //     currentCourse: "DE",
        
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
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
