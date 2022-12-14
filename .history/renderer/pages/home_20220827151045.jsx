import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LoginPage from './LoginPage/LoginPage';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Income and Expense System</title>
      </Head>
      <div>
        <LoginPage />
        {/* <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <img src="/images/logo.png" /> */}
      </div>
    </React.Fragment>
  );
};

export default Home;
