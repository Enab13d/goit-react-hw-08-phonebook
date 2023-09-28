import { useDispatch } from 'react-redux';
import { logIn } from 'features/auth/operations';
import { CustomLoginForm, LoginField, LoginLabel, LogintBtn } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const credentials = {
      email: email.value,
      password: password.value,
    };
    dispatch(logIn(credentials));
    e.target.reset();
  };
  return (
    <CustomLoginForm onSubmit={handleSubmit}>
      <LoginLabel htmlFor="email">Email</LoginLabel>
      <LoginField type="email" name="email" />
      <LoginLabel htmlFor="password">Password</LoginLabel>
      <LoginField type="password" name="password" />
      <LogintBtn type="submit">Log In</LogintBtn>
    </CustomLoginForm>
  );
};
