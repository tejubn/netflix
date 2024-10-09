import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieSliceReducer from "./movieSlice";
import gptSliceReducer from "./gptSlice";
import configReducer from "./ConfigSlice";

const appStore=configureStore({
  reducer:{
    user: userSliceReducer,
    movies:movieSliceReducer,
    gpt:gptSliceReducer,
    config: configReducer,
  }
});
export default appStore;