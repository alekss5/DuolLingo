import { createSlice } from "@reduxjs/toolkit";

const homePathDataSlice = createSlice({
  name: "homeData",
  initialState: {
    homePathData:[],
    lastLessonId:null,
  },
  reducers: {
    setHomePathData: (state, action) => {
      state.homePathData = action.payload;
    },
    setLastLessonId: (state, action) => {

      state.lastLessonId = action.payload;
    },
  },
});

export const selectHomePathData = (state) => state.homeData.homePathData;
export const selectLastLessonId = (state) => state.homeData.lastLessonId;

export const { setHomePathData,setLastLessonId } = homePathDataSlice.actions;
export default homePathDataSlice.reducer;

  