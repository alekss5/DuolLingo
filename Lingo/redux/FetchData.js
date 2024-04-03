import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setFeed } from "./feedReducer";
import { selectToken, selectUserName } from "./userReducer";
import { convertDateFormat } from "../utils/globalFunctions";
import { setHomePathData } from "./homePathReducer";
import { loginUser } from "./userReducer";
const { fetchFeed, postLoginUser } = require("../utils/http");

export default function FetchData() {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const token = useSelector(selectToken)

  const setFetchedFeed = async () => {
    try {
      const response = await fetchFeed({token});
      dispatch(setFeed(response));
    } catch (e) {
      console.log(e);
    }
  };
  const setFetchedUser = async () => {
    try {
      const response = await postLoginUser({
        email: "aleksndar305@gmail.com",
        password: "5505667Sa",
      });
      const token = response.token;
      const user = response.userData;

      const userData = {
        name: user.name,
        userName: user.userName,
        email: user.email,
        joinedDate: convertDateFormat(user.joinedDate),
        token:token,
        hearts: user.hearts,
        points: user.points,
        daysStreak: user.daysStreak,
        courses: user.courses,
        currentCourse: user.currentCourse,
        totalXp: user.totalXp,
        todayWinSteak: user.todayWinSteak,
      };

      dispatch(loginUser(userData));
      dispatch(setHomePathData(user.progress));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setFetchedUser();
    if (userName === null || userName === undefined) {
    }
    setFetchedFeed();
  }, []);

  return <>{/* <Text>...Loading</Text> */}</>;
}
