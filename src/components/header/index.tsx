import React from "react";
import { FaRegNewspaper, FaHackerNewsSquare } from "react-icons/fa";
// import { RiVirusLine } from "react-icons/ri";
import { GiBrazil, GiItalia, GiShamrock } from "react-icons/gi";
import Link from "next/link";

function Header() {
  return (
    <nav className="bg-gray-200 h-11 flex items-center">
      <strong className="text-lg md:mx-4 ml-4 mr-2">
        <Link href="/">
          <a>The_newsroom</a>
        </Link>
      </strong>
      <ul className="flex items-center space-x-2">
        <li className="w-6 h-6 hover:opacity-80">
          <Link href="/trendingnews">
            <a>
              <FaRegNewspaper color="#60A5FA" size={24} />
            </a>
          </Link>
        </li>
        {/* <li className="w-6 h-6 hover:opacity-80">
          <Link href="/news/coronavirus">
            <a>
              <RiVirusLine color="#60A5FA" size={24} />
            </a>
          </Link>
        </li> */}
        <li className="w-6 h-6 hover:opacity-80">
          <Link href="/news/italy">
            <a>
              <GiItalia color="#60A5FA" size={24} />
            </a>
          </Link>
        </li>
        <li className="w-6 h-6 hover:opacity-80">
          <Link href="/news/ireland">
            <a>
              <GiShamrock color="#60A5FA" size={24} />
            </a>
          </Link>
        </li>
        <li className="w-6 h-6 hover:opacity-80">
          <Link href="/news/brazil">
            <a>
              <GiBrazil color="#60A5FA" size={24} />
            </a>
          </Link>
        </li>
        <li className="w-6 h-6 hover:opacity-80">
          <Link href="/news/programming">
            <a>
              <FaHackerNewsSquare color="#60A5FA" size={24} />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
