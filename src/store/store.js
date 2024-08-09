import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./App/AppSlice";
import SearchSlice from "./Search/SearchSlice";

const store = configureStore({
  reducer: {
    app: AppSlice,
    search: SearchSlice,
  },
});

export default store;
