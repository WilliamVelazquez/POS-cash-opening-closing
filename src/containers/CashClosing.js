import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Api from 'Utils/api';
import SectionTitle from '../components/SectionTitle';
import NoDataMessage from '../components/NoDataMessage';
import ClosingForm from './ClosingForm';

const Container = styled.section``;

const CashClosing = ({ activeOpen }) => {
  return (
    <Container>
      <SectionTitle title='Cierre de caja' />
      {
        !activeOpen ?
        <NoDataMessage /> :
        <ClosingForm />
      }
    </Container>
  );
};

export default CashClosing;
