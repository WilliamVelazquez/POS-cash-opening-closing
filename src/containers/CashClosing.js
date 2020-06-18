import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Api from 'Utils/api';
import { isEmptyObject } from 'Utils/validations';

import SectionTitle from '../components/SectionTitle';
import NoDataMessage from '../components/NoDataMessage';
import ClosingForm from './ClosingForm';

const Container = styled.section``;

const CashClosing = ({ activeOpen, setIsLoading = () => console.log() }) => {
  const [results, setResults] = useState({});

  const getCashOpeningData = () => {
    const serviceURL = '/has/open/cashier/balance';
    Api.apiGet(serviceURL, (json) => {
      if (json.msg !== 'Success') {
        console.log('error');
      } else {
        // console.log('json', json);
        setResults({ ...json });
        setIsLoading(false);
      }
    }, () => {
      // setResults(mockBalance.results);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (activeOpen) {
      setIsLoading(true);
      getCashOpeningData();
    }
  }, [activeOpen]);

  return (
    <Container>
      <SectionTitle title='Cierre de caja' />
      {
        (!activeOpen || isEmptyObject(results)) ?
        <NoDataMessage /> :
        <ClosingForm loadedData={results} />
      }
    </Container>
  );
};

export default CashClosing;
