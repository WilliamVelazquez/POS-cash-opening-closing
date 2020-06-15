import React from 'react';
import './header.css';
import LOGO from '../assets/images/mipOS-color.svg';

const Header = () => {
  return (
    <header>
      <article className='grid'>
        <figure className='logo'>
          <a href='/'>
            <img src={LOGO} alt='mipOS Logo' />
          </a>
        </figure>
      </article>
    </header>
  );
};

export default Header;
