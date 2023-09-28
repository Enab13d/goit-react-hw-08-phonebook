import styled from '@emotion/styled';
import { theme } from 'constants';

export const List = styled.ul`
  width: 100%;
  padding-left: 0;
  list-style: none;
  background-color: ${theme.colors.abmientWhite};
  li:nth-of-type(even) {
    background-color: ${theme.colors.contactBg};
  }
`;
