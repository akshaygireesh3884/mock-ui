import { configureStore } from "@reduxjs/toolkit"
import countriesReducer from "./countriesSlice"
import sliderReducer from "./sliderSlice"

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    slider: sliderReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch