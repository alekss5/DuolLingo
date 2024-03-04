import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, StyleSheet, Text, View, Animated } from "react-native";
import { ProgressBar, IconButton } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../constants/Colors";
import PlayScreenChoseList from "../components/PlayPage/PlayScreenChoseList";
import ContinueButtonVew from "../components/PlayPage/ContinueButtonVew";
import { useDispatch, useSelector } from "react-redux";
import Timer from "../utils/Timer";
import { selectLessons } from "../redux/lessonReducer";
import { selectHearts } from "../redux/userReducer";
import { decreceHearts } from "../redux/userReducer";
import CustomModal from "../components/UI/CustomModal";

export default function PlayScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const lessons = useSelector(selectLessons);
  const hearts = useSelector(selectHearts);
  const [modalOpen, setModalOpen] = useState(false);

  const [elapsedTime, setElapsedTime] = useState(0);
  const [pressedCard, setPressedCard] = useState(null);
  const [currentLessonIndex, setcurrentLessonIndex] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [countButtonPressed, setCountIsButtonPressed] = useState(0);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);

  const [isAnswersRowVisible, setIsAnswerRowVisible] = useState(false);
  const [answeredInARow, setAnswersInARow] = useState(0);

  const translateYAnim = useRef(new Animated.Value(-15)).current;

  function goBack() {
    setModalOpen(true);
    //navigation.goBack();
  }

  function playWord() {}

  const handleCardPress = (card) => {
    if (countButtonPressed < 1) {
      setPressedCard(card);
      setIsAnswerCorrect(card === lessons[currentLessonIndex].word);
    }
  };

  useEffect(() => {
    if(countButtonPressed === 1) {
      if(isAnswerCorrect){
        setIsAnswerRowVisible(true)
        setAnswersInARow((prev) => prev + 1);
      }
      else{
        setAnswersInARow(0);
      }
    }
  
    if (countButtonPressed === 2) {
      setIsAnswerRowVisible(false);
      setcurrentLessonIndex(currentLessonIndex + 1);
      setPressedCard(null);
      setCountIsButtonPressed(0);

      if (isAnswerCorrect) {
       
        setTotalCorrectAnswers((countAnswers) => countAnswers + 1);
        
      } else {

        dispatch(decreceHearts());
      }

      if (currentLessonIndex + 1 >= lessons.length) {
        setElapsedTime((elapsedTime) => elapsedTime + 1000);
        const totalQuestionsCount = lessons.length;
        navigation.navigate("FinishScreen", {
          elapsedTime,
          totalCorrectAnswers,
          totalQuestionsCount,
        });
      }
    }
  }, [countButtonPressed, isAnswerCorrect]);

  useEffect(() => {
    if (answeredInARow >= 2) {
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [answeredInARow, translateYAnim]);

  const handleContinuePress = () => {
    setCountIsButtonPressed(countButtonPressed + 1);
  };

  const handleTimerUpdate = (timeElapsed) => {
    setElapsedTime(timeElapsed);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <Timer onUpdate={handleTimerUpdate} style={styles.invisible} />
        <View style={styles.container}>
          <IconButton
            icon="close"
            iconColor={GlobalStyles.colors.gray}
            style={styles.closeButton}
            size={26}
            onPress={goBack}
          />
          <View style={styles.progressBarContainer}>
          
            {answeredInARow >= 2 && isAnswersRowVisible && (
              <Animated.View
                style={[
                  styles.answersRowContainer,
                  { transform: [{ translateY: translateYAnim }] },
                ]}
              >
                <Text style={styles.answersRowText}>{answeredInARow} IN A ROW</Text>
              </Animated.View>
            )}
          
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
          <Text style={styles.playWord}>{lessons[currentLessonIndex]?.word}</Text>
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
      <CustomModal
        modalVisible={modalOpen}
        setModalVisible={closeModal}
        pressedStatisticInfo={{icon:"emoticon-dead",boldText:"Wait, don't go",grayText:"You're right on track! If you quit now, you'll lose your progress.",color:'#59cc00',mainButtonText:"Keep Learning"}}
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
  answersRowContainer: {
    marginLeft: 10,
    marginBottom: 4,
  },
  answersRowText: {
    color:GlobalStyles.colors.accentOrange,
    fontWeight: "500",
    fontSize: 16,
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
  invisible: {
    display: "none",
  },
});
