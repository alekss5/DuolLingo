import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

import lessonReducer from "./lessonReducer";
import userReducer from "./userReducer";

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
import feedReducer from "./feedReducer";


const persistConfig = {
  key: "root",
  version: 1,
  storage:AsyncStorage,
  whitelist:["user","feed",'homeData','lessons']
};

const rootReducer = combineReducers({ 

    user:userReducer,
    feed:feedReducer,
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
