import { configureStore } from '@reduxjs/toolkit';
import clickCounterReducer from './slices/clickCounterSlice';
import imageClassificationReducer from './slices/imageClassificationSlice';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('clickCount');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify({ clickCounter: state.clickCounter });
        localStorage.setItem('clickCount', serializedState);
    } catch (err) {
        // TODO
    }
};

const preloadedState = loadState();

const store = configureStore({
    reducer: {
        clickCounter: clickCounterReducer,
        imageClassification: imageClassificationReducer,
    },
    preloadedState,
});

store.subscribe(() => {
    saveState(store.getState());
});

export default store;