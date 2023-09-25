

import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
const SignupPage = lazy(() => import('../Pages/SignupPage'));
const ContactsPage = lazy(() => import('../Pages/ContactsPage'));
const LoginPage = lazy(() => import('../Pages/LoginPage'))
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
        <Route index element={<SignupPage />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/contacts' element={<ContactsPage/>} />
        </Route>
      </Routes>
</div>
  );
};
