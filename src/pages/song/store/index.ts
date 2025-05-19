import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSongInfo } from '../service';
import { Song } from '@/types/type';
import { Comment } from '@/types/comment';

export const fetchSongInfoAction = createAsyncThunk(
  'SongInfo',
  async (ids: number, { dispatch }) => {
    const res = await getSongInfo(ids);
    dispatch(changeSongInfoAction(res.songs[0]));
  },
);

interface IRootState {
  songInfo: Song;
  comment: Comment[];
}
const initialState: IRootState = {
  songInfo: {},
  comment: [],
};

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    changeSongInfoAction(state, { payload }) {
      state.songInfo = payload;
    },
    changeCommentAction(state, { payload }) {
      state.comment = payload;
    },
  },
});

export const { changeSongInfoAction } = songSlice.actions;

export default songSlice.reducer;
