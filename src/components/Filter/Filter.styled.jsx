import styled from '@emotion/styled';
import { theme } from 'constants';

export const FilterLabel = styled.label`
  display: inline-block;
  margin-bottom: ${theme.sizing(3)};
`;
export const FilterField = styled.input`
  width: 100%;
  height: ${theme.sizing(5)};
  padding-left: ${theme.sizing(2)};
  padding-top: ${theme.sizing(1)};
  padding-bottom: ${theme.sizing(1)};
  background-color: ${theme.colors.abmientWhite};
  border-radius: 4px;
  border: none;
`;
