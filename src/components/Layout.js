import React from 'react';
import Header from './Header';

import './layout.css';

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div className='content'>
        {
          children
        }
      </div>
    </>
  );
};

export default Layout;
