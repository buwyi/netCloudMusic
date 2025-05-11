import { getUserAccountInfo } from '@/pages/user-center/service';
import { UserInfo, UserProfile } from '@/types/user-type';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchChangeUserAccount = createAsyncThunk(
  'userAccount',
  async (args, { dispatch }) => {
    const res = await getUserAccountInfo();
    dispatch(changeUserProfile(res.profile));
    // localStorage.setItem('userProfile', res.profile)
  },
);

interface IRecommendState {
  userInfo: UserInfo;
  userProfile: UserProfile;
}
const initialState: IRecommendState = {
  userInfo: {},
  userProfile: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    changeUserProfile(state, { payload }) {
      state.userProfile = payload;
      // localStorage.setItem('userProfile', payload);
    },
  },
});

export const { changeUserProfile } = userSlice.actions;

export default userSlice.reducer;
