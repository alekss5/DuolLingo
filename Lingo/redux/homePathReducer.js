import { createSlice } from "@reduxjs/toolkit";

const homePathDataSlice = createSlice({
  name: "homeData",
  initialState: {
    homePathData:[],
    sectionNumber:1,
    unitNumber:1,
    sectionName:null,
   // lastLessonId:null,
  },
  reducers: {
    setHomePathData: (state, action) => {
      state.homePathData = action.payload;
    },
    // setLastLessonId: (state, action) => {

    //   state.lastLessonId = action.payload;
    // },
    setSectionInformation: (state, action) => {
      state.sectionName = action.payload.sectionName;
      state.sectionNumber = action.payload.sectionNumber;
      state.unitNumber = action.payload.unitNumber;
    },
    increaseUnitNumber: (state, action) => {
      return {
        ...state,
        unitNumber: state.unitNumber + 1
      };
    }
    
  },
});

export const selectHomePathData = (state) => state.homeData.homePathData;
//export const selectLastLessonId = (state) => state.homeData.lastLessonId;
export const selectSectionNumber = (state) =>state.homeData.sectionNumber;
export const selectUnitNumber = (state) =>state.homeData.unitNumber;
export const selectSectionName = (state) =>state.homeData.sectionName;

export const { setHomePathData,setLastLessonId,setSectionInformation,increaseUnitNumber } = homePathDataSlice.actions;
export default homePathDataSlice.reducer;

  