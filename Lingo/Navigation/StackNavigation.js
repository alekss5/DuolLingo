import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigation from "./BottomTabsNavigation";
import SettingsScreen from "../screens/SettingsScreen";
import PlayScreen from "../screens/PlayScreen";
import FinishScreen from "../screens/FinishScreen";

import AddFrendsModal from "../components/Modals/AddFrendsModal";
import HeartsModal from "../components/Modals/HeartsModal";
import { useDispatch } from "react-redux";
import { setLesson } from "../redux/lessonReducer";
import { loginUser } from "../redux/userReducer";
import { setHomePathData } from "../redux/homePathReducer";
import NoHeartsScreen from "../screens/NoHeartsScreen";
import CommingSoonScreen from "../screens/CommingSoonScreen";

const Stack = createStackNavigator();

export default function StackNavigation() {
  const dispatch = useDispatch();
  const lesson = [
    {
      word: "Beer",
      choises: [
        { text: "Milch", icon: "Milk" },
        { text: "Tee", icon: "Tea" },
        { text: "Brot", icon: "Bread" },
        { text: "Bier", icon: "Beer" },
      ],
    },
    {
      word: "Milk",
      choises: [
        { text: "Bier", icon: "Beer" },
        { text: "Milch", icon: "Milk" },
        { text: "Brot", icon: "Bread" },
        { text: "Tee", icon: "Tea" },
      ],
    },
    {
      word: "Bread",
      choises: [
        { text: "Milch", icon: "Milk" },
        { text: "Bier", icon: "Beer" },
        { text: "Tee", icon: "Tea" },
        { text: "Brot", icon: "Bread" },
      ],
    },
  ];
  // const lessons = [{
  //   id: 1,
  //   data: [
  //     { word: "Bier", choices: ["milk", "Tea", "Bred", "Bier"] },
  //     { word: "Milk", choices: ["Bier", "Tea", "Bred", "Milk"] },
  //     { word: "Bred", choices: ["Bier", "Tea", "Milk", "Bred"] },
  //   ]
  // },
  //{
  //id: 2,
  //   data: [
  //     { word: "Bier", choices: ["milk", "Tea", "Bred", "Bier"] },
  //     { word: "Milk", choices: ["Bier", "Tea", "Bred", "Milk"] },
  //     { word: "Bred", choices: ["Bier", "Tea", "Milk", "Bred"] },
  //   ]
  // },]
  dispatch(setLesson(lesson));
  const userData = {
    name: "Aleksandar Grigorov",
    userName: "Aleksandar240902",
    joinedDate: "2024-02-27",
    hearts: 1,
    points: 1000,
    daysStreak: 5,
    courses: [
      { language: "DE", xp: 120 },
      { language: "BG", xp: 0 },
    ],
    currentCourse: "DE",
    totalXp: 500,
  };

  dispatch(loginUser(userData));
  const homePathData = [
    {
      sectionNumber: 1,
      sectionUnitNumber: 1,
      sectionName: "Order in a Cafe",
      lessonsCount: 5,
      lessonId: [
        { id: 1, index: 5 },
        { id: 2, index: 5 },
      ],
    },
    {
      sectionNumber: 1,
      sectionUnitNumber: 2,
      sectionName: "Order in a Restaurant",
      lessonsCount: 3,
      lessonId: [
        { id: 3, index: 3 },
        { id: 4, index: 0 },
        { id: 5, index: 0 },
        { id: 6, index: 0 },
        { id: 7, index: 0 },
        { id: 8, index: 0 },
      ],
    },
    {
      sectionNumber: 1,
      sectionUnitNumber: 3,
      sectionName: " Walk i the park",
      lessonsCount: 6,
      lessonId: [
        { id: 9, index: 0 },
        { id: 10, index: 0 },
        { id: 11, index: 0 },
        { id: 12, index: 0 },
        { id: 13, index: 0 },
        { id: 14, index: 0 },
      ],
    },
  ];

  //const lastLesson = 3
  dispatch(setHomePathData(homePathData));

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabsNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="addFrendModal" component={AddFrendsModal} />
        <Stack.Screen name="heartsModal" component={HeartsModal} />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="PlayScreen"
          component={PlayScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="FinishScreen"
          component={FinishScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="NoHeartsScreen"
          component={NoHeartsScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="CommingSoonScreen"
          component={CommingSoonScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
