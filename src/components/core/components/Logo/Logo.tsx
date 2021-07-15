import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';
import { inan } from '@inan/icons';

const Styledinan = styled(inan)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <Styledinan />
    </Box>
  );
}
