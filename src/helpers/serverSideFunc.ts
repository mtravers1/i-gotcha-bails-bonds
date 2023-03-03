/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { axiosInstance } from 'helpers';

// eslint-disable-next-line
export function serverLogger(_a?: any, _b?: any) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line prefer-rest-params
    console.log(...arguments);
  }
}

export const getServerUserProfile = async (token: any) => {
  try {
    const res = await axiosInstance.get('/auth/profile/user', {
      headers: {
        token,
      },
    });

    serverLogger('Fetched user profile successfully');
    return { userProfile: res.data.data };
  } catch (err) {
    const funcError: any = err;
    serverLogger(
      'Error fetching user profile',
      funcError?.response?.data?.message
    );

    return { error: true };
  }
};
