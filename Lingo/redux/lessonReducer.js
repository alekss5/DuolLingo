import { createSlice } from "@reduxjs/toolkit";

const lessonSlice = createSlice({
  name: "lesson",
  initialState: {
    lessons: [],
    selectedLesson: null,
  },
  reducers: {
    setLesson: (state, action) => {
      state.lessons = action.payload;
    },
  },
});
export const selectLessons = (state) => state.lessons.lessons;

export const { setLesson } = lessonSlice.actions;
export default lessonSlice.reducer;
