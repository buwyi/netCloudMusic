import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchShowWindowAction = createAsyncThunk<void, boolean>(
  'changeShowWindow',
  async (isShow: boolean, { dispatch }) => {
    dispatch(changeShowWindowAction(isShow));
  },
);

export const fetchCookieAction = createAsyncThunk(
  'changeToken',
  async (cookie: string, { dispatch }) => {
    dispatch(changeCookieAction(cookie));
  },
);

const initialState = {
  showWindow: false,
  cookie: localStorage.getItem('MUSIC_U') || '',
  isLogin: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    changeShowWindowAction(state, { payload }) {
      state.showWindow = payload;
    },
    changeCookieAction(state, { payload }) {
      state.cookie = payload;
      localStorage.setItem('MUSIC_U', state.cookie);
    },
    changeIsLoginAction(state, { payload }) {
      state.isLogin = payload;
    },
  },
});

export const { changeShowWindowAction, changeCookieAction, changeIsLoginAction } =
  loginSlice.actions;
export default loginSlice.reducer;
