import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/Colors";

export default function CurrentLessonBanner() {
  return (
    <View style={styles.container}>
      <Text style={styles.section}>Section 1, Unit 1</Text>
      <Text style={styles.title}>Order in a cafe </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    padding: 14,
    marginTop: 5,
    backgroundColor: GlobalStyles.colors.accentOrange,
    width: "90%",
    alignSelf: "center",
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  section: {
    fontSize: 18,
  
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});
