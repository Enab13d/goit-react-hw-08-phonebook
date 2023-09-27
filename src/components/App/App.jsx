import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsRefreshing } from 'features/auth/selectors';
import { refreshUser } from 'features/auth/operations';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
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
          <Route index element={<RestrictedRoute component={<SignupPage />}/>} />
          <Route path="/login" element={<RestrictedRoute component={<LoginPage />}/>} />
          <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />}/>} />
        </Route>
      </Routes>
    </div>
  );
};
