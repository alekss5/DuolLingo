import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  userName: null,
  joinedDate: null,
  userProfile: null,
  isAuthenticated: false,
  hearts: null,
  points: null,
  daysStreak: null,
  courses: [],
  currentCourse: null,
  totalXp: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const {
        name,
        userName,
        joinedDate,
        hearts,
        points,
        daysStreak,
        courses,
        currentCourse,
        totalXp,
      } = action.payload;
      state.name = name;
      state.userName = userName;
      state.joinedDate = joinedDate;
      state.hearts = hearts;
      state.points = points;
      state.daysStreak = daysStreak;
      state.courses = courses;
      state.currentCourse = currentCourse;
      state.totalXp = totalXp;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      Object.assign(state, initialState);
      state.isAuthenticated = false;
    },
    decreceHearts:(state)=>{
      if (state.hearts !== null && state.hearts > 0) {
        state.hearts -= 1;
      }
    }
   
  },
});

export const { loginUser, logoutUser,decreceHearts } = userSlice.actions;

export const selectName = (state) => state.user.name;
export const selectUserName = (state) => state.user.userName;
export const selectJoinedDate = (state) => state.user.joinedDate;
export const selectHearts = (state) => state.user.hearts;
export const selectPoints = (state) => state.user.points;
export const selectDaysStreak = (state) => state.user.daysStreak;
export const selectCourses = (state) => state.user.courses;
export const selectCurrentCourse = (state) => state.user.currentCourse;
export const selectTotalXp = (state) => state.user.totalXp;

export default userSlice.reducer;
