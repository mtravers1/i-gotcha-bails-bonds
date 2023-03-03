import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from 'hooks/reduxHooks';
import { logOut } from 'redux/reducers/user';

const Logout: FC = () => {
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  useEffect(() => {
    dispatch(logOut());
    push('/');
  }, []);

  return <div></div>;
};

export default Logout;
