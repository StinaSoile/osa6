import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    vote: (state, action) => {
      const id = action.payload.id
      const newAnecdote = action.payload.changedAnecdote
      return state.map(anecdote => anecdote.id !== id ? anecdote : newAnecdote).sort((a, b) => (b.votes - a.votes))
    },
    createAnecdote: (state, action) => {
      state.push(action.payload)
    },
    setAnecdotes: (state, action) => {
      console.log(action.payload)
      return action.payload
    }
  }
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes));
  }
};

export const createNewAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content);
    dispatch(createAnecdote(anecdote));
  }
};

export const voteAnecdote = (id) => {
  return async dispatch => {
    const anecdoteToChange = await anecdoteService.getAnecdote(id)
    const newVotes = anecdoteToChange.votes + 1
    const changedAnecdote = { ...anecdoteToChange, votes: newVotes }
    await anecdoteService.changeAnecdote(id, changedAnecdote)
    dispatch(vote({ id, changedAnecdote }))
  }
}
console.log(initializeAnecdotes)

export const { vote, createAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
