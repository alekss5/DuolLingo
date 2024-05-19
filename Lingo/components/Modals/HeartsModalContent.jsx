import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Divider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectHearts, selectHeartDecreaseTime } from "../../redux/userReducer";
import PointsIconText from "../UI/PointsIconText";
import { buyHearts } from "../../redux/userReducer";
import { useNavigation } from "@react-navigation/native";

export default function HeartsModalContent({ heartIcons, closeModal }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const heartsCount = useSelector(selectHearts);
  const heartsDecreaseTime = useSelector(selectHeartDecreaseTime);
  const currentTime = new Date();
  const timeElapsed = currentTime - new Date(heartsDecreaseTime);

  const minutess = 240 - Math.floor(timeElapsed / (1000 * 60));
  const hours = Math.floor(minutess / 60);

  const renderIcons = () => {
    const heartIcons = [];
    for (let i = 0; i < heartsCount; i++) {
      heartIcons.push(
        <MaterialCommunityIcons
          key={i}
          name="heart"
          size={45}
          color="red"
          style={{ marginHorizontal: 7 }}
        />
      );
    }
    for (let i = 0; i < 5 - heartsCount; i++) {
      heartIcons.push(
        <MaterialCommunityIcons
          key={i + 5}
          name="heart"
          size={45}
          color="pink"
          style={{ marginHorizontal: 7 }}
        />
      );
    }
    return heartIcons;
  };

  function buyHeartsHandler() {
    dispatch(buyHearts());
  }
  function goPremium() {
    closeModal();
    navigation.navigate("CommingSoonScreen");
  }

  let nextHeartTime = <>Next Heart after {hours} hours</>;
  if (hours === 0) {
    nextHeartTime = <>Next Heart after {minutess} minutes</>;
  }

  return (
    <View>
      {heartIcons && (
        <View style={styles.heartsContainer}>{renderIcons()}</View>
      )}
      <Text style={styles.heartsCountText}>
        {" "}
        {heartsCount === 5 ? " You have full hearts" : <>{nextHeartTime}</>}
      </Text>
      <Text style={{ textAlign: "center", marginTop: 10 }}>
        Keep on learning
      </Text>
      <TouchableOpacity
        onPress={buyHeartsHandler}
        disabled={heartsCount === 5}
        style={styles.pressbleContainer}
      >
        <View
          style={[
            styles.buttonContainer,
            heartsCount == 5 && { backgroundColor: "gray" },
          ]}
        >
          <MaterialCommunityIcons
            name="heart"
            size={20}
            color="red"
            style={{ padding: 4 }}
          />
          <Text style={{ flex: 1, padding: 5, fontWeight: "bold" }}>
            REFILL HEARTS
          </Text>
          <PointsIconText value="500" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={goPremium}>
        <View style={[styles.buttonContainer, { backgroundColor: "blue" }]}>
          <MaterialCommunityIcons
            name="heart-plus"
            size={20}
            color="white"
            style={{ padding: 4 }}
          />
          <Text
            style={{
              flex: 1,
              padding: 5,
              fontWeight: "bold",
              color: "white",
            }}
          >
            UNLIMITED HEARTS
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <MaterialCommunityIcons
          name="heart"
          size={20}
          color="red"
          style={{ padding: 4 }}
        />
        <Text style={{ flex: 1, padding: 5, fontWeight: "bold" }}>
          PRACTICE TO EARN HEARTS
        </Text>
      </View>

      <Divider style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 2,
    width: "95%",
  },
  heartsContainer: {
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  heartsCountText: {
    marginTop: 5,
    fontSize: 18,

    fontWeight: "bold",
    textAlign: "center",
  },
  pressbleContainer: {
    minWidth: "90%",
  },
  buttonContainer: {
    marginTop: 15,
    padding: 10,
    flexDirection: "row",
    borderWidth: 2.5,
    borderRadius: 14,
    borderColor: "rgba(0, 0, 0, 0.3)",
  },
});
