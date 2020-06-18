/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import styled from 'styled-components';
import LabelInput from './LabelInput';
import DeleteIcon from './DeleteIcon';

import { currencyPattern, currencyRegex } from '../utils/validations';

const Container = styled.div`
  display: grid;
  grid-gap: 15px;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 30px;
`;

const CustomDeleteIcon = styled(DeleteIcon)`
  cursor: pointer;
`;

const InputExpense = (props) => {
  const { index, expenses, handleDelete = null, handleUpdateValue = null, handleUpdateReason = null } = props;

  return (
    <Container>
      <LabelInput
        value={expenses[index].reason}
        onChange={(event) => handleUpdateReason(event.target.value, index)}
        id={`expenseReason${index}`}
        label='Motivo'
        type='text'
      />
      <LabelInput
        value={expenses[index].value}
        onChange={(event) => handleUpdateValue(event.target.value, index)}
        id={`expenseValue${index}`}
        label='Valor'
        type='text'
        pattern={currencyPattern}
        withError={!expenses[index].value.match(currencyRegex)}
      />
      <CustomDeleteIcon onClick={() => handleDelete(index)} size='24px' boxSize={32} />
    </Container>
  );
};

export default InputExpense;
