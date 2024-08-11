import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // state = Object.assign(state, action.payload);
      const newObj = { ...action.payload, ...state };
      state = newObj;
    },
  },
});

export const { cacheResults } = SearchSlice.actions;
export default SearchSlice.reducer;
