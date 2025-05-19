import { getUserAccountInfo, getUserLevelInfo, getUserDetail } from '@/pages/user-center/service';
import { UserDetail, UserLevel, UserProfile } from '@/types/user-type';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchChangeUserAccount = createAsyncThunk(
  'userAccount',
  async (args, { dispatch }) => {
    const res = await getUserAccountInfo();
    dispatch(changeUserProfile(res.profile));
    // localStorage.setItem('userProfile', res.profile)
    localStorage.setItem('uid', res.profile.userId.toString());
  },
);

export const fetchChangeUserLevel = createAsyncThunk('userLevel', async (args, { dispatch }) => {
  const res = await getUserLevelInfo();
  dispatch(changeUserLevel(res.data));
});

export const fetchChangeUserDetail = createAsyncThunk(
  'userDetail',
  async (uid: number, { dispatch }) => {
    const res = await getUserDetail(uid);
    dispatch(changeUserDetail(res));
  },
);

interface IRecommendState {
  userDetail: UserDetail;
  userProfile: UserProfile;
  userLevel: UserLevel;
}
const initialState: IRecommendState = {
  userDetail: {},
  userProfile: {},
  userLevel: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    changeUserDetail(state, { payload }) {
      state.userDetail = payload;
    },
    changeUserProfile(state, { payload }) {
      state.userProfile = payload;
      // localStorage.setItem('userProfile', payload);
    },
    changeUserLevel(state, { payload }) {
      state.userLevel = payload;
    },
  },
});

export const { changeUserProfile, changeUserLevel, changeUserDetail } = userSlice.actions;

export default userSlice.reducer;
