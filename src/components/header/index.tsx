import React from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { RiVirusLine } from "react-icons/ri";
import { GiItalia, GiShamrock } from "react-icons/gi";
import Link from "next/link";

function Header() {
  return (
    <nav className="bg-gray-200 h-11 flex items-center">
      <strong className="text-lg mx-4">Newsroom</strong>
      <ul className="flex items-center space-x-2">
        <li className="w-6 h-6 hover:opacity-80">
          <Link href="/topnews">
            <a>
              <FaRegNewspaper color="#60A5FA" size={24} />
            </a>
          </Link>
        </li>
        <li className="w-6 h-6 hover:opacity-80">
          <Link href="/topnews/coronavirus">
            <a>
              <RiVirusLine color="#60A5FA" size={24} />
            </a>
          </Link>
        </li>
        <li className="w-6 h-6 hover:opacity-80">
          <Link href="/topnews/italy">
            <a>
              <GiItalia color="#60A5FA" size={24} />
            </a>
          </Link>
        </li>
        <li className="w-6 h-6 hover:opacity-80">
          <Link href="/topnews/ireland">
            <a>
              <GiShamrock color="#60A5FA" size={24} />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
