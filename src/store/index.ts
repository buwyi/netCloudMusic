import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import counterReducer from './modules/counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//type getStateFnType = typeof store.getState
type IRootState = ReturnType<typeof store.getState>;
//type dispatchType = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export default store;
