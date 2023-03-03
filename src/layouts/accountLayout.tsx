import { useState, useRef, FC } from 'react';
import classNames from 'classnames';
import { TfiClose } from 'react-icons/Tfi';
import OpenNav from 'components/openNav';
import { PageLayout } from './pageLayout';

interface Props {
  floating: (openSide: boolean, close: () => void) => JSX.Element;
  children: JSX.Element;
  pageTitle: { id: string; defaultMessage: string };
  fluid?: JSX.Element;
  navText: string;
}

export const AccountLayout: FC<Props> = ({
  floating,
  children,
  pageTitle,
  fluid,
  navText,
}) => {
  const [openSide, setOpenSide] = useState(false);
  const slideOut = useRef<any>();

  const openNav = () => {
    slideOut.current.focus();
    setOpenSide(true);
    document.querySelector('body')?.classList.add('over-lay');
  };

  const close = () => {
    setOpenSide(false);

    document.querySelector('body')?.classList.remove('over-lay');
  };

  const handleBlur = (e: any) => {
    if (e.target.classList.contains('p-nav')) return;

    if (!openSide) return;
    const leavingParent = !slideOut.current.contains(e.relatedTarget);
    if (leavingParent) {
      // close();
    }
  };

  const handleClick = (e: any) => {
    if (e.target?.tagName === 'A') {
      close();
    }
  };

  return (
    <PageLayout pageTitle={pageTitle} useTopNav={false}>
      <div className="bg-[#f5f5f5] h-full flex-1 flex">
        <div className="flex flex-wrap flex-col-reverse lg:flex-row container mx-auto ">
          <aside className="lg:max-w-1/5 w-full lg:px-3.5 pt-20 z-50">
            <div className="lg:sticky top-24">
              {openSide && (
                <div
                  className="bg-black-0.4 fixed top-0 left-0 h-screen w-screen"
                  style={{
                    zIndex: -1,
                  }}
                  onClick={close}
                ></div>
              )}
              <div
                onClick={handleClick}
                onBlur={handleBlur}
                ref={slideOut}
                tabIndex={-1}
                className={classNames(
                  'lg:relative lg:block fixed transform left-0 transition-all duration-300',
                  {
                    'left-0 z-50 top-0 h-screen bg-primary w-screen max-w-xs px-3.5 py-5': openSide,
                    'lg:-translate-x-0 -translate-x-full': !openSide,
                  }
                )}
              >
                <div className="flex justify-end lg:hidden w-full z-10 mb-5">
                  <button onClick={close}>
                    <TfiClose className="inner-close fill-current text-white leading-4 w-5 h-5 left-0 -top-3" />
                  </button>
                </div>
                {floating(openSide, close)}
              </div>

              <div>{fluid}</div>
            </div>
          </aside>
          <section
            className={classNames(
              'lg:max-w-4/5 w-full shadow-xl pt-20 flex-1 px-2 lg:px-10'
            )}
          >
            {children}
          </section>
          <OpenNav
            openNav={openNav}
            close={close}
            text={navText}
            openSide={openSide}
          />
        </div>
      </div>
    </PageLayout>
  );
};
