import React from 'react';
import styled from 'styled-components';
import NotificationIcon from './NotificationIcon';

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;

const Message = styled.p`
  margin: 20px;
  font-size: 16px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;

const NoDataMessage = ({ text = 'No existe información para mostrar', size = '48px', boxSize = 32 }) => {
  return (
    <Container>
      <NotificationIcon size={size} boxSize={boxSize} />
      <Message>{text}</Message>
    </Container>
  );
};

export default NoDataMessage;
