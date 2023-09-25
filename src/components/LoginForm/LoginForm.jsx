import { useDispatch } from "react-redux";
import { useLoginMutation } from "services/auth";
import { setCredentials } from "features/authSlice";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const [login] = useLoginMutation();

    const handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        const credentials = {
            email: email.value,
            password: password.value,
        }
        try {
            const user = await login(credentials);
            dispatch(setCredentials(user));
            e.target.reset();
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            <button type="submit">Log In</button>
        </form>
    )
}