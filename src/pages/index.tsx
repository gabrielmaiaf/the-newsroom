import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import { FaRegNewspaper, FaHackerNewsSquare } from "react-icons/fa";
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
            <Link href="/trendingnews">
              <a className="flex items-center hover:opacity-70">
                <FaRegNewspaper color="#aaa" className="mr-2" />
                Trending News
              </a>
            </Link>
          </li>
          <li>
            <Link href="/news/brazil">
              <a className="flex items-center hover:opacity-70">
                <GiBrazil color="#aaa" className="mr-2" />
                Brazil
              </a>
            </Link>
          </li>
          <li>
            <Link href="/news/italy">
              <a className="flex items-center hover:opacity-70">
                <GiItalia color="#aaa" className="mr-2" />
                Italy
              </a>
            </Link>
          </li>
          <li>
            <Link href="/news/ireland">
              <a className="flex items-center hover:opacity-70">
                <GiShamrock color="#aaa" className="mr-2" />
                Ireland
              </a>
            </Link>
          </li>
          <li>
            <Link href="/news/programming">
              <a className="flex items-center hover:opacity-70">
                <FaHackerNewsSquare color="#aaa" className="mr-2" />
                Programming (Hacker News)
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default Home;
