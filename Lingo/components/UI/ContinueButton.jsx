import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
export default function ContinueButton({ isPressedCard, submitAnswer,color }) {
  return (
    <Button
      disabled={isPressedCard}
      mode="contained"
      onPress={submitAnswer}
      style={[styles.continueButton, !isPressedCard && styles.pressed]}
      buttonColor={color}
    >
      CONTINUE
    </Button>
  );
}

const styles = StyleSheet.create({
  continueButton: {
    position: "absolute",
    fontWeight: "600",
    bottom: 40,
    alignSelf: "center",
    width: "90%",
  },
  pressed: {
    borderRadius: 8,
    borderBottomWidth: 3,
    borderEndEndRadius: 15,

    borderBottomColor: 'gray',
  },
});
