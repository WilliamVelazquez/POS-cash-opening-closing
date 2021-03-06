import React, { useState } from 'react';

import useToggle from '../hooks/useToggle';

import CubeLoader from '../components/CubeLoader';
import Layout from '../components/Layout';
import TwoColumns from '../components/TwoColumns';
import CashOpening from '../containers/CashOpening';
import CashClosing from '../containers/CashClosing';
import DottedLine from '../components/DottedLine';

const App = () => {
  const [activeOpen, setActiveOpen] = useState(false);
  const [isLoading, toogleLoading, setIsLoading] = useToggle(false);
  return (
    <Layout>
      <TwoColumns>
        <CashOpening activeOpen={activeOpen} setActiveOpen={setActiveOpen} setIsLoading={setIsLoading} />
        <DottedLine />
        <CashClosing activeOpen={activeOpen} setActiveOpen={setActiveOpen} setIsLoading={setIsLoading} />
      </TwoColumns>
      {isLoading && <CubeLoader />}
    </Layout>
  );
};

export default App;
