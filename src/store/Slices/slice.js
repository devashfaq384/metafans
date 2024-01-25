import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'counter',
  initialState: "Home Feed",
  reducers: {
    changeName: (state , action) => {
      return action.payload
    },
    
  },
});

export const { changeName } = pageSlice.actions;
export default pageSlice.reducer;
