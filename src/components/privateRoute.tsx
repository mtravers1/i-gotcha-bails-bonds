import { useEffect, useState, FC } from 'react';
import { useRouter } from 'next/router';
// import Image from 'next/image';
import { useAppSelector } from 'hooks/reduxHooks';

export const PrivateRoute: FC<{ authProps: any; children: any }> = ({
  authProps,
  children,
}) => {
  const {
    auth: { loading, user },
  } = useAppSelector((state) => state);
  const [show, setShow] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!user?.firstName) {
      location.href = `/login?redirect=${encodeURIComponent(router.asPath)}`;
    } else {
      setShow(true);
    }
  }, [loading, router.asPath]);

  if (loading && !show) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        {/* <Image src="/images/loading.gif" width={100} height={100} /> */}
      </div>
    );
  }

  return <>{show && children}</>;
};
