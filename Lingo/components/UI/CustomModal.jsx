import React, { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { BlurView } from "expo-blur";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { GlobalStyles } from "../../constants/Colors";
import { shareContent } from "../../utils/share";
import { useNavigation } from "@react-navigation/native";
export default function CustomModal({
  modalVisible,
  setModalVisible,
  pressedStatisticInfo,
}) {
  const { icon, boldText, grayText, color, shareText, mainButtonText } =
    pressedStatisticInfo || {};
  const navigate = useNavigation();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
      style={styles.modal}
    >
      <BlurView style={styles.absolute} intensity={10} tint="light" />
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <MaterialCommunityIcons name={icon} size={140} color={color} />
          <Text style={styles.modalText}>{boldText}</Text>
          <Text style={styles.grayText}>{grayText}</Text>

          <Button
            mode="outlined"
            textColor={GlobalStyles.colors.black}
            buttonColor={
              mainButtonText === "Share"
                ? GlobalStyles.colors.accentOrange
                : GlobalStyles.colors.blue
            }
            onPress={() => {
              if (mainButtonText === "Share") {
                shareContent(shareText);
              } else {
                setModalVisible(false);
              }
            }}
            style={styles.button}
          >
            {mainButtonText}
          </Button>
          <Button
            mode="text"
            textColor={GlobalStyles.colors.accentOrange}
            onPress={() => {
              if (mainButtonText === "Share") {
                setModalVisible(false);
              } else {
                setModalVisible(false);
                navigate.goBack();
              }
            }}
            style={styles.button}
          >
            Dismis
          </Button>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  absolute: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modal: {},
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    width: "100%",
    height: "50%",
    alignSelf: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,

    width: "100%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    padding: 7,
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  grayText: {
    textAlign: "center",
    color: GlobalStyles.colors.gray,
    fontSize: 18,
    paddingBottom: "10%",
  },
});
