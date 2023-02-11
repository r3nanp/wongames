import { Inter } from '@next/font/google';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  return (
    <>
      <h2 className={clsx('font-semibold text-2xl', inter.className)}>Hello next.js</h2>
    </>
  );
}
