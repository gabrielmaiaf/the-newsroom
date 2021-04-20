import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import { FaRegNewspaper } from "react-icons/fa";
import { GiBrazil, GiItalia, GiShamrock } from "react-icons/gi";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Newsroom</title>
    </Head>
    <div className="mx-36 h-screen flex justify-center flex-col">
      <h1 className="text-4xl mb-8">Newsroom</h1>
      <strong className="text-xl my-3 block">
        Your place to read news everyday
      </strong>
      <div className="container">
        <p>Select one topic to start reading:</p>
        <ul className="my-1 space-y-1">
          <li>
            <Link href="/topnews">
              <a className="flex items-center hover:opacity-70">
                <FaRegNewspaper color="#aaa" className="mr-2" />
                Top news
              </a>
            </Link>
          </li>
          <li>
            <Link href="/topnews/brazil">
              <a className="flex items-center hover:opacity-70">
                <GiBrazil color="#aaa" className="mr-2" />
                Brazil
              </a>
            </Link>
          </li>
          <li>
            <Link href="/topnews/italy">
              <a className="flex items-center hover:opacity-70">
                <GiItalia color="#aaa" className="mr-2" />
                Italy
              </a>
            </Link>
          </li>
          <li>
            <Link href="/topnews/ireland">
              <a className="flex items-center hover:opacity-70">
                <GiShamrock color="#aaa" className="mr-2" />
                Ireland
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </>
);

// Home.getInitialProps = async () => {
//   const response = await axios("https://rssfeederback.herokuapp.com/");
//   let rssData = null;
//   if (response && response.data) rssData = response.data;
//   return { rssData };
// };

export default Home;
