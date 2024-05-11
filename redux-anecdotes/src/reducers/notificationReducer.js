import { createSlice } from '@reduxjs/toolkit'


const initialState = { text: '', timeoutId: undefined }
const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        createNotification: (state, action) => {
            if (state.timeoutId) {
                clearTimeout(state.timeoutId)
            }
            return action.payload
        },
        removeNotification: () => {
            return initialState
        }
    }
})

export const setNotification = (string, time) => {
    return async dispatch => {

        let timeoutId = setTimeout(() => {
            dispatch(removeNotification(""));
        }, time * 1000);
        dispatch(createNotification({ text: string, timeoutId }));
    }
};

export const { removeNotification, createNotification } = notificationSlice.actions
export default notificationSlice.reducer