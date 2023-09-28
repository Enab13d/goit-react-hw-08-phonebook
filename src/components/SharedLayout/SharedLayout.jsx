import { UserMenu } from 'components/UserMenu';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { selectIsLoggedIn } from 'features/auth/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
  Container,
  NavBar,
  StyledNavLink,
  StyledHeader,
  HeaderContentWrapper,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <StyledHeader>
        <Container>
          <HeaderContentWrapper>
            <NavBar>
              {isLoggedIn ? (
                <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              ) : (
                <>
                  <StyledNavLink to="/">Signup</StyledNavLink>
                  <StyledNavLink to="/login">Login</StyledNavLink>
                </>
              )}
            </NavBar>
            {isLoggedIn && <UserMenu />}
          </HeaderContentWrapper>
        </Container>
      </StyledHeader>
      <Container>
      <Suspense fallback={<p>loading...</p>}>
          <Outlet />
      </Suspense>
      </Container>
    </>
  );
};
