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
  padding: 8px 30px;
  border-radius: 6px;
  color: ${(props) => props.textColor};
  background: ${(props) => props.background};
  &:hover{
    background-color: ${(props) => props.hoverBackground};
  }
`;

const Button = ({
  text = '',
  type = 'button',
  onClick = null,
  className,
  textColor = '#ffffff',
  background = '#4453e2',
  hoverBackground = '#5061d4',
}) => {
  if (!text) return null;
  return (
    <MainButton
      type={type}
      onClick={onClick}
      className={className}
      textColor={textColor}
      background={background}
      hoverBackground={hoverBackground}
    >
      {text}
    </MainButton>
  );
};

export default Button;
