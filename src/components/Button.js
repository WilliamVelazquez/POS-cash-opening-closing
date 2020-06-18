/* eslint-disable react/jsx-indent-props */
import React from 'react';
import styled from 'styled-components';
import { transitions } from '../styled/mixins';

const MainButton = styled.button`
  ${transitions}
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  padding: 10px 30px;
  border-radius: 10px;
  color: ${(props) => props.textColor};
  background: ${(props) => props.background};
  &:hover{
    background-color: ${(props) => props.hoverBackground};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: rgba(68, 83, 226, 0.6);
  }
`;

const Button = ({
  text = '',
  type = 'button',
  onClick = null,
  className,
  textColor = '#ffffff',
  background = '#4453e2',
  hoverBackground = '#5e71f5', //'#5061d4',
  disabled = null,
  visible = true,
}) => {
  if (!text || !visible) return null;
  return (
    <MainButton
      type={type}
      onClick={onClick}
      className={className}
      textColor={textColor}
      background={background}
      hoverBackground={hoverBackground}
      disabled={disabled}
    >
      {text}
    </MainButton>
  );
};

export default Button;
