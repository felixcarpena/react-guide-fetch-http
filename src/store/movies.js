import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name: 'movies',
    initialState: { movies: [], isLoading: false },
    reducers: {
        updateIsLoading (state, action) {
            console.log(action)
            state.isLoading = action.payload
        },
        updateMovies(state, action) {
            state.movies = action.payload
        }
    }
})

export default movieSlice.reducer
export const { updateIsLoading, updateMovies } = movieSlice.actions