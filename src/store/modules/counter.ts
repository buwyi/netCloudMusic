import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'Hello Redux',
    address: 'HZ',
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload;
    },
  },
});

export default counterSlice.reducer;
export const { changeMessageAction } = counterSlice.actions;
