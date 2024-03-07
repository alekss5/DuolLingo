import React from "react";
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
import { setFeed } from "../redux/feedReducer";

const Stack = createStackNavigator();

export default function StackNavigation() {
 
  const dispatch = useDispatch()
  const lesson = [
    { id: 1, word: "Bier", choises: ["milk", "tea", "bred", "Bier"] },
    { id: 2, word: 'milk',choises:['Bier','tea','bred','milk']  },
    { id: 3, word: 'bred',choises:['Bier','tea','milk','bred']  },
  ];
  dispatch(setLesson(lesson))
  const userData = {
    name:'Aleksandar Grigorov',
    userName: "Aleksandar240902",
    joinedDate: "2024-02-27",
    hearts: 4,
    points: 1000,
    daysStreak: 5,
    courses: ["DE", "BG"],
    currentCourse: "DE",
    totalXp: 500,
  };

  dispatch(loginUser(userData));
  const homePathData = [
    
    {    
    sectionNumber:1, 
    sectionUnitNumber:1, 
    sectionName:"Order in a Cafe",
    lessonsCount:5,
    lessonId:[{id:1,index:5},{id:2,index:5}]
   }
  ,
  {    
    sectionNumber:1, 
    sectionUnitNumber:2, 
    sectionName:"Order in a Restaurant",
    lessonsCount:3,
    lessonId:[{id:3,index:3},{id:4,index:0},{id:5,index:0}]
  },
  // {    
  //   sectionNumber:1, 
  //   sectionUnitNumber:3, 
  //   sectionName:"Order in a Burgersdfa sdfasdfg asdfgs asdfasdf asdfasdf",
  //   lessonsCount:6,
  //   lessonId:[9,10,11,12,13,14]
  // },
]
//const lastLesson = 3
dispatch(setHomePathData(homePathData));
const feed = [
  {
    imgSrc: require("../Images/feed7.jpg"),
    feedType: "LEARNING TIP",
    publishedSinse: 6,
    mainText: "After you've learned the basics, what comes next? Here's how to break through ",
    secondaryText: "Here's what out exprts say!",
    url:""
  },
  ,
  {
    imgSrc: require("../Images/feed2.jpg"),
    feedType: "FUN",
    publishedSinse: 21,
    mainText: "Need a pick-up line in French? Or a break-up line in Portuguese?",
    secondaryText: "We have you covered!",
    url:""
  },
  {
    imgSrc: require("../Images/feed4.jpg"),
    feedType: "LEARNING TIP",
    publishedSinse: 18,
    mainText: "Can you forget your first language",
    secondaryText: "Here's what out exprts say!",
    url:""
  },
  {
    imgSrc: require("../Images/feed1.jpg"),
    feedType: "LEARNING TIP",
    publishedSinse: 19,
    mainText: "We're answering this question onse and for all:",
    secondaryText: "can you learn a language in just 6 months?",
    url:""
  },
  
]
dispatch(setFeed(feed))
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
