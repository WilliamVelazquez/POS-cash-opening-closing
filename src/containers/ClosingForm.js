/* eslint-disable react/jsx-indent-props */
import React from 'react';
import styled from 'styled-components';
import { getCurrentDate, getCurrentTime, currencyToCents, centsToNormal } from 'Utils/utilities';

import TwoColumns from '../components/TwoColumns';
import LabelInput from '../components/LabelInput';
import Button from '../components/Button';
import useForm from '../hooks/useForm';

import { dateYYYYMMDDPattern, time24HPattern, currencyPattern } from '../utils/validations';

const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 30px;
  justify-items: center;
`;

const CustomTwoColumns = styled(TwoColumns)`
  margin-bottom: 20px;
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

const ClosingForm = ({ loadedData = {} }) => {
  console.log(loadedData);
  // console.log(centsToNormal(loadedData.close).toFixed(2));

  const defaultData = {
    closingDate: getCurrentDate() || '',
    closingTime: getCurrentTime() || '',
    closingCashSales: (loadedData.close && `$${centsToNormal(loadedData.close).toFixed(2)}`) || '$0.00',
    closingCreditSales: (loadedData.card && `$${centsToNormal(loadedData.card).toFixed(2)}`) || '$0.00',
    closingSalesTotal: (loadedData.close && loadedData.card && `$${centsToNormal((parseInt(loadedData.close, 10) + parseInt(loadedData.card, 10))).toFixed(2)}`) || '$0.00',
    closingOpeningTotal: (loadedData.value && `$${centsToNormal(loadedData.value).toFixed(2)}`) || '$0.00',
    closingTotal: (loadedData.close && loadedData.value && `$${centsToNormal((parseInt(loadedData.close, 10) + parseInt(loadedData.value, 10))).toFixed(2)}`) || '$0.00',
  };
  const [data, handleChange, handleData] = useForm(defaultData);

  const handleSubmit = async (event) => {
    const formData = handleData(event);
    console.log(formData);
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit}>
        <CustomTwoColumns>
          <LabelInput
            value={data.closingDate}
            onChange={handleChange}
            id='closingDate'
            label='Fecha (yyyy/mm/dd)'
            type='text'
            pattern={dateYYYYMMDDPattern}
            disabled
          />
          <LabelInput
            value={data.closingTime}
            onChange={handleChange}
            id='closingTime'
            label='Hora (hh:mm:ss)'
            type='text'
            pattern={time24HPattern}
            disabled
          />
          <LabelInput
            value={data.closingCashSales}
            onChange={handleChange}
            id='closingCashSales'
            label='Ventas en efectivo'
            type='text'
            pattern={currencyPattern}
            disabled
          />
          <LabelInput
            value={data.closingCreditSales}
            onChange={handleChange}
            id='closingCreditSales'
            label='Ventas por tarjeta'
            type='text'
            pattern={currencyPattern}
            disabled
          />
          <LabelInput
            value={data.closingSalesTotal}
            onChange={handleChange}
            id='closingSalesTotal'
            label='Total en Ventas'
            type='text'
            pattern={currencyPattern}
            disabled
          />
          <LabelInput
            value={data.closingOpeningTotal}
            onChange={handleChange}
            id='closingOpeningTotal'
            label='Total de apertura'
            type='text'
            pattern={currencyPattern}
            disabled
          />
          <LabelInput
            value={data.closingTotal}
            onChange={handleChange}
            id='closingTotal'
            label='Total de caja'
            type='text'
            pattern={currencyPattern}
            disabled
          />
        </CustomTwoColumns>
        <Button text={`Cerrar caja con $${data.closingOpeningTotal || '0.00'}`} onClick={handleSubmit} />
      </Form>
    </MainContainer>
  );
};

export default ClosingForm;
