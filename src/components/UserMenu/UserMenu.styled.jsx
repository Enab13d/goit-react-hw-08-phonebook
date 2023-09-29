import styled from "@emotion/styled";
import { theme } from "constants";
import { BiLogOut } from "react-icons/bi";
export const USerMenuContainer = styled.div`
display: flex;
align-items: baseline;
column-gap: ${theme.sizing(2)};
color: white;
`

export const LogoutBtn = styled.button`
width: 100px;
border-radius: 8px;
border: none;
font-weight: 600;
background-color: ${theme.colors.darkBlue};
color: white;
display: flex;
align-items: center;
padding: ${theme.sizing(2)};
column-gap: ${theme.sizing(2)};
transition: background-color ${theme.transitionDuration}
      ${theme.transitionTimingFunction},
    color ${theme.transitionDuration}
      ${theme.transitionTimingFunction};
&:hover,
&:focus {
  color: black;
  background-color: hsla(193, 35%, 89%, 1);
}
`;
export const UserLabel = styled.p`
display: block;
`
export const LogoutIcon = styled(BiLogOut)`
width: 20px;
height: 20px;
`