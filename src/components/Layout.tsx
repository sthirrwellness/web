import Navbar from '../../components/Navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>STHIR - Your Wellness Partner</title>
        <meta name="description" content="STHIR - Your trusted wellness partner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
