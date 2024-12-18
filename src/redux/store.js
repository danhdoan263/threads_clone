import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@/components/modal/modalSlice";
const rootReducer = {
  showModal: modalReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
