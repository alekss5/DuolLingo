import React, { useState, useRef, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/Colors";
import {
  increaseUnitNumber,
  selectHomePathData,
  setSectionInformation,
} from "../../redux/homePathReducer";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "react-native-paper";
import { hardVibration, lightVibration } from "../../utils/vibrationPaterns";
import { selectHearts, selectToken } from "../../redux/userReducer";
import { getLessonById } from "../../utils/http";
import { setLesson } from "../../redux/lessonReducer";

export default function HomeTestPath() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [allSectionNames, setAllSectionNames] = useState();
  const [dividerPositions, setDividerPositions] = useState([]);

  const scrollViewRef = useRef(null);

  const deviation = 7;

  const homePathData = useSelector(selectHomePathData);
  const hearts = useSelector(selectHearts);
  const token = useSelector(selectToken)
  
  useEffect(() => {
    const sectionNames = homePathData.map((item) => item.sectionName);

    dispatch(
      setSectionInformation({
        sectionName: sectionNames[0],
        sectionNumber: homePathData[0].sectionNumber,
        unitNumber: homePathData[0].sectionUnitNumber,
      })
    );
    setAllSectionNames(sectionNames);
  }, [homePathData]);

  const renderIcons = () => {
    const icons = [];
    homePathData.forEach((item, index) => {
      const { lessonIds = [], sectionName } = item;
      // setSectionName(item.sectionName)

      for (let i = 0; i < lessonIds.length; i++) {
        const angle = index * (360 / 18) + i * (360 / 18);
        const radius = deviation * index;

        const translateX = radius * Math.cos((angle * Math.PI) / 180);
        const translateY = radius * Math.sin((angle * Math.PI) / 180);

        icons.push(
          <TouchableOpacity
            key={lessonIds[i]._id}
            onPress={() => navigateToDetails(lessonIds[i]._id)}
            disabled={lessonIds[i].index === 0}
          >
            {lessonIds[i].index === 5 ? (
              <MaterialCommunityIcons
                name="check-circle-outline"
                size={80}
                color={GlobalStyles.colors.succesGreen}
                style={[
                  styles.icons,
                  {
                    padding: 20,
                    transform: [{ translateX: translateX }, { translateY: 10 }],
                  },
                ]}
              />
            ) : (
              <MaterialCommunityIcons
                name="star-circle-outline"
                size={80}
                color={
                  lessonIds[i].index === 0
                    ? "grey"
                    : GlobalStyles.colors.succesGreen
                }
                style={[
                  styles.icons,
                  {
                    padding: 20,
                    transform: [{ translateX: translateX }, { translateY: 10 }],
                  },
                ]}
              />
            )}
          </TouchableOpacity>
        );
        if (i + 1 === lessonIds.length) {
          const indexd = index + 1;
          icons.push(
            <Divider
              key={`divider-${index}`}
              style={styles.divider}
              onLayout={(event) => handleDividerLayout(event, index)}
            />
          );
          icons.push(
            <Text key={`divider-text-${index}`} style={styles.dividerText}>
              {homePathData[indexd]?.sectionName}
            </Text>
          );
        }
      }
    });
    return icons;
  };

  const navigateToDetails = async (id) => {
    if (hearts === 0) {
      hardVibration();
      navigation.navigate("NoHeartsScreen");
    } else {
      lightVibration();
      const lesson = await getLessonById({ lessonId: id,token:token });
      dispatch(setLesson(lesson.data));
      navigation.navigate("PlayScreen");
    }
  };

  const handleDividerLayout = (event, index) => {
    const { y } = event.nativeEvent.layout;
    setDividerPositions((prevPositions) => [
      ...prevPositions,
      { index, position: y },
    ]);
  };

  let i = 0;
  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    //console.log(Math.round(offsetY))
    //console.log(Math.round(dividerPositions[i].position))

    //  console.log(dividerPositions);

    if (Math.round(dividerPositions[i].position) === Math.round(offsetY)) {
      dispatch(increaseUnitNumber());
      i++;
    }
    // const visibleDividers = dividerPositions.filter(
    //   (divider) => divider.position > offsetY
    // );

    // if (visibleDividers.length > 0) {
    //   const firstVisibleDivider = visibleDividers[0];
    //   const distanceFromTop = firstVisibleDivider.position - offsetY;

    //   // console.log(
    //   //   "First visible divider index:",
    //   //   firstVisibleDivider.index,
    //   //   "position:",
    //   //   firstVisibleDivider.position
    //   // );

    //   // Check if the first visible divider is within 15 pixels from the top of the screen
    //   // if (distanceFromTop <= 15) {
    //   //   // Increase the unit number
    //   //   dispatch(increaseUnitNumber());
    //   // }
    // }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      <View style={styles.container}>{renderIcons()}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  icons: {},
  divider: {
    height: 2,
    width: "95%",
  },
  dividerText: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "400",
    color: "gray",
    width: 300,
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
