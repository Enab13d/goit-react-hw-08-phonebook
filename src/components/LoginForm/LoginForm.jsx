import { useDispatch } from 'react-redux';
import { logIn } from 'features/auth/operations';
import {
  CustomLoginForm,
  LoginField,
  LoginLabel,
  LogintBtn,
} from './LoginForm.styled';
import { toast } from 'react-toastify';
import { selectError, selectIsRefreshing, selectIsLoggedIn } from 'features/auth/selectors';
import { useSelector } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);
  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const credentials = {
      email: email.value,
      password: password.value,
    };

    const res = await dispatch(logIn(credentials));
    console.log(res);
    if (res.payload = 'Request failed with status code 400') {
      toast.error(
        `The email and password You entered didn't match our records. Please, double check and try again`
      );
    } else {
      e.target.reset();
    }
  };
  return (
    <CustomLoginForm autoComplete="off" onSubmit={handleSubmit}>
      <LoginLabel htmlFor="email">Email</LoginLabel>
      <LoginField type="email" name="email" id="email" />
      <LoginLabel htmlFor="password">Password</LoginLabel>
      <LoginField type="password" name="password" id="password" />
      <LogintBtn type="submit">Log In</LogintBtn>
    </CustomLoginForm>
  );
};
