/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react';
import styled from 'styled-components';
import { getCurrentDate, getCurrentTime, currencyToCents, centsToNormal } from 'Utils/utilities';
import { currencyRegex } from 'Utils/validations';

import TwoColumns from '../components/TwoColumns';
import LabelInput from '../components/LabelInput';
import Button from '../components/Button';
import useForm from '../hooks/useForm';

import { dateYYYYMMDDPattern, time24HPattern, currencyPattern } from '../utils/validations';
import Expenses from './Expenses';

const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 30px;
  justify-items: center;
`;

const CustomTwoColumns = styled(TwoColumns)`
  margin-bottom: 20px;
`;

const ExpensesContainer = styled.div`
  display: grid;
  grid-gap: 15px;
  justify-content: center;
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
  const [expenses, setExpenses] = useState([]);
  // console.log(loadedData);
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

  const calculateExpenses = () => {
    const totalExpenses = expenses.reduce((total, expense) => {
      // console.log(expense.value);
      return total + ((expense.value.match(currencyRegex) ? currencyToCents(expense.value) : 0));
    }, 0);
    // console.log('totalExpenses', totalExpenses);
    return totalExpenses;
  };

  const calculateClosingCash = () => {
    // return (loadedData.close && loadedData.value && `$${centsToNormal((parseInt(loadedData.close, 10) + parseInt(loadedData.value, 10))).toFixed(2)}`) || '$0.00';
    const closingCash = (loadedData.close && loadedData.value && (parseInt(loadedData.close, 10) + parseInt(loadedData.value, 10) - calculateExpenses())) || 0;
    // console.log('closingCash', closingCash);
    return closingCash;
  };

  const handleSubmit = async (event) => {
    const formData = handleData(event);
    console.log(formData);
    calculateExpenses();
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
        <ExpensesContainer>
          <Expenses expenses={expenses} setExpenses={setExpenses} />
        </ExpensesContainer>
        <Button
          text={`Cerrar caja con ${`$${centsToNormal(calculateClosingCash()).toFixed(2)}` || '$0.00'}`}
          onClick={(calculateClosingCash() < 0) ? null : handleSubmit}
          disabled={calculateClosingCash() < 0}
        />
      </Form>
    </MainContainer>
  );
};

export default ClosingForm;
