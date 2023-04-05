import React from "react";
import Head from "next/head";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>My Next.js App</title>
        <meta name="description" content="My Next.js application" />
      </Head>
      <header>
        <Image
          src="/images/fallen_angel.jpeg"
          alt="Fallen Code"
          width={50}
          height={50}
        />
        <nav>
          <ul>
            <li>Home</li>
            <li>Study</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
