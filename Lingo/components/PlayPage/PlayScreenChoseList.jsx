import { StyleSheet, View } from "react-native";
import PlayScreenCard from "./PlayScreenCard";

export default function PlayScreenChoseList({
  pressedCard,
  handleCardPress,
  lesson,
}) {
  return (
    <>
      <View style={styles.cardContainer}>
        {lesson?.choises.map((choice, index) => (
          <PlayScreenCard
            key={index}
            icon="book"
            text={choice}
            onPress={() => handleCardPress(choice)}
            isPressed={pressedCard === choice}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-arund",
    paddingBottom: 15,
    marginBottom: 10,
    
  },
});
