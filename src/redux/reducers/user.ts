import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { getUser, logout, setToken } from 'helpers';
import { AuthStateData, DispatchActionFunc, User } from 'helpers/interfaces';
import { LOG_OUT } from 'redux/constants';

export const initialState: Partial<AuthStateData> = {
  user: null,
  loading: true,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.loading = false;
    },

    loading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LOG_OUT, (state) => {
      Object.assign(state, initialState);
      state.loading = false;
    });
    builder.addCase(HYDRATE, (state, action: any) => {
      Object.assign(state, action.payload.auth);
    });
  },
});

const { actions, reducer } = user;
const { loading, saveUser } = actions;

export interface UserData extends AuthStateData {
  token: string;
}

const login: any = (userData: UserData) => (
  dispatch: DispatchActionFunc
): AuthStateData | null => {
  dispatch(loading(true));
  let user;

  if (userData) {
    user = {
      token: userData?.token,
      ...(userData?.user || {}),
      ...(userData?.admin || {}),
    };
  }

  if (!user) {
    user = getUser();
  }

  const userToken = getUser()?.token;

  if (user?.token || userToken) {
    setToken(user?.token || userToken);
  }

  dispatch(saveUser(user));

  dispatch(loading(false));
  return user;
};

const logOut: any = () => async (
  dispatch: DispatchActionFunc
): Promise<void> => {
  logout();
  dispatch({ type: LOG_OUT, payload: null });
};

export { login, logOut };

export default reducer;
