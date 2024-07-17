import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    classification: null,
};

export const imageClassificationSlice = createSlice({
    name: 'imageClassification',
    initialState,
    reducers: {
        setClassification: (state, action) => {
            state.classification = action.payload;
        },
        clearClassification: (state) => {
            state.classification = null;
        },
    },
});

export const { setClassification, clearClassification } = imageClassificationSlice.actions;

export default imageClassificationSlice.reducer;