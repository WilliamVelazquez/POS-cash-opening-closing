import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Api from 'Utils/api';
import { isEmptyObject } from 'Utils/validations';

import SectionTitle from '../components/SectionTitle';
import OpeningForm from './OpeningForm';
import NoDataMessage from '../components/NoDataMessage';

import mockBalance from '../utils/mocks/balance.json';

const Container = styled.section`
`;

const CashOpening = (props) => {
  const [results, setResults] = useState({});
  const { setIsLoading = () => console.log() } = props;

  const getCashOpeningData = () => {
    const serviceURL = '/cashier/balance';
    Api.apiGet(serviceURL, (json) => {
      if (json.status !== 'Success') {
        console.log('error');
      } else {
        console.log('json.results', json.results);
        setResults({ ...json.results });
        setIsLoading(false);
      }
    }, () => { setResults(mockBalance.results); setIsLoading(false); });
  };

  useEffect(() => {
    setIsLoading(true);
    getCashOpeningData();
  }, [null]);

  return (
    <Container>
      <SectionTitle title='Apertura de caja' />
      {
        isEmptyObject(results) ?
        <NoDataMessage text='Información no disponible' /> :
        <OpeningForm loadedData={results} />
      }
    </Container>
  );
};

export default CashOpening;
