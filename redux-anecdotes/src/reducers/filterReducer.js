import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterAnecdotes: (state, action) => {
            return action.payload
        }
    }
})
console.log('filterSlice on wtf?!: ', filterSlice)

export const { filterAnecdotes } = filterSlice.actions
export default filterSlice.reducer
