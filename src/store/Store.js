import { configureStore } from "@reduxjs/toolkit"
import reducer from "./AuthSlice";
const store = configureStore({
    reducer: reducer
})

export default store;