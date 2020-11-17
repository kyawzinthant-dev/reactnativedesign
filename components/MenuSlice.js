import { createSlice } from '@reduxjs/toolkit';

let menuSlice = createSlice({
  name: 'menu',
  initialState: { action: "openMenu" },
  reducers: {
    openMenu(state, action) {
      return { action: "openMenu" };
    },
    closeMenu(state, action) {
      return { action: "closeMenu" };
    },
  }
});

export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;