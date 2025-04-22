import { Song } from '@/types/type';
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { getCurrentSongDetail, getLyrics } from '../service';
import { IRootState } from '@/store';
import { ILyric, parseLyrics } from '@/utils/parser_lyrics';

//更改当前歌曲
export const fetchCurrentSongAction = createAsyncThunk<void, number, { state: IRootState }>(
  'currentSong',
  async (id, { dispatch, getState }) => {
    //当需要播放歌曲时,先在播放队列中寻找是否存在
    const playList = getState().player.playList;
    const findIndex = playList.findIndex((item) => item.id === id);
    if (findIndex === -1) {
      //不存在则发送网络请求，请求歌曲信息
      const res = await getCurrentSongDetail(id);
      if (!res.songs.length) return;
      // console.log(res.songs[0]);
      dispatch(changeCurrentSongAction(res.songs[0]));
      //更新播放列表
      const newPlayList = [...playList];
      newPlayList.push(res.songs[0]);
      dispatch(changePlayListAction(newPlayList));
      dispatch(changePlayListIndexAction(newPlayList.length - 1));
      // return res.songs;
    } else {
      //存在则修改播放队列顺序，从播放队列中直接拿到song
      const song = playList[findIndex];
      dispatch(changeCurrentSongAction(song));
      dispatch(changePlayListIndexAction(findIndex));
    }
    //获取歌曲歌词
    const lyricRes = await getLyrics(id);
    console.log(lyricRes);
    dispatch(changeLyricsAction(parseLyrics(lyricRes.lrc.lyric)));
  },
);
//切换歌曲
export const fetchChangeMusicAction = createAsyncThunk<void, boolean, { state: IRootState }>(
  'changeMusic',
  async (isNext: boolean, { dispatch, getState }) => {
    //获取数据
    const player = getState().player;
    const playMode = player.playMode;
    const playListIndex = player.playListIndex;
    const playList = player.playList;

    let newIndex = playListIndex;
    if (playMode === 1) {
      newIndex = Math.floor(Math.random() * playList.length);
    } else {
      newIndex = isNext ? playListIndex + 1 : playListIndex - 1;
      if (newIndex > playList.length - 1) newIndex = 0;
      if (newIndex < 0) newIndex = playList.length - 1;
    }

    dispatch(changeCurrentSongAction(playList[newIndex]));
    dispatch(changePlayListIndexAction(newIndex));
    const lyricRes = await getLyrics(playList[newIndex].id);
    // console.log(lyricRes);
    dispatch(changeLyricsAction(parseLyrics(lyricRes.lrc.lyric)));
  },
);
//删除歌曲列表中的某首歌
export const fetchDeleteSongAction = createAsyncThunk<void, number, { state: IRootState }>(
  'deleteMusic',
  async (id: number, { dispatch, getState }) => {
    const playList = getState().player.playList;
    const findIndex = playList.findIndex((item) => item.id === id);
    const playListIndex = getState().player.playListIndex;
    if (findIndex === playListIndex) {
      //删除歌曲===正在播放歌曲
      const newPlayList = playList.filter((item) => item.id != id);
      dispatch(changeCurrentSongAction(playList[0])); //切换到第一首歌
      dispatch(changePlayListAction(newPlayList));
      // console.log(newPlayList);
      dispatch(changePlayListIndexAction(0)); //播放序号切换
    } else if (findIndex < playListIndex) {
      //小于正在播放
      const newPlayList = playList.filter((item) => item.id != id);
      dispatch(changePlayListAction(newPlayList));
      // console.log(newPlayList);
      dispatch(changePlayListIndexAction(playListIndex - 1)); //序号-1
    } else {
      //大于正在播放
      const newPlayList = playList.filter((item) => item.id != id);
      dispatch(changePlayListAction(newPlayList));
    }
  },
);
interface IPlayerState {
  currentSong: Song;
  lyrics: ILyric[];
  lyricIndex: number;
  playList: Song[];
  playListIndex: number;
  playMode: number;
}
const initialState: IPlayerState = {
  currentSong: {
    name: '海风',
    mainTitle: null,
    additionalTitle: null,
    id: 415807032,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 12028059,
        name: '四季音色',
        tns: [],
        alias: [],
      },
    ],
    alia: [],
    pop: 85,
    st: 0,
    rt: '',
    fee: 8,
    v: 60,
    crbt: null,
    cf: '',
    al: {
      id: 34725447,
      name: '春夏之交，清旋淡律',
      picUrl: 'https://p2.music.126.net/vVChT7FznNS8wzc2ekTV_A==/109951162821588597.jpg',
      tns: [],
      pic_str: '109951162821588597',
      pic: 109951162821588590,
    },
    dt: 154549,
    h: {
      br: 320000,
      fid: 0,
      size: 6184795,
      vd: 5678,
      sr: 44100,
    },
    m: {
      br: 192000,
      fid: 0,
      size: 3710894,
      vd: 8302,
      sr: 44100,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 2473944,
      vd: 10002,
      sr: 44100,
    },
    sq: {
      br: 728396,
      fid: 0,
      size: 14071611,
      vd: 5676,
      sr: 44100,
    },
    hr: null,
    a: null,
    cd: '1',
    no: 1,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 2,
    s_id: 0,
    mark: 17180008512,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 27,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    displayTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mv: 0,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 0,
    publishTime: 1464805573720,
  },
  lyrics: [],
  lyricIndex: -1,
  playList: [
    {
      name: '海风',
      mainTitle: null,
      additionalTitle: null,
      id: 415807032,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12028059,
          name: '四季音色',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 85,
      st: 0,
      rt: '',
      fee: 8,
      v: 60,
      crbt: null,
      cf: '',
      al: {
        id: 34725447,
        name: '春夏之交，清旋淡律',
        picUrl: 'https://p2.music.126.net/vVChT7FznNS8wzc2ekTV_A==/109951162821588597.jpg',
        tns: [],
        pic_str: '109951162821588597',
        pic: 109951162821588590,
      },
      dt: 154549,
      h: {
        br: 320000,
        fid: 0,
        size: 6184795,
        vd: 5678,
        sr: 44100,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 3710894,
        vd: 8302,
        sr: 44100,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 2473944,
        vd: 10002,
        sr: 44100,
      },
      sq: {
        br: 728396,
        fid: 0,
        size: 14071611,
        vd: 5676,
        sr: 44100,
      },
      hr: null,
      a: null,
      cd: '1',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 17180008512,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 27,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      displayTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rurl: null,
      mst: 9,
      cp: 0,
      rtype: 0,
      mv: 0,
      publishTime: 1464805573720,
    },
    {
      name: '难念的经',
      mainTitle: null,
      additionalTitle: null,
      id: 5271858,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 6456,
          name: '周华健',
          tns: [],
          alias: [],
        },
      ],
      alia: ['1997年TVB版电视剧《天龙八部》片头曲'],
      pop: 100,
      st: 0,
      rt: '',
      fee: 0,
      v: 746,
      crbt: null,
      cf: '',
      al: {
        id: 513052,
        name: '电视剧歌曲大全',
        picUrl: 'https://p2.music.126.net/kwahKngiu5K4s2hktASbsw==/109951165792137374.jpg',
        tns: [],
        pic_str: '109951165792137374',
        pic: 109951165792137380,
      },
      dt: 288853,
      h: {
        br: 320000,
        fid: 0,
        size: 11556615,
        vd: -46330,
        sr: 44100,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6933986,
        vd: -43747,
        sr: 44100,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4622672,
        vd: -42110,
        sr: 44100,
      },
      sq: {
        br: 915177,
        fid: 0,
        size: 33044004,
        vd: -46322,
        sr: 44100,
      },
      hr: null,
      a: null,
      cd: '1',
      no: 11,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17179869696,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 713,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      displayTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 684010,
      publishTime: 991065600000,
    },
    {
      name: '沐风',
      mainTitle: null,
      additionalTitle: null,
      id: 1296816863,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12028059,
          name: '四季音色',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 80,
      st: 0,
      rt: '',
      fee: 8,
      v: 54,
      crbt: null,
      cf: '',
      al: {
        id: 71982590,
        name: '沐风',
        picUrl: 'https://p2.music.126.net/pEyAvmXFO3bXtsOXSrj2Fw==/109951163427970183.jpg',
        tns: [],
        pic_str: '109951163427970183',
        pic: 109951163427970180,
      },
      dt: 217583,
      h: {
        br: 320000,
        fid: 0,
        size: 8706133,
        vd: -20750,
        sr: 44100,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5223697,
        vd: -18131,
        sr: 44100,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3482479,
        vd: -16428,
        sr: 44100,
      },
      sq: {
        br: 677734,
        fid: 0,
        size: 18432968,
        vd: -20752,
        sr: 44100,
      },
      hr: null,
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17180008512,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 21,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      displayTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      publishTime: 1532620800000,
    },
  ],
  playListIndex: 0,
  playMode: 0, //0顺序播放  1随机播放   2单曲循环
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload;
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload;
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload;
    },
    changePlayListIndexAction(state, { payload }) {
      state.playListIndex = payload;
    },
    changePlayListAction(state, { payload }) {
      state.playList = payload;
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload;
    },
  },
});

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlayListAction,
  changePlayListIndexAction,
  changePlayModeAction,
} = playerSlice.actions;
export default playerSlice.reducer;
