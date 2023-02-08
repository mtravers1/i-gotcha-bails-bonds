import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { Store } from 'redux';
import thunk from 'redux-thunk';
import reducers, { ReduxStateDataType } from './redux/reducers';
// import logger from 'redux-logger';

let middleware: any = [];

// if (process.env.NODE_ENV === 'development') {
//   middleware = [thunk, logger];
// } else middleware = [thunk];

middleware = [thunk];

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const makeStore = (): any => store;

// const debug = process.env.NODE_ENV;
const debug = false;

export const wrapper = createWrapper<Store<ReduxStateDataType>>(makeStore, {
  debug,
});

export type AppDispatch = typeof store.dispatch;
