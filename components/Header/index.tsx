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
      <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/fallen_angel.jpeg"
            alt="Fallen Code"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#study"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Study
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
