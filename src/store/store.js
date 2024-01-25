import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './Slices/slice';
import menuReducer from './Slices/menus'

const store = configureStore({
  reducer: {
    pageName: pageReducer,
    menuName : menuReducer
    // Add other reducers as needed
  },
});

export default store;
