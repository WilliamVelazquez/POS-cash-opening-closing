/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { cleanText, cleanCurrency, updateCurrency } from 'Utils/utilities';

import Button from '../components/Button';
import InputExpense from '../components/InputExpense';

const Expenses = ({ expenses, setExpenses }) => {
  // console.log('expenses->', expenses);

  const addExpense = () => {
    // console.log('expenses', expenses);
    const defaultExpense = {
      reason: '',
      value: '$0.00',
    };
    setExpenses([
      ...expenses,
      defaultExpense,
    ]);
  };

  const deleteExpense = (index) => {
    setExpenses(
      expenses.slice(0, index).concat(expenses.slice(index + 1, expenses.length)),
    );
  };

  const updateExpenseReason = (reason, index) => {
    const newExpenses = [...expenses];
    newExpenses[index].reason = cleanText(reason);
    setExpenses(newExpenses);
  };

  const updateExpenseValue = (value, index) => {
    // console.log(value, index);
    const newExpenses = [...expenses];
    newExpenses[index].value = updateCurrency(cleanCurrency(value));
    setExpenses(newExpenses);
  };

  return (
    <>
      <Button
        text='Agregar gasto'
        onClick={addExpense}
        background='#d2643a'
        hoverBackground='#fb7b4b'
      />
      {
        expenses &&
        expenses.map((expense, index) => <InputExpense expenses={expenses} handleDelete={deleteExpense} handleUpdateReason={updateExpenseReason} handleUpdateValue={updateExpenseValue} key={index} index={index} />)
      }
    </>
  );
};

export default Expenses;
