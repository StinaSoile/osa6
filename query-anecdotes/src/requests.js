import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () =>
    axios.get(baseUrl).then(res => res.data)

export const createAnecdote = async (anecdote) => {
    const res = await axios.post(baseUrl, { ...anecdote, votes: 0 })
    return res.data
}

export const updateAnecdote = async (anecdote) => {
    const res = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote)
    return res.data
}
// jooo tässä käytän molempia tapoja muistinvirkistykseksi 
// mutta ymmärrän kummatkin ja pidän ne erillään