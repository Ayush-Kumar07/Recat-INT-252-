import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // correct path

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
