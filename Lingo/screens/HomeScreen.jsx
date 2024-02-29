import { StyleSheet, SafeAreaView, View } from "react-native";

import { GlobalStyles } from "../constants/Colors";
import TopNavBar from "../components/HomePage/TopNavBar";
import CurrentLestonBanner from "../components/HomePage/CurrentLestonBanner";
import HomeTestPath from "../components/HomePage/HomeTestPath";
import { useDispatch } from "react-redux";

import { setLesson } from "../redux/lessonReducer";
import { loginUser } from "../redux/userReducer";
import { setHomePathData, setLastLessonId } from "../redux/homePathReducer";

export default function HomeScreen() {

  
  const dispatch = useDispatch();
  const lesson = [
    { id: 1, word: "Bier", choises: ["milk", "tea", "bred", "Bier"] },
    { id: 2, word: 'milk',choises:['Bier','tea','bred','milk']  },
    { id: 3, word: 'bred',choises:['Bier','tea','milk','bred']  },
  ];
  dispatch(setLesson(lesson ));
  const userData = {
    name:'Aleksandar Grigorov',
    userName: "Aleksandar240902",
    joinedDate: "2024-02-27",
    hearts: 10,
    points: 100,
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
    lessonId:[1,2,3,4,5]
  },
  {    
    sectionNumber:1, 
    sectionUnitNumber:2, 
    sectionName:"Order in a Restaurant",
    lessonsCount:3,
    lessonId:[6,7,8]
  },
  {    
    sectionNumber:1, 
    sectionUnitNumber:3, 
    sectionName:"Order in a Burgersdfa sdfasdfg asdfgs asdfasdf asdfasdf",
    lessonsCount:6,
    lessonId:[9,10,11,12,13,14]
  },
]
const lastLesson = 1
dispatch(setHomePathData(homePathData));
dispatch(setLastLessonId(lastLesson));



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TopNavBar />
        <CurrentLestonBanner />
        <HomeTestPath />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.black,
  },
});
