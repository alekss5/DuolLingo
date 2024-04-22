import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFeed } from "./feedReducer";
import { selectToken, selectUserName } from "./userReducer";
import { convertDateFormat } from "../utils/globalFunctions";
import { setHomePathData } from "./homePathReducer";
import { loginUser } from "./userReducer";
import { StyleSheet } from "react-native";

import * as SplashScreen from "expo-splash-screen";
const { fetchFeed, postLoginUser } = require("../utils/http");

export default function FetchData({ isDataFetched,email,password,userFetchResponse }) {
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
        const lowerEmail = email.toLowerCase();
        const response = await postLoginUser({
          email: lowerEmail,
          password: password,
        });
        // Fetch feed data
        const feedResponse = await fetchFeed({ token });

        // Dispatch user data
        const userResponse = response.data
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
        SplashScreen.hideAsync();

        setIsDataFetching(false);
        
        // setTimeoutPassed(true);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [email,password]);

  useEffect(() => {
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
