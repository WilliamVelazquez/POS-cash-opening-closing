/* eslint-disable react/jsx-indent-props */
import React from 'react';
import styled from 'styled-components';
import TwoColumns from '../components/TwoColumns';
import LabelInput from '../components/LabelInput';
import LabelTextArea from '../components/LabelTextArea';
import Button from '../components/Button';
import useForm from '../hooks/useForm';

import { dateYYYYMMDDPattern, time24HPattern, currencyPattern } from '../utils/validations';

const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 30px;
  justify-items: center;
`;

const Form = styled.form`
  width: 95%;
  display: grid;
  grid-gap: 16px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    width: 90%;
  }
`;

const OpeningForm = ({ loadedData = {} }) => {
  console.log('loadedData', loadedData);
  const defaultData = {
    openingDate: '',
    openingTime: '',
    openingInitialTotal: '',
    openingPreviousTotal: '',
    openingObservations: '',
  };

  const [data, handleChange, handleData] = useForm(defaultData);

  const handleSubmit = async (event) => {
    const formData = handleData(event);
    console.log(formData);
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit}>
        <TwoColumns>
          <LabelInput
            value={data.openingDate}
            onChange={handleChange}
            id='openingDate'
            label='Fecha (yyyy/mm/dd)'
            type='text'
            pattern={dateYYYYMMDDPattern}
            disabled
          />
          <LabelInput
            value={data.openingTime}
            onChange={handleChange}
            id='openingTime'
            label='Hora (hh:mm:ss)'
            type='text'
            pattern={time24HPattern}
            disabled
          />
          <LabelInput
            value={data.openingPreviousTotal}
            onChange={handleChange}
            id='openingPreviousTotal'
            label='Total anterior'
            type='text'
            pattern={currencyPattern}
            disabled
          />
          <LabelInput
            value={data.openingInitialTotal}
            onChange={handleChange}
            id='openingInitialTotal'
            label='Total inicial'
            type='text'
            pattern={currencyPattern}
          />
        </TwoColumns>
        <LabelTextArea
          id='openingObservations'
          label='Observaciones'
          onChange={handleChange}
          value={data.openingObservations}
        />
        <Button text='Enviar' onClick={handleSubmit} />
      </Form>
    </MainContainer>
  );
};

export default OpeningForm;
