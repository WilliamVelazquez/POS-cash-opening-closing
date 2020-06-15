import React from 'react';

import './cube-loader.css';

function CubeLoader(props) {
  const { children } = props;
  return (
    <div className='loading'>
      <div>
        <div className='cssload-container'>
          <div className='cssload-thecube'>
            <div className='cssload-cube cssload-c1' />
            <div className='cssload-cube cssload-c2' />
            <div className='cssload-cube cssload-c4' />
            <div className='cssload-cube cssload-c3' />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default CubeLoader;
