import { useDispatch } from 'react-redux';
import { logIn } from 'features/auth/operations';
import {
  CustomLoginForm,
  LoginField,
  LoginLabel,
  LogintBtn,
} from './LoginForm.styled';
import { toast } from 'react-toastify';
import { selectError, selectIsLoggedIn } from 'features/auth/selectors';
import { useSelector } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const credentials = {
      email: email.value,
      password: password.value,
    };

    dispatch(logIn(credentials));
    console.log(error && !isLoggedIn);
    if (error) {
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
