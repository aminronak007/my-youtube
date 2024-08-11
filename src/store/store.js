import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./App/AppSlice";
import SearchSlice from "./Search/SearchSlice";
import ChatSlice from "./Chat/ChatSlice";

const store = configureStore({
  reducer: {
    app: AppSlice,
    search: SearchSlice,
    chat: ChatSlice,
  },
});

export default store;
