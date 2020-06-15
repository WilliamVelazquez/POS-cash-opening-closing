import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  font-weight: 500;
  text-align: center;
  border-radius: 20px;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.color};
  @media screen and (min-width: 768px) {
    text-align: left;
    font-weight: 600;
  }
`;

const SectionTitle = (props) => {
  const { title = '', color = '#4453e2', textColor = '#ffffff' } = props;
  return (
    <Container color={color} textColor={textColor}>{ title }</Container>
  );
};

export default SectionTitle;
