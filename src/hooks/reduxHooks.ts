import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ReduxStateDataType } from 'redux/reducers';
import type { AppDispatch } from '../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReduxStateDataType> =
  useSelector;
