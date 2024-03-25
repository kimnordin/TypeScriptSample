import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decremented: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;