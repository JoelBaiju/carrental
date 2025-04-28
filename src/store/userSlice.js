import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    phone: '',
    password: '',
  },
  reducers: {
    setUser: (state, action) => {
      const { name, phone, password } = action.payload;
      state.username = name;
      state.phone = phone;
      state.password = password;
    },
    clearUser: (state) => {
      state.username = '';
      state.phone = '';
      state.password = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
