import { createSlice } from "@reduxjs/toolkit";

const interfaceSlice = createSlice({
  name: "interface",
  initialState: {
   sureModal: false,
  },
  reducers: {
    sureModalAction: (state, action) => {
      state.lessons = action.payload;
    },
  },
});
export const selectSureModalState = (state) => state.interface.sureModal;

export const { sureModalAction } = interfaceSlice.actions;
export default interfaceSlice.reducer;
