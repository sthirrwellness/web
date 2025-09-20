import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>STHIR - Your Wellness Partner</title>
        <meta name="description" content="STHIR - Your trusted wellness partner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow pt-16">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
