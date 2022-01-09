import { useEffect, memo, ReactNode } from 'react';
import Head from 'next/head';
import { useWebNavbar } from '../TossNextApp/WebNavbarProvider/WebNavbarProvider';

interface Props {
  head?: string;
  children: ReactNode;
}

function Title({ children, head }: Props) {
  const { supportOSNavbar, setTitle, clearTitle } = useWebNavbar();

  useEffect(() => {
    setTitle(children);
    return () => clearTitle();
  }, [children, setTitle, clearTitle, supportOSNavbar]);

  const headTitle = typeof children === 'string' ? children : head;

  return (
    <Head>
      <title>{headTitle}</title>
    </Head>
  );
}

export default memo(Title);