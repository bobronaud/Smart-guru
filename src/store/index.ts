import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import modalSlice from './slices/modalSlice';

const rootReducer = combineReducers({
	modal: modalSlice,
});

const createStore = (preloadedState?: Partial<RootState>) =>
	configureStore({
		reducer: rootReducer,
		preloadedState,
	});

export default createStore;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
