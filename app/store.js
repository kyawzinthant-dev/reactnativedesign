import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../components/MenuSlice';

export default configureStore({
  reducer: {
    menu: menuReducer
  },
});
