/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { login } from 'redux/reducers/user';
import { User } from './interfaces';
import { getServerUserProfile } from './serverSideFunc';

export const initializeStore = (pageProps: any) => async (dispatch: any) => {
  dispatch(login({ user: pageProps?.userProfile } as any));
};

interface ProfileType {
  userProfile?: User;
  error?: any;
}

export const getAppData = async (context: any) => {
  const token = context?.ctx?.req?.headers?.cookie
    ?.split(';')
    ?.find((c: any) => c.trim().startsWith('token='))
    ?.split('=')[1];

  const [{ userProfile, error }]: [ProfileType] = await Promise.all([
    getServerUserProfile(token),
  ]);

  return { userProfile, error };
};
