import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import image1 from '../1.png'
import image4 from '../4.png'
import image3 from '../3.png'
interface SliderState {
    currentSlide: number
    slides: string[]
}

const initialState: SliderState = {
    currentSlide: 0,
    slides: [
        image1,
        image4,
        image3,
        image4,
    ],
}

const sliderSlice = createSlice({
    name: "slider",
    initialState,
    reducers: {
        nextSlide: (state) => {
            state.currentSlide = (state.currentSlide + 1) % state.slides.length
        },
        prevSlide: (state) => {
            state.currentSlide = state.currentSlide === 0 ? state.slides.length - 1 : state.currentSlide - 1
        },
        goToSlide: (state, action: PayloadAction<number>) => {
            state.currentSlide = action.payload
        },
    },
})

export const { nextSlide, prevSlide, goToSlide } = sliderSlice.actions
export default sliderSlice.reducer
