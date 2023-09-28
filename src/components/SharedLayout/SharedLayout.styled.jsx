import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from 'constants';
export const Container = styled.div`
  padding: ${theme.sizing(3)};
  max-width: 420px;

  ${theme.mq[0]} {
    width: 768px;
    margin-left: auto;
    margin-right: auto;
  }
  ${theme.mq[1]} {
    width: 1440px;
  }
`;
export const HeaderContentWrapper = styled.div`
${theme.mq[0]} {
  display: flex;
  align-items: baseline;
justify-content: space-between;
}
padding: ${theme.sizing(2)};
`

export const StyledHeader = styled.header`
width: 100%;
padding-top: ${theme.sizing(3)};
padding-bottom: ${theme.sizing(3)};
border-bottom: 1px solid ${theme.colors.darkBlue};
background: rgb(13,32,141);
background: linear-gradient(90deg, rgba(13,32,141,0.8996848739495799) 45%, rgba(0,174,255,1) 100%);
margin-bottom: ${theme.sizing(7)};
`
export const NavBar = styled.nav`
  padding: ${theme.sizing(2)};
  display: flex;
  align-items: center;
  column-gap: ${theme.sizing(2)};
  margin-bottom: ${theme.sizing(3)};
`;
export const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  color: white;
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
`;