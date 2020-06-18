/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg``;

const Path = styled.path`
  stroke-width: 0;
  stroke: ${(p) => p.color};
  fill: ${(p) => p.color};
`;

const DeleteIcon = (props) => {
  const { size = '1em', boxSize = 32, color = '#d62323', className } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${boxSize} ${boxSize}`}
      {...props}
    >
      <g data-name='Delete'>
        <Path
          color={color}
          className={className}
          data-name='Delete-path'
          d='M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z'
        />
      </g>
    </Svg>
  );
};

export default DeleteIcon;
