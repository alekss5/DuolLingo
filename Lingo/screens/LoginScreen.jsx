import React, { useEffect, useState } from "react";

import { StyleSheet, Text, TextInput, SafeAreaView, View } from "react-native";
import { Button } from "react-native-paper";
import { BSON } from "realm";
import { useRealm } from "@realm/react";
import { GlobalStyles } from "../constants/Colors";
import { postLoginUser } from "../utils/http";

export default function LoginScreen({ navigation }) {
  const realm = useRealm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    setIsButtonDisabled(email === "" || password === "");
  }, [email, password]);

  const handleLogin = async () => {
    if (!isValidEmail(email)) {
      setErrorText("Invalid email");
    } else {
      const loginUser = await postLoginUser({
        email: email.toLocaleLowerCase(),
        password: password,
      });
      if (loginUser.status === 200) {
        realm.write(() => {
          realm.deleteAll();

          realm.create("User", {
            _id: new BSON.ObjectId(),
            email: email,
            password: password,
          });
        });
        navigation.navigate("BottomTabs");
      } else {
        setErrorText("Invalid email or password");
      }
    }
  };

  const forgotPassword = () => {};

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={[
          styles.input,
          { borderTopLeftRadius: 5, borderTopRightRadius: 5, marginTop: 20 },
        ]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail} // Changed to handleEmailChange
      />
      <TextInput
        style={[
          styles.input,
          {
            borderTopColor: "white",
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          },
        ]}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <Button
        mode="outlined"
        textColor={GlobalStyles.colors.black}
        buttonColor={GlobalStyles.colors.succesGreen}
        onPress={handleLogin}
        style={styles.button}
        disabled={isButtonDisabled}
      >
        <Text style={{ fontSize: 16 }}>SIGN IN</Text>
      </Button>
      <Text style={{ color: GlobalStyles.colors.errorRed }}>{errorText}</Text>
      <Button onPress={forgotPassword}>
        <Text style={{ fontSize: 16, color: GlobalStyles.colors.iosBlue }}>
          Forgot password
        </Text>
      </Button>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            color: GlobalStyles.colors.gray,
          }}
        >
          By signing in on Duolingo, you agree to our Terms and Privacy Policy
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    width: "90%",
    height: 40,
    borderColor: GlobalStyles.colors.gray,
    backgroundColor: GlobalStyles.colors.ligthGray,
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 30,
    borderRadius: 8,
    marginVertical: 15,
  },
});
