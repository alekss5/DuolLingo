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
  todayWinSteak: null
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
        todayWinSteak,
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
      state.todayWinSteak = todayWinSteak;
    },
    logoutUser: (state) => {
      Object.assign(state, initialState);
      state.isAuthenticated = false;
    },
    decreceHearts:(state)=>{
      if (state.hearts !== null && state.hearts > 0) {
        state.hearts -= 1;
      }
    },
    buyHearts: (state)=>{
      if(state.hearts <5 && state.points>=500){
        state.hearts = 5
        state.points -= 500
      }
    },
    
    finish:(state,action)=>{
      const {xp} = action.payload
      state.points +=120

      const currentCourseIndex = state.courses.findIndex(course => course.language === state.currentCourse);

    
     
      if (currentCourseIndex !== -1) {
        state.courses[currentCourseIndex].xp += xp;
      }

      if(state.todayWinSteak===false){
        state.todayWinSteak = true
        state.daysStreak +=1
      }
   
    }

   
  },
});

export const { loginUser, logoutUser,decreceHearts,buyHearts,finish } = userSlice.actions;

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
// import { createSlice } from "@reduxjs/toolkit";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {
//   persistReducer,
// } from "redux-persist";

// const initialState = {
//   name: null,
//   userName: null,
//   joinedDate: null,
//   userProfile: null,
//   isAuthenticated: false,
//   hearts: null,
//   points: null,
//   daysStreak: null,
//   courses: [],
//   currentCourse: null,
//   totalXp: null,
//   todayWinSteak: null
// };

// // Create a persist configuration for the user slice
// const userPersistConfig = {
//   key: "user",
//   storage: AsyncStorage,
//   whitelist: ["name", "userName", "joinedDate", "isAuthenticated", "hearts", "points", "daysStreak", "courses", "currentCourse", "totalXp", "todayWinSteak"]
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     loginUser: (state, action) => {
//       const {
//         name,
//         userName,
//         joinedDate,
//         hearts,
//         points,
//         daysStreak,
//         courses,
//         currentCourse,
//         totalXp,
//         todayWinSteak,
//       } = action.payload;
//       state.name = name;
//       state.userName = userName;
//       state.joinedDate = joinedDate;
//       state.hearts = hearts;
//       state.points = points;
//       state.daysStreak = daysStreak;
//       state.courses = courses;
//       state.currentCourse = currentCourse;
//       state.totalXp = totalXp;
//       state.isAuthenticated = true;
//       state.todayWinSteak = todayWinSteak;
//     },
//     logoutUser: (state) => {
//       Object.assign(state, initialState);
//       state.isAuthenticated = false;
//     },
//     decreaseHearts:(state)=>{
//       if (state.hearts !== null && state.hearts > 0) {
//         state.hearts -= 1;
//       }
//     },
//     buyHearts: (state)=>{
//       if(state.hearts <5 && state.points>=500){
//         state.hearts = 5
//         state.points -= 500
//       }
//     },
//     finish:(state,action)=>{
//       const {xp} = action.payload
//       state.points +=120

//       const currentCourseIndex = state.courses.findIndex(course => course.language === state.currentCourse);

//       if (currentCourseIndex !== -1) {
//         state.courses[currentCourseIndex].xp += xp;
//       }

//       if(state.todayWinSteak===false){
//         state.todayWinSteak = true
//         state.daysStreak +=1
//       }
//     }
//   },
// });

// // Wrap the user slice reducer with the persistReducer function
// const persistedUserReducer = persistReducer(userPersistConfig, userSlice.reducer);

// export const { loginUser, logoutUser, decreaseHearts, buyHearts, finish } = persistedUserReducer.actions;

// export const selectName = (state) => state.user.name;
// export const selectUserName = (state) => state.user.userName;
// export const selectJoinedDate = (state) => state.user.joinedDate;
// export const selectHearts = (state) => state.user.hearts;
// export const selectPoints = (state) => state.user.points;
// export const selectDaysStreak = (state) => state.user.daysStreak;
// export const selectCourses = (state) => state.user.courses;
// export const selectCurrentCourse = (state) => state.user.currentCourse;
// export const selectTotalXp = (state) => state.user.totalXp;

// export default persistedUserReducer;
