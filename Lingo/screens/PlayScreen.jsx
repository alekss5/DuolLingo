import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ProgressBar, IconButton } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../constants/Colors";
import { useEffect, useState,useCallback } from "react";
import PlayScreenChoseList from "../components/PlayPage/PlayScreenChoseList";
import ContinueButtonVew from "../components/PlayPage/ContinueButtonVew";
import { useDispatch, useSelector } from "react-redux";
import Timer from "../utils/Timer";
import { selectLessons } from "../redux/lessonReducer";
import { selectHearts } from "../redux/userReducer";
import { decreceHearts } from "../redux/userReducer";
export default function PlayScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const lessons = useSelector(selectLessons);
  const hearts = useSelector(selectHearts);
 
  const [elapsedTime,setElapsedTime] = useState(0);
  const [pressedCard, setPressedCard] = useState(null);
  const [currentLessonIndex, setcurrentLessonIndex] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [countButtonPressed, setCountIsButtonPressed] = useState(0);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  

  function goBack() {
    navigation.goBack();
  }
  function playWord() {}

  const handleCardPress = useCallback((card) => {
    if (countButtonPressed < 1) {
      setPressedCard(card);
      if (card === lessons[currentLessonIndex].word) {
        setIsAnswerCorrect(true);
      } else {
        setIsAnswerCorrect(false);
      }
    }
  }, [countButtonPressed, currentLessonIndex, lessons]);

  useEffect(() => {
    if (countButtonPressed === 2) {
  
      setcurrentLessonIndex(currentLessonIndex + 1);
      setPressedCard(null);
      setCountIsButtonPressed(0);
      if(isAnswerCorrect === true){
        setTotalCorrectAnswers((countAnswers)=>countAnswers+1)
      }
      else {
        dispatch(decreceHearts())
      }

      if (currentLessonIndex+1 >= lessons.length) {
        setElapsedTime(elapsedTime=>elapsedTime+1000)
        const totalQuestionsCount = lessons.length;
        navigation.navigate("FinishScreen",{elapsedTime,totalCorrectAnswers,totalQuestionsCount});
      }
    }
  }, [countButtonPressed,isAnswerCorrect]);

  const handleContinuePress = () => {
    setCountIsButtonPressed(countButtonPressed + 1);
  };
  const handleTimerUpdate = (timeElapsed) => {
    setElapsedTime(timeElapsed);
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
      <Timer onUpdate={handleTimerUpdate} style={styles.invisible}/>
        <View style={styles.container}>
          <IconButton
            icon="close"
            iconColor={GlobalStyles.colors.gray}
            style={styles.closeButton}
            size={26}
            onPress={goBack}
          />
          <View style={styles.progressBarContainer}>
            <ProgressBar
              progress={currentLessonIndex / lessons.length}
              color="#41980a"
              style={styles.progressBar}
            />
          </View>
          <View style={styles.rowContainer}>
            <MaterialCommunityIcons name="heart" size={30} color="red" />
            <Text style={styles.heartText}> {hearts}</Text>
          </View>
        </View>
        <Text style={styles.headerText}>Select the correct answer</Text>
        <View style={styles.wrap}>
          <IconButton
            icon="volume-high"
            iconColor={GlobalStyles.colors.white}
            style={styles.volumeButton}
            size={26}
            onPress={() => playWord(lessons[currentLessonIndex]?.word)}
          />
          <Text style={styles.playWord}>
            {lessons[currentLessonIndex]?.word}
          </Text>
        </View>

        <PlayScreenChoseList
          lesson={lessons[currentLessonIndex]}
          pressedCard={pressedCard}
          handleCardPress={handleCardPress}
        />
      </SafeAreaView>
      <ContinueButtonVew
        isCorrect={isAnswerCorrect}
        isPressedCard={!pressedCard}
        shareMessage={
          "React Native | A framework for building native apps using React"
        }
        onContinuePress={handleContinuePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 1,
    marginTop: 5,
    marginBottom: 10,
  },
  headerText: {
    padding: 15,
    fontSize: 24,
    fontWeight: "500",
  },
  wrap: {
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: "10%",
  },

  progressBarContainer: {
    width: "70%",
  },
  progressBar: {
    height: 16,
    borderRadius: 10,
  },
  lessonContainer: {},
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  playWord: {
    fontSize: 22,
    fontWeight: "400",
  },
  heartText: {
    fontSize: 18,
    color: "red",
    fontWeight: "500",
  },
  volumeButton: {
    backgroundColor: GlobalStyles.colors.blue,
  },
  invisible:{
    display: "none",

  }
});
