import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Vibration,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/Colors";

export default function HomeTestPath() {
  const numIcons = 17;
  const deviation = 13;
  const navigation = useNavigation();

  const renderIcons = () => {
    const icons = [];
    for (let i = 0; i < numIcons; i++) {
      const angle = i * (360 / numIcons);
      const radius = deviation * i;

      const translateX = radius * Math.cos((angle * Math.PI) / 180);
      const translateY = radius * Math.sin((angle * Math.PI) / 180);

      icons.push(
        <TouchableOpacity key={i} onPress={() => navigateToDetails(i)}>
          <MaterialCommunityIcons
            name="star-circle-outline"
            size={80}
            color={GlobalStyles.colors.succesGreen}
            style={[
              styles.icons,
              {
                padding: 20,
                transform: [{ translateX: translateX }, { translateY: 1 }],
              },
            ]}
          />
        </TouchableOpacity>
      );
    }
    return icons;
  };

  const navigateToDetails = (iconIndex) => {
    Vibration.vibrate(3);
    navigation.navigate("PlayScreen", { iconIndex });
    // navigation.navigate('FinishScreen', { iconIndex });
  };

  return (
    <ScrollView>
      <View style={styles.container}>{renderIcons()}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  icons: {},
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
