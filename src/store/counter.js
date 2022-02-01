import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, { payload }) {
      state.counter = state.counter + payload.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = counterSlice.reducer;
export default counterReducer;

export const counterActions = counterSlice.actions;