import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TwoColumns = (props) => {
  const { className, children } = props;
  return (
    <Container className={className}>
      {
        children
      }
    </Container>
  );
};

export default TwoColumns;
