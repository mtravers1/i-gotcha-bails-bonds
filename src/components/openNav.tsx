import { FC, useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { FaBars } from 'react-icons/fa';

interface OpenProps {
  openNav: () => void;
  close: () => void;
  text: string;
  openSide: boolean;
}

const Open: FC<OpenProps> = ({
  openNav,
  close = () => {
    return;
  },
  openSide,
}) => {
  const currentScroll = useRef<any>();
  const navRef = useRef<any>();
  const [slided, setSlided] = useState<boolean>();

  useEffect(() => {
    let reqId: any;

    const scroll =
      window.requestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };

    const loop = () => {
      if (currentScroll.current !== window.scrollY) {
        currentScroll.current = window.scrollY;

        const navPosition = navRef.current?.getBoundingClientRect().y;

        if (currentScroll.current > 200) {
          if (navPosition < 90) {
            setSlided(true);
          }
        } else {
          setSlided(false);
        }
      }

      reqId = scroll(loop);
    };

    loop();
    // window.addEventListener('scroll', close);

    return () => {
      // window.removeEventListener('scroll', close);
      window.cancelAnimationFrame(reqId);
    };
  }, [currentScroll, close]);

  const color = slided ? 'text-white' : 'text-primary';

  return (
    <div
      className={classNames(
        'p-nav flex lg:hidden cursor-pointer h-7 z-10 mb-5 top-24 justify-end',
        {
          'fixed container -mx-10': slided,
          'static mr-2.5': !slided,
        }
      )}
      ref={navRef}
    >
      <div
        onClick={openNav}
        className={classNames(
          'p-nav flex-center p-5 mt-5 rounded-sm flex items-center transition-visibility duration-300',
          {
            'bg-txt': slided,
            'bg-white': !slided,
            'invisible opacity-0': openSide,
            'visible opacity-100': !openSide,
          }
        )}
      >
        <FaBars
          className={`fill-current ${color} mr-2.5 pointer-events-none w-7`}
        />
        <p className={`${color} pointer-events-none text-md`}>
          <FormattedMessage id="navigation" defaultMessage="Navigation" />
        </p>
      </div>
    </div>
  );
};

export default Open;
