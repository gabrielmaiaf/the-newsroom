import React from "react";
import { GrRss } from "react-icons/gr";
import { FaRegNewspaper } from "react-icons/fa";
import { RiVirusLine } from "react-icons/ri";
import { GiItalia, GiShamrock } from "react-icons/gi";
import Link from "next/link";

// Components
import HeaderComponents from "./index.styled";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">RSS Feeder</span>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link href="/" passHref>
            <HeaderComponents.IconWrapper>
              <GrRss color="#aaa" />
            </HeaderComponents.IconWrapper>
          </Link>
        </li>
        <span className="navbar-text">Top News:</span>
        <li className="nav-item">
          <Link href="/topnews" passHref>
            <HeaderComponents.IconWrapper>
              <FaRegNewspaper color="#aaa" />
            </HeaderComponents.IconWrapper>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/topnews/coronavirus" passHref>
            <HeaderComponents.IconWrapper>
              <RiVirusLine color="#aaa" />
            </HeaderComponents.IconWrapper>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/topnews/italy" passHref>
            <HeaderComponents.IconWrapper>
              <GiItalia color="#aaa" />
            </HeaderComponents.IconWrapper>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/topnews/ireland" passHref>
            <HeaderComponents.IconWrapper>
              <GiShamrock color="#aaa" />
            </HeaderComponents.IconWrapper>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
