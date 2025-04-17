import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners, getHotRecommend, getNewAlbum, getSettleSinger, getTopList } from '../service';
import { Album, Artist, Banner, HotRecommend, Playlist } from './type';

export const fetchBannerDataAction = createAsyncThunk('banners', async (args, { dispatch }) => {
  const res = await getBanners();
  // return res.banner;
  dispatch(changeBannersAction(res.banners));
});

export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (args, { dispatch }) => {
    const res = await getHotRecommend(8);
    // return res.result;
    dispatch(changeHotRecommendAction(res.result));
  },
);

export const fetchNewAlbumAction = createAsyncThunk('newAlbum', async (args, { dispatch }) => {
  const res = await getNewAlbum();
  // console.log(res);
  dispatch(changeNewAlbumAction(res.albums));
});

export const fetchTopListAction = createAsyncThunk(
  'discover-toplist',
  async (args, { dispatch }) => {
    const listIds = [19723756, 3779629, 2884035];
    const promises: Promise<any>[] = [];
    for (const id of listIds) {
      promises.push(getTopList(id));
    }
    Promise.all(promises).then((res) => {
      const playlists = res.map((item) => item.playlist);
      dispatch(changeTopListAction(playlists));
    });
  },
);

export const fetchSettleSingerAction = createAsyncThunk(
  'settleSinger',
  async (args, { dispatch }) => {
    const res = await getSettleSinger();
    // console.log(res.artists);
    dispatch(changeSettleSingerAction(res.artists));
  },
);

interface IRecommendState {
  banners: Banner[];
  hotRecommend: HotRecommend[];
  newAlbum: Album[];
  toplists: Playlist[];
  settleSinger: Artist[];
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newAlbum: [],
  toplists: [],
  settleSinger: [],
};

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload;
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload;
    },
    changeTopListAction(state, { payload }) {
      state.toplists = payload;
    },
    changeSettleSingerAction(state, { payload }) {
      state.settleSinger = payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchBannerDataAction.pending, () => {
  //       console.log('pending');
  //     })
  //     .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //       state.banners = payload;
  //     })
  //     .addCase(fetchBannerDataAction.rejected, () => {
  //       console.log('rejected');
  //     });
  // },
});

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeTopListAction,
  changeSettleSingerAction,
} = recommendSlice.actions;
export default recommendSlice.reducer;
