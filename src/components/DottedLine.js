import React from 'react';
import styled from 'styled-components';

const Separator = styled.hr`
  width: 98%;
  color: white;
  height: 1px;
  border: none;
  background-color: white;
  border-top: 6px dotted #dcdcdc;
  @media screen and (min-width: 1024px) {
    display:none;
  }
`;

function DottedLine({ width = '98%', size = '6px' }) {
  return (
    <Separator />
  );
}

export default DottedLine;
