import { UserMenu } from 'components/UserMenu';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, NavBar, StyledNavLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <NavBar>
        <StyledNavLink to="/">Signup</StyledNavLink>
        <StyledNavLink to="/login">Login</StyledNavLink>
        <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      </NavBar>
      <UserMenu />
      <Suspense fallback={<p>loading...</p>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

