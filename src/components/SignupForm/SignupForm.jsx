import { useDispatch } from 'react-redux';
import { signUp } from 'features/auth/operations';

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
      <button type="submit">Sign Up</button>
    </form>
  );
};
