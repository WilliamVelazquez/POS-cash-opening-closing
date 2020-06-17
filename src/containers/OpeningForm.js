/* eslint-disable react/jsx-indent-props */
import React from 'react';
import styled from 'styled-components';
import { openingSubmitValidation, dateYYYYMMDDPattern, time24HPattern, currencyPattern, currencyRegex } from 'Utils/validations';
import { currencyToCents, cleanText, centsToNormal } from 'Utils/utilities';

import TwoColumns from '../components/TwoColumns';
import LabelInput from '../components/LabelInput';
import LabelTextArea from '../components/LabelTextArea';
import Button from '../components/Button';
import useForm from '../hooks/useForm';

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

const OpeningForm = ({ loadedData = {}, activeOpen }) => {
  // console.log('loadedData', loadedData);
  const defaultData = {
    openingDate: loadedData.date_open.split('-').join('/') || '',
    openingTime: loadedData.hour_open.slice(0, 5) || '',
    openingInitialTotal: (loadedData.value_open && `$${centsToNormal(loadedData.value_open).toFixed(2)}`) || '$0.00',
    openingPreviousTotal: (loadedData.value_previous_close && `$${centsToNormal(loadedData.value_previous_close).toFixed(2)}`) || '$0.00',
    openingObservations: '',
  };

  const [data, handleChange, handleData] = useForm(defaultData);

  const handleSubmit = async (event) => {
    const formData = handleData(event);
    console.log(formData);

    // console.log(data.openingInitialTotal.match(currencyRegex));

    if (!openingSubmitValidation(data.openingInitialTotal) && !!data.openingInitialTotal.match(currencyRegex)) {
      const saveObj = {
        'date_open': formData.openingDate.split('-').join('/'),
        'hour_open': formData.openingTime.slice(0, 5),
        'value_previous_close': currencyToCents(formData.openingPreviousTotal),
        'value_open': currencyToCents(formData.openingInitialTotal),
        'observation': cleanText(formData.openingObservations),
      };
      console.log(saveObj);
    } else {
      console.log('Initial Total not valid!');
    }
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
            label='Hora (hh:mm)'
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
            disabled={activeOpen}
          />
        </TwoColumns>
        <LabelTextArea
          id='openingObservations'
          label='Observaciones'
          onChange={handleChange}
          value={data.openingObservations}
          disabled={activeOpen}
        />
        <Button text='Enviar' onClick={!openingSubmitValidation(data.openingInitialTotal) ? handleSubmit : null} disabled={(openingSubmitValidation(data.openingInitialTotal) || !data.openingInitialTotal.match(currencyRegex))} visible={!activeOpen} />
      </Form>
    </MainContainer>
  );
};

export default OpeningForm;
