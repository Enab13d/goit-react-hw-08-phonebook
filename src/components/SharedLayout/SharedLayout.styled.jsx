import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from 'constants';
export const Container = styled.div`
  padding-left: ${theme.sizing(3)};
  padding-right: ${theme.sizing(3)};
  max-width: 420px;

  ${theme.mq[0]} {
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
  };
  ${theme.mq[1]} {
    max-width: 1440px;
  };
`;
export const HeaderContentWrapper = styled.div`
${theme.mq[0]} {
  display: flex;
  align-items: baseline;
justify-content: space-between;
}
`

export const StyledHeader = styled.header`
width: 100%;
border-bottom: 1px solid ${theme.colors.darkBlue};
background: rgb(13,32,141);
background: linear-gradient(90deg, rgba(13,32,141,0.8996848739495799) 45%, rgba(0,174,255,1) 100%);

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
  position: relative;
  &.active {
    &: after {
      transform: scale(1);
    }
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0px;
    display: inline-block;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: red;
    transform: scale(0);
    transition: transform ${theme.transitionDuration} ${theme.transitionTimingFunction};

  }
`;