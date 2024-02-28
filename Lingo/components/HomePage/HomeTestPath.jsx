import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Vibration,
  Text
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/Colors";
import { selectHomePathData, selectLastLessonId } from "../../redux/homePathReducer";
import { useSelector } from "react-redux";

export default function HomeTestPath() {
  const navigation = useNavigation();

  const numIcons = 20;
  const deviation = 7;

  const homePathData = useSelector(selectHomePathData)
  //const lastLessonId = useSelector(selectLastLessonId)
  
const renderIcons = () => {
  const icons = [];
  homePathData.forEach((item, index) => {
    const { lessonId } = item;
    for (let i = 0; i < lessonId.length; i++) {
      const angle = (index * (360 / numIcons)) + (i * (360 / lessonId.length));
      const radius = deviation * index;

      const translateX = radius * Math.cos((angle * Math.PI) / 180);
      const translateY = radius * Math.sin((angle * Math.PI) / 180);

      icons.push(
        <TouchableOpacity key={lessonId[i]} onPress={() => navigateToDetails(lessonId[i])}>
          <MaterialCommunityIcons
            name="star-circle-outline"
            size={80}
            color={GlobalStyles.colors.succesGreen}
            style={[
              styles.icons,
              {
                padding: 20,
                transform: [{ translateX: translateX }, { translateY: translateY }],
              },
            ]}
          />
        </TouchableOpacity>
      );
      if((i+1) ===lessonId.length) {
     
        icons.push(<Text>sdf</Text>)
      }
    }
  });
  return icons;
};

  const navigateToDetails = (id) => {
    Vibration.vibrate(3);
    console.log(id)
    navigation.navigate("PlayScreen", { id });

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
