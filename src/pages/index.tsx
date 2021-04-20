import { NextPage } from "next";
import React from "react";
import Link from "next/link";
import { FaRegNewspaper } from "react-icons/fa";
import { GiItalia, GiShamrock } from "react-icons/gi";

const Home: NextPage = () => (
  <div className="mx-36 h-screen flex justify-center flex-col">
    <h1 className="text-4xl mb-8">Newsroom</h1>
    <strong className="text-xl my-3 block">
      Your place to read news everyday
    </strong>
    <div className="container">
      <p>Select one topic to start reading:</p>
      <ul>
        <li className="my-1">
          <Link href="/topnews">
            <a className="flex items-center">
              <FaRegNewspaper color="#aaa" className="mr-2" />
              Top news
            </a>
          </Link>
        </li>
        <li className="my-1">
          <Link href="/topnews">
            <a className="flex items-center">
              <GiItalia color="#aaa" className="mr-2" />
              Italy
            </a>
          </Link>
        </li>
        <li className="my-1">
          <Link href="/topnews">
            <a className="flex items-center">
              <GiShamrock color="#aaa" className="mr-2" />
              Ireland
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

// Home.getInitialProps = async () => {
//   const response = await axios("https://rssfeederback.herokuapp.com/");
//   let rssData = null;
//   if (response && response.data) rssData = response.data;
//   return { rssData };
// };

export default Home;
