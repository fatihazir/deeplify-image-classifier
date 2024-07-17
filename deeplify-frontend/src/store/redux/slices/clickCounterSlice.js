import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

export const clickCounterSlice = createSlice({
    name: 'clickCounter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        },
    },
});

export const { increment, decrement, reset } = clickCounterSlice.actions;

export default clickCounterSlice.reducer;