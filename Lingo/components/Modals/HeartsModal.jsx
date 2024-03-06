import React, { useRef, useEffect } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { Divider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectHearts } from "../../redux/userReducer";
import PointsIconText from "../UI/PointsIconText";

export default function HeartsModal({ isModalOpen, closeModal }) {
  const slideAnim = useRef(new Animated.Value(-100)).current;
  const heartsCount = useSelector(selectHearts);

  useEffect(() => {
    if (isModalOpen) {
      console.log("Modal open");
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isModalOpen, slideAnim]);

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

  return (
    <Modal
      visible={isModalOpen}
      transparent={true}
      animationType="slide"
      onRequestClose={closeModal}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={{ height: 100 }}>
          <View style={{ flex: 1 }} />
        </View>
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          styles.modalView,
          {
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View>
          <View style={styles.heartsContainer}>{renderIcons()}</View>
          <Text style={styles.heartsCountText}>
            {" "}
            {heartsCount === 5
              ? " You have full hearts"
              : "Next heart after 4 hours"}{" "}
          </Text>
          <Text style={{ textAlign: "center", marginTop: 10 }}>
            {" "}
            Keep on learning
          </Text>
          <View style={styles.buttonContainer}>
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
      </Animated.View>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <View style={{ flex: 1 }} />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    borderRadius: 100,
  },
  modalView: {
    height: 330,
    backgroundColor: "white",
    alignItems: "center",
  },

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
  buttonContainer: {
    marginTop: 15,

    width: "90%",
    padding: 10,
    flexDirection: "row",
    borderWidth: 2.5,
    borderRadius: 14,
    borderColor: "rgba(0, 0, 0, 0.3)",
  },
});
