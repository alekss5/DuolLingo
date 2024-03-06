// // store.js

// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useDispatch } from 'react-redux'; // Import useDispatch hook

// import lessonReducer from "./lessonReducer";
// import userReducer from "./userReducer";
// import progressReducer from "./progressReducer";
// import homePathReducer from "./homePathReducer";

// import { setLesson } from "./lessonReducer";

// import { loginUser } from "./userReducer";
// import { setHomePathData, setLastLessonId } from "./homePathReducer";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage: AsyncStorage,
//   whitelist: ["progress", "lesson"]
// };

// const rootReducer = combineReducers({ 
//   user: userReducer,
//   progress: progressReducer,
//   homeData: homePathReducer,
//   lessons: lessonReducer
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export let persistor = persistStore(store);

// // Initialize initial data
// export const initializeData = () => {
//   const dispatch = useDispatch();

//   // Initial lesson data
//   const lessonData = [
//     { id: 1, word: "Bier", choices: ["milk", "tea", "bred", "Bier"] },
//     { id: 2, word: 'milk', choices: ['Bier','tea','bred','milk']  },
//     { id: 3, word: 'bred', choices: ['Bier','tea','milk','bred']  },
//   ];

//   // Initial user data
//   const userData = {
//     name: 'Aleksandar Grigorov',
//     userName: "Aleksandar240902",
//     joinedDate: "2024-02-27",
//     hearts: 10,
//     points: 100,
//     daysStreak: 5,
//     courses: ["DE", "BG"],
//     currentCourse: "DE",
//     totalXp: 500,
//   };

//   // Initial home path data
//   const homePathData = [
//     {    
//       sectionNumber:1, 
//       sectionUnitNumber:1, 
//       sectionName:"Order in a Cafe",
//       lessonsCount:5,
//       lessonId:[{id:1,index:5},{id:2,index:5}]
//     },
//     {    
//       sectionNumber:1, 
//       sectionUnitNumber:2, 
//       sectionName:"Order in a Restaurant",
//       lessonsCount:3,
//       lessonId:[{id:3,index:3},{id:4,index:0},{id:5,index:0}]
//     },
//   ];

//   // Dispatch initial actions to set data in store
//   dispatch(setLesson(lessonData) );
//   dispatch(loginUser(userData));
//   dispatch(setHomePathData(homePathData));
// };


// initializeData();

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

import lessonReducer from "./lessonReducer";
import userReducer from "./userReducer";
import progressReducer from "./progressReducer";
import homePathReducer from "./homePathReducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";


const persistConfig = {
  key: "root",
  version: 1,
  storage:AsyncStorage,
  whitelist:["progress","lesson"]
};

const rootReducer = combineReducers({ 

    user:userReducer,
    progress: progressReducer,
    homeData:homePathReducer,
    lessons: lessonReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
