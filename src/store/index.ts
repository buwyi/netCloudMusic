import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import counterReducer from './modules/counter';
import recommendReducer from '../pages/discover/c-pages/recommend/store';
import playerReducer from '../pages/player/store/player';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer,
    player: playerReducer,
  },
});

//type getStateFnType = typeof store.getState
export type IRootState = ReturnType<typeof store.getState>;
//type dispatchType = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export default store;
