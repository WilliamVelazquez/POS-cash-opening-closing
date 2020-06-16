/* eslint-disable react/jsx-indent-props */
import React from 'react';
import styled from 'styled-components';
import { inputShadow } from '../styled/mixins';

const MainContainer = styled.div`
  margin: 0px auto;
  max-width: 1100px;
  text-align: left;
  width: calc(100% - 8px);
  @media screen and (min-width: 768px) {
    margin: 5px auto;
    text-align: left;
    /* margin-bottom: 22px; */
  }
`;

const Label = styled.span`
  margin-bottom: 4px;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const CommentInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;

const TextArea = styled.textarea`
  ${inputShadow}
  width: 100%;
  resize: none;
  padding: 12px;
  font-size: 12px;
  border-radius: 15px;
  border: 2px solid #041B2D;
  &:focus{
    outline: none;
    box-shadow: 0 0 5px rgba(68, 83, 226, 0.6);
  }
  @media screen and (min-width: 768px) {
    padding: 22px;
    font-size: 16px;
  }
`;

const CommentInput = (props) => {
  const { id = null, label = '', name, value = '', placeholder = '', rows = 3, onChange = null, className } = props;
  return (
    <MainContainer className={className}>
      <Label htmlFor={id || name || label}>{label}</Label>
      <CommentInputContainer>
        <TextArea
          id={id || name || label}
          name={name || label}
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={onChange}
        />
      </CommentInputContainer>
    </MainContainer>
  );
};

export default CommentInput;
