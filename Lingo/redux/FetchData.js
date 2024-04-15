import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFeed } from "./feedReducer";
import { selectToken, selectUserName } from "./userReducer";
import { convertDateFormat } from "../utils/globalFunctions";
import { setHomePathData } from "./homePathReducer";
import { loginUser } from "./userReducer";
import { StyleSheet, View } from "react-native";

import * as SplashScreen from "expo-splash-screen";

const { fetchFeed, postLoginUser } = require("../utils/http");

export default function FetchData({ isDataFetched }) {
  SplashScreen.preventAutoHideAsync();

  const [isDataFetching, setIsDataFetching] = useState(true);
  const [isTimeoutPassed, setTimeoutPassed] = useState(false);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const token = useSelector(selectToken);

setTimeout(() => {
    setTimeoutPassed(true);
  }, 4000);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const userResponse = await postLoginUser({
          email: "aleksndar305@gmail.com",
          password: "5505667Sa",
        });

        // Fetch feed data
        const feedResponse = await fetchFeed({ token });

        // Dispatch user data
        const userData = {
          name: userResponse.userData.name,
          userName: userResponse.userData.userName,
          email: userResponse.userData.email,
          joinedDate: convertDateFormat(userResponse.userData.joinedDate),
          heartDecreaseTime: userResponse.userData.heartDecreaseTime,
          token: userResponse.token,
          hearts: userResponse.userData.hearts,
          points: userResponse.userData.points,
          daysStreak: userResponse.userData.daysStreak,
          courses: userResponse.userData.courses,
          currentCourse: userResponse.userData.currentCourse,
          totalXp: userResponse.userData.totalXp,
          todayWinSteak: userResponse.userData.todayWinSteak,
        };

        dispatch(loginUser(userData));
        dispatch(setHomePathData(userResponse.userData.progress));

        // Dispatch feed data
        dispatch(setFeed(feedResponse));

        // Hide splash screen
        SplashScreen.hideAsync();

        // Set flags
        setIsDataFetching(false);
        // setTimeoutPassed(true);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(isDataFetching);
    console.log(isTimeoutPassed);
    // Trigger isDataFetched when data fetching is complete and timeout has passed
    if (!isDataFetching && isTimeoutPassed) {
      isDataFetched(true);
    }
  }, [isDataFetching, isTimeoutPassed]);

  return <></>;
}

const styles = StyleSheet.create({
  animationFinisContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
