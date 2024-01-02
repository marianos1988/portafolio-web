import { configureStore } from "@reduxjs/toolkit";
import sectionSlice from "../reducers/SectionSlice"

export default configureStore({
  reducer: {
    section: sectionSlice,
  }

})