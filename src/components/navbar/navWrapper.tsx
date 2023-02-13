import React, { FC, useEffect, useRef, useState } from 'react';

const defaultStyles: any = {
  position: 'static',
  top: '0',
};

export const NavWrapper: FC<{ children: any }> = ({ children }) => {
  const navRef = useRef<any>();
  const currentScroll = useRef<any>();
  const [styles, setStyles] = useState<any>({ ...defaultStyles });

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

        if (currentScroll.current > 150) {
          let newState: any = {
            position: 'fixed',
            top: '-200px',
            transition: 'unset',
          };

          if (currentScroll.current > 250) {
            newState = {
              position: 'fixed',
              top: '0',
              transition: 'top 0.5s ease',
              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
            };
          }

          setStyles((prevStyles: any) => ({
            ...prevStyles,
            ...newState,
          }));
        } else {
          setStyles(defaultStyles);
        }
      }

      reqId = scroll(loop);
    };
    loop();
    return () => {
      window.cancelAnimationFrame(reqId);
    };
  }, [currentScroll, navRef]);

  return (
    <div ref={navRef} className="w-full">
      {children(styles)}
    </div>
  );
};
