import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"

export interface Country {
  name: string
  region: string
  flag: string
}

interface CountriesState {
  countries: Country[]
  filteredCountries: Country[]
  displayedCountries: Country[]
  loading: boolean
  error: string | null
  currentFilter: string
  itemsPerPage: number
  currentPage: number
}

const initialState: CountriesState = {
  countries: [],
  filteredCountries: [],
  displayedCountries: [],
  loading: false,
  error: null,
  currentFilter: "All",
  itemsPerPage: 8,
  currentPage: 1,
}

export const fetchCountries = createAsyncThunk("countries/fetchCountries", async () => {
  const response = await fetch("https://restcountries.com/v2/all?fields=name,region,flag")
  if (!response.ok) {
    throw new Error("Failed to fetch countries")
  }
  return response.json()
})

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.currentFilter = action.payload
      state.currentPage = 1

      if (action.payload === "All") {
        state.filteredCountries = state.countries
      } else {
        state.filteredCountries = state.countries.filter((country) => country.region === action.payload)
      }

      state.displayedCountries = state.filteredCountries.slice(0, state.itemsPerPage)
    },
    loadMore: (state) => {
      state.currentPage += 1
      const startIndex = 0
      const endIndex = state.currentPage * state.itemsPerPage
      state.displayedCountries = state.filteredCountries.slice(startIndex, endIndex)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false
        state.countries = action.payload
        state.filteredCountries = action.payload
        state.displayedCountries = action.payload.slice(0, state.itemsPerPage)
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to fetch countries"
      })
  },
})

export const { setFilter, loadMore } = countriesSlice.actions
export default countriesSlice.reducer
