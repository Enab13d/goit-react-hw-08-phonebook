import styled from "@emotion/styled";
import { theme } from "constants";
export const USerMenuContainer = styled.div`
display: flex;
align-items: baseline;
column-gap: ${theme.sizing(2)};
color: white;

`

export const LogoutBtn = styled.button`
width: 100px;
height: 30px;
border-radius: 8px;
border: none;
font-weight: 600;
background-color: ${theme.colors.darkBlue};
color: white;
&:hover,
&:focus {
  color: white;
  background-color: ${theme.colors.formBorder};
}
`;
export const UserLabel = styled.p`
display: block;
`