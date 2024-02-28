import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AnimatedNumbers from "react-native-animated-numbers";
import { useEffect, useState } from "react";

export default function ProgresSegment({
  title,
  color,
  icon,
  score,
  second,
  additionsalSymbol,
  dealay,
}) {
  const [animateToNumber, setAnimateToNumber] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (additionsalSymbol === ":") {
        setAnimateToNumber(animateToNumber + second);
      } else {
        setAnimateToNumber(animateToNumber + score);
      }
    }, dealay);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.scoreContainer}>
        <MaterialCommunityIcons
          name={icon}
          size={28}
          color={color}
          style={styles.icon}
        />
        {additionsalSymbol !== ":" && (
          <AnimatedNumbers
            includeComma
            animateToNumber={animateToNumber}
            fontStyle={{
              fontSize: 20,
              fontWeight: "600",
              paddingTop: 3,
              color: `${color}`,
            }}
          />
        )}
        {additionsalSymbol === ":" && (
          <AnimatedNumbers
            includeComma
            animateToNumber={score}
            fontStyle={{
              fontSize: 20,
              fontWeight: "600",
              paddingTop: 3,
              color: `${color}`,
            }}
          />
        )}
        {additionsalSymbol && (
          <Text style={[styles.score, { color: color }]}>
            {additionsalSymbol}
          </Text>
        )}
        {additionsalSymbol === ":" && (
          <AnimatedNumbers
            includeComma
            animateToNumber={animateToNumber}
            fontStyle={{
              fontSize: 20,
              fontWeight: "600",
              paddingTop: 3,
              color: `${color}`,
            }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    height: 90,
    minWidth: 130,
    padding: 4,
  },
  title: {
    marginTop: 4,
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },

  scoreContainer: {
    marginTop: 10,
    height: 48,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#FFFF",
    borderRadius: 10,
  },
  score: {
    fontSize: 18,
    fontWeight: "600",
    padding: 4,
  },
});
