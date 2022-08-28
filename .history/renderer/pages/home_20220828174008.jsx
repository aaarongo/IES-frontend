import React from 'react';
import Head from 'next/head';
import LoginPage from './LoginPage/LoginPage.jsx';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Income and Expense System</title>
      </Head>
      <LoginPage />
        {/* <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <img src="/images/logo.png" /> */}
    </React.Fragment>
  );
};

export default Home;
