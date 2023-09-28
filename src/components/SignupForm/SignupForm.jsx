import { useDispatch } from 'react-redux';
import { signUp } from 'features/auth/operations';
import {CustomSignupForm, SignupLabel, SignupField, SignuptBtn} from '../SignupForm/SignupForm.styled';

export const SignupForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const credentials = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(signUp(credentials));
    e.target.reset();
  };

  return (
    <CustomSignupForm onSubmit={handleSubmit}>
      <SignupLabel htmlFor="name">Name</SignupLabel>
      <SignupField type="text" name="name" />
      <SignupLabel htmlFor="email">Email</SignupLabel>
      <SignupField type="email" name="email" />
      <SignupLabel htmlFor="password">Password</SignupLabel>
      <SignupField type="password" name="password" />
      <SignuptBtn type="submit">Sign Up</SignuptBtn>
    </CustomSignupForm>
  );
};
