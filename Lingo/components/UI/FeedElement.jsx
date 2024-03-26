import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/Colors";
import { calculateDaysSince } from "../../utils/globalFunctions";

export default function FeedElement({ imgSrc,feedType,publishedDate,mainText,secondaryText }) {
  const publishedSinse = calculateDaysSince(publishedDate)

  return (
    <View style={styles.elemetnContainer}>
      <Image source={{ uri:imgSrc}} style={styles.image} />
      <View style={{ padding: 10 }}>
        <View style={styles.feedTypeContainer}>
          <View
            style={{
              borderRadius: 8,
              backgroundColor: "#FAD5A5",
              marginVertical: 5,
              marginBottom: 10,
            }}
          >
            <Text style={styles.typeText}>{feedType}</Text>
          </View>
          <Text style={styles.publeshedDays}>{publishedSinse} days</Text>
        </View>
        <Text style={styles.mainText}>{mainText}</Text>
        <Text style={styles.secondryText}>{secondaryText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "auto",
    height: 200,
  },
  typeText: {
    padding: 5,
    fontSize: 15,

    color: GlobalStyles.colors.accentOrange,
  },
  feedTypeContainer: {
    flexDirection: "row",
  },
  publeshedDays: {
    marginTop: 5,
    padding: 5,
    color: "gray",
  },
  mainText: {
    marginBottom: 10,
    fontSize: 20,
  },
  secondryText: {
    fontSize: 19,
    color: GlobalStyles.colors.blue,
    fontWeight: "600",
  },
  elemetnContainer: {
    marginTop: 20,
    marginHorizontal: 10,
    borderWidth: 2.2,
    borderColor: "gray",
    borderRadius: 7,
  },
});
