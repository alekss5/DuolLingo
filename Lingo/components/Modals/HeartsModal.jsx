import React, { useRef, useEffect } from "react";
import {
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";

import HeartsModalContent from "./HeartsModalContent";
export default function HeartsModal({ isModalOpen, closeModal }) {
  const slideAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (isModalOpen) {
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
        <HeartsModalContent heartIcons={true} closeModal={closeModal} />
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
