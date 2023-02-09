import { FC } from 'react';

export const PageTitleCard: FC<{ children: any }> = ({ children }) => {
  return (
    <section className="bg-primary flex items-center justify-center px-3.5 py-11 text-3xl lg:text-5xl font-black text-white">
      <h2>{children}</h2>
    </section>
  );
};
