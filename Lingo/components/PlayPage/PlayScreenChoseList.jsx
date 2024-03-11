import { StyleSheet, View } from "react-native";
import PlayScreenCard from "./PlayScreenCard";
import ImageSource from "./ImageSource";

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
            src={ImageSource.getImageSource(choice.icon)}
            text={choice.text}
            onPress={() => handleCardPress(choice.icon)}
            isPressed={pressedCard === choice.icon}
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
