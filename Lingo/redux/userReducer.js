import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  name: null,
  userName: null,
  email: null,
  joinedDate: null,
  userProfile: null,
  isAuthenticated: false,
  token: null,
  hearts: null,
  heartDecreaseTime: null,
  points: null,
  daysStreak: null,
  courses: [],
  currentCourse: "BG",
  totalXp: null,
  todayWinSteak: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const {
        isLoggedIn,
        name,
        userName,
        email,
        joinedDate,
        token,
        hearts,
        heartDecreaseTime,
        points,
        daysStreak,
        courses,
        currentCourse,
        totalXp,
        todayWinSteak,
      } = action.payload;
      state.isLoggedIn = isLoggedIn;
      state.name = name;
      state.userName = userName;
      state.email = email;
      state.joinedDate = joinedDate;
      state.token = token;
      state.hearts = hearts;
      state.heartDecreaseTime = heartDecreaseTime;

      state.points = points;
      state.daysStreak = daysStreak;
      state.courses = courses;
      state.currentCourse = currentCourse;
      state.totalXp = totalXp;
      state.isAuthenticated = true;
      state.todayWinSteak = todayWinSteak;
    },
    logoutUser: (state) => {
      Object.assign(state, initialState);
      state.isAuthenticated = false;
    },
    decreceHearts: (state) => {
      if (state.hearts !== null && state.hearts > 0) {
        state.hearts -= 1;
      }
    },
    buyHearts: (state) => {
      if (state.hearts < 5 && state.points >= 500) {
        state.hearts = 5;
        state.points -= 500;
      }
    },

    finish: (state, action) => {
      const { xp } = action.payload;
      state.points += xp;

      const currentCourseIndex = state.courses.findIndex(
        (course) => course.language === state.currentCourse
      );

      if (currentCourseIndex !== -1) {
        state.courses[currentCourseIndex].xp += xp;
      }

      if (state.todayWinSteak === false) {
        state.todayWinSteak = true;
        state.daysStreak += 1;
      }
    },
  },
});

export const { loginUser, logoutUser, decreceHearts, buyHearts, finish } =
  userSlice.actions;
export const selectIsUserLoggedIn = (state) => state.user.isLoggedIn;
export const selectName = (state) => state.user.name;
export const selectUserName = (state) => state.user.userName;
export const selectEmail = (state) => state.user.email;
export const selectJoinedDate = (state) => state.user.joinedDate;
export const selectHeartDecreaseTime = (state) => state.user.heartDecreaseTime;
export const selectToken = (state) => state.user.token;
export const selectHearts = (state) => state.user.hearts;
export const selectPoints = (state) => state.user.points;
export const selectDaysStreak = (state) => state.user.daysStreak;
export const selectCourses = (state) => state.user.courses;
export const selectCurrentCourse = (state) => state.user.currentCourse;
export const selectTotalXp = (state) => state.user.totalXp;

export default userSlice.reducer;
