import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLungsVirus, faPizzaSlice, faRssSquare } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

// Components
import HeaderComponents from './index.styled';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">
        RSS Feeder
      </span>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link href="/" passHref>
            <HeaderComponents.IconWrapper>
              <FontAwesomeIcon icon={faRssSquare} />
            </HeaderComponents.IconWrapper>
          </Link>
        </li>
        <span className="navbar-text">
          Top News:
        </span>
        <li className="nav-item">
          <Link href="/topnews" passHref>
            <HeaderComponents.IconWrapper>
              <FontAwesomeIcon icon={faNewspaper} />
            </HeaderComponents.IconWrapper>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/topnews/coronavirus" passHref>
            <HeaderComponents.IconWrapper>
              <FontAwesomeIcon icon={faLungsVirus} />
            </HeaderComponents.IconWrapper>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/topnews/italy" passHref>
            <HeaderComponents.IconWrapper>
              <FontAwesomeIcon icon={faPizzaSlice} />
            </HeaderComponents.IconWrapper>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/topnews/ireland" passHref>
            <HeaderComponents.IconWrapper>
              <FontAwesomeIcon icon={faPagelines} />
            </HeaderComponents.IconWrapper>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
