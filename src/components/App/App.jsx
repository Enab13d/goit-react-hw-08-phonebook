import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsRefreshing } from 'features/auth/selectors';
import { refreshUser } from 'features/auth/operations';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
const SignupPage = lazy(() => import('../Pages/SignupPage'));
const ContactsPage = lazy(() => import('../Pages/ContactsPage'));
const LoginPage = lazy(() => import('../Pages/LoginPage'));
export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing... </p>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </div>
  );
};
