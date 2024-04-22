import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Divider } from "react-native-paper";
import { GlobalStyles } from "../constants/Colors";

export default function StartRegisterPage({ navigation }) {
  return (
    <SafeAreaView style={{marginTop:'60%'}}>
      <Text style={styles.mainText}>Already have an acount?</Text>
      <Text style={styles.secondaryText}>Pick up where you left off.</Text>
      <Button
        mode="outlined"
        textColor={GlobalStyles.colors.black}
        buttonColor={GlobalStyles.colors.succesGreen}
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        style={styles.button}
      >
        <Text style={{ fontSize: 16 }}>SIGN IN</Text>
      </Button>
      <Divider style={styles.divider} />
      <Text style={styles.mainText}>New to Duolingo?</Text>
      <Text style={styles.secondaryText}>Start learning now.</Text>
      <Button
        mode="outlined"
        textColor={GlobalStyles.colors.succesGreen}
        buttonColor={GlobalStyles.colors.black}
        onPress={() => {
          navigation.navigate("RegisterScreen");
        }}
        style={styles.button}
      >
        <Text style={{ fontSize: 16 }}>GET STARTED</Text>
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: { width: "90%", alignSelf: "center", marginBottom:30, },
  divider: {
    marginBottom:30,
    alignSelf: "center",
    height: 2,
    width: "95%",
  },
  mainText: {
    marginBottom:20,
    textAlign: "center",
    fontSize: 21,
    fontWeight: "600",
  },
  secondaryText: {
    marginBottom:20,
    textAlign: "center",
    fontSize: 18,
    color: GlobalStyles.colors.gray,
  },
});
