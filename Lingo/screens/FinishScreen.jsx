import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ContinueButton from "../components/UI/ContinueButton";
import ProgresSegment from "../components/UI/ProgresSegment";
import LottieView from "lottie-react-native";
import Animation from "../Images/Animation.json";
import { formatTimeFromMStoMin } from "../utils/globalFunctions";

export default function FinishScreen({ navigation,route }) {

  const { elapsedTime,totalCorrectAnswers,totalQuestionsCount } = route.params;
  const { minutes, seconds } = formatTimeFromMStoMin(elapsedTime);


  //console.log(totalCorrectAnswers)
  function goBack() {
    navigation.navigate("HomeScreen");
  }

  let scoreText;
  
  const percentageCorrect = ((totalCorrectAnswers+1) / totalQuestionsCount) * 100;

  if (percentageCorrect === 100) {
    scoreText = "PERFECT";
  } else if (percentageCorrect > 50) {
    scoreText = "GOOD";
  } else {
    scoreText = "IMPROVE";
  }
  let scorePercentage = Math.round(percentageCorrect) 



  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.animationContainer}>
          <LottieView
            source={Animation}
            autoPlay={true}
            loop={false}
            style={styles.animation}
          />
        </View>
        <Text style={styles.title}>Lession complete!</Text>
        <View style={styles.progressSummaryContainer}>
          <ProgresSegment
            title="Total XP"
            color="#ffc800"
            icon="star-four-points-outline"
            score={30}
          />
          <ProgresSegment
            title="SPEED"
            color="#4ac0f8"
            icon="clock-outline"
            score={minutes}
            second={seconds}
            additionsalSymbol =':'
          />
          <ProgresSegment
            title={scoreText}
            color="#93d334"
            icon="star-circle"
            score={scorePercentage}
            additionsalSymbol ='%'
          />
        </View>
      </SafeAreaView>
      <ContinueButton isPressedCard={false} submitAnswer={goBack} color='#4ac0f8'/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginVertical: 40,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
    color: "#ffc800",
  },
  progressSummaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 1,
    marginTop: 5,
    marginBottom: 10,
    marginHorizontal: 9,
  },
  animationContainer: {
    marginTop: "25%",

    alignContent: "center",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: "100%",
    height: 250,
  },
});
