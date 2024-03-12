import React, { useEffect, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
} from "react-native";
import ContinueButton from "../components/UI/ContinueButton";
import ProgresSegment from "../components/UI/ProgresSegment";
import LottieView from "lottie-react-native";
import Animation from "../Images/Animation.json";
import { formatTimeFromMStoMin } from "../utils/globalFunctions";
import { useDispatch } from "react-redux";
import { finish } from "../redux/userReducer";
import { successVibration } from "../utils/vibrationPaterns";

export default function FinishScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const { elapsedTime, totalCorrectAnswers, totalQuestionsCount } =
    route.params;
  const { minutes, seconds } = formatTimeFromMStoMin(elapsedTime);

  const progress1Anim = useRef(new Animated.Value(-100)).current;
  const progress2Anim = useRef(new Animated.Value(-100)).current;
  const progress3Anim = useRef(new Animated.Value(-100)).current;
  const opacity1Anim = useRef(new Animated.Value(0)).current;
  const opacity2Anim = useRef(new Animated.Value(0)).current;
  const opacity3Anim = useRef(new Animated.Value(0)).current;

  const percentageCorrect =
    ((totalCorrectAnswers + 1) / totalQuestionsCount) * 100;
  const scorePercentage = Math.round(percentageCorrect);
  useEffect(() => {
    const animateProgress = () => {
      Animated.sequence([
        animate(opacity1Anim, 1, 300),
        animate(progress1Anim, 0, 300),

        Animated.delay(300),
        animate(opacity2Anim, 1, 300),
        animate(progress2Anim, 0, 500),
        Animated.delay(300),
        animate(opacity3Anim, 1, 300),
        animate(progress3Anim, 0, 300),
      ]).start();
    };

    animateProgress();

    dispatch(finish({ xp: Math.round(120 * (scorePercentage / 100)) }));
  }, []);

  const animate = (animatedValue, toValue, duration) => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      easing: Easing.ease,
      useNativeDriver: true,
    });
  };

  const goBack = () => {
    successVibration();
    navigation.navigate("HomeScreen");
  };

  let scoreText;
  if (percentageCorrect === 100) {
    scoreText = "PERFECT";
  } else if (percentageCorrect > 50) {
    scoreText = "GOOD";
  } else {
    scoreText = "IMPROVE";
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.animationContainer}>
          <LottieView
            source={Animation}
            autoPlay
            loop={false}
            style={styles.animation}
          />
        </View>
        <Text style={styles.title}>Lesson complete!</Text>
        <View style={styles.progressSummaryContainer}>
          <Animated.View
            style={{
              transform: [{ translateY: progress1Anim }],
              opacity: opacity1Anim,
            }}
          >
            <ProgresSegment
              title="Total XP"
              color="#ffc800"
              icon="star-four-points-outline"
              score={30}
              dealay={350}
            />
          </Animated.View>
          <Animated.View
            style={{
              transform: [{ translateY: progress2Anim }],
              opacity: opacity2Anim,
            }}
          >
            <ProgresSegment
              title="SPEED"
              color="#4ac0f8"
              icon="clock-outline"
              score={minutes}
              second={seconds}
              additionsalSymbol=":"
              dealay={1000}
            />
          </Animated.View>
          <Animated.View
            style={{
              transform: [{ translateY: progress3Anim }],
              opacity: opacity3Anim,
            }}
          >
            <ProgresSegment
              title={scoreText}
              color="#93d334"
              icon="star-circle"
              score={scorePercentage}
              additionsalSymbol="%"
              dealay={1150 * 2}
            />
          </Animated.View>
        </View>

        <ContinueButton
          isPressedCard={false}
          submitAnswer={goBack}
          color="#4ac0f8"
        />
      </SafeAreaView>
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
    alignItems: "center",
  },
  animation: {
    width: "100%",
    height: 250,
  },
});
