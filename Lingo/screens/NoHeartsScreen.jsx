import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import HeartAnimation from "../Images/HeartBrokenAnimation.json";
import ContinueButton from "../components/UI/ContinueButton";
import { successVibration } from "../utils/vibrationPaterns";
import HeartsModalContent from "../components/Modals/HeartsModalContent";

export default function NoHeartsScreen({ navigation }) {
  const goBack = () => {
    successVibration();
    navigation.navigate("HomeScreen");
  };
  return (
    <SafeAreaView>
   
       
        <View style={styles.animationContainer}>
          <LottieView
            source={HeartAnimation}
            autoPlay
            loop={true}
            style={styles.animation}
          />
        </View>
        <Text style={styles.titile}>You don't have Hearts </Text>
        <View style={styles.mainContainer}>
        <HeartsModalContent heartsIcon={false}/>
      </View>
      <ContinueButton
        isPressedCard={false}
        submitAnswer={goBack}
        color="blue"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titile: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "400",
    marginVertical:'6%',
  },
  mainContainer: {
    height:'58%',
    width:'90%',
    marginLeft:'5%'
  },
  animationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: 300,
    height: 260,
  },
});
