import React, { useRef, useEffect, useState,useCallback } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/Colors";
import { IconButton } from "react-native-paper";
import { shareContent } from "../../utils/share";
import ContinueButton from "../UI/ContinueButton";

export default function ContinueButtonVew({
  shareMessage,
  isPressedCard,
  isCorrect,
  onContinuePress,
}) {
  const translateYAnim = useRef(new Animated.Value(100)).current;
  const [isContinuePressed, setIsContinuePressed] = useState(false);
  let containerColor = [styles.buttonContainer];

  let buttonColor;
  useEffect(() => {
    if (isPressedCard || isContinuePressed) {
      Animated.spring(translateYAnim, {
        toValue: isPressedCard ? 100 : 0,
        useNativeDriver: true,
      }).start();
    }
  }, [isContinuePressed, isPressedCard]);

  const onShare = useCallback(() => {
    shareContent(shareMessage);
  }, [shareMessage]);

  const submitAnswer = useCallback(() => {
    setIsContinuePressed((prevState) => !prevState);
    onContinuePress();
  }, [onContinuePress]);


  if (!isPressedCard) {
    buttonColor = GlobalStyles.colors.succesDarkGreen;
  }

  if (isContinuePressed && isCorrect === true) {
    containerColor.push(styles.buttonContainerPressed);
    buttonColor = GlobalStyles.colors.succesDarkGreen;
  } else if (isContinuePressed && isCorrect === false) {
    containerColor.push(styles.buttonWrongColor);
    buttonColor = GlobalStyles.colors.errorRed;
  }

  return (
    <>
      <View style={containerColor}>
        <Animated.View style={{ transform: [{ translateY: translateYAnim }] }}>
          {isContinuePressed && (
            <View style={styles.container}>
              <View style={styles.container}>
                <MaterialCommunityIcons
                  name="check-circle"
                  size={30}
                  color={
                    isCorrect
                      ? GlobalStyles.colors.succesDarkGreen
                      : GlobalStyles.colors.errorRed
                  }
                />
                <Text
                  style={[
                    styles.successText,
                    isCorrect
                      ? { color: GlobalStyles.colors.succesGreen }
                      : { color: GlobalStyles.colors.errorRed },
                  ]}
                >
                  {isCorrect ? "Nise!" : "Wrong, give it another try"}
                </Text>
              </View>

              <IconButton
                icon="share"
                iconColor={
                  (isCorrect && GlobalStyles.colors.succesDarkGreen) ||
                  GlobalStyles.colors.errorRed
                }
                style={styles.shareButton}
                size={27}
                onPress={onShare}
              />
            </View>
          )}
        </Animated.View>
      </View>
      <ContinueButton
        color={buttonColor}
        isPressedCard={isPressedCard}
        submitAnswer={submitAnswer}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 6,
    marginTop: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: "auto",
    height: "17%",
  },
  buttonContainerPressed: {
    backgroundColor: GlobalStyles.colors.succesLightGreen,
  },
  buttonWrongColor: {
    backgroundColor: GlobalStyles.colors.errorLightRed,
  },

  successText: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 5,
  },
});
