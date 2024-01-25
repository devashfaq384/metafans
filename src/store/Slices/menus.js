import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: "Home Feed",
  reducers: {
    changeName: (state , action) => {
      return action.payload
    },
    
  },
});

export const { changeName } = menuSlice.actions;
export default menuSlice.reducer;
