import { useDispatch } from "react-redux";
import { setCredentials } from "features/authSlice";
import { useSignupMutation } from "services/auth";

export const SignupForm = () => {
    const dispatch = useDispatch();
    const [signup] = useSignupMutation();

    const handleSubmit = async e => {
        e.preventDefault();
        const { name, email, password } = e.target.elements;
        const credentials = {
            name: name.value,
            email: email.value,
            password: password.value,
        }
        try {
            const user = await signup(credentials);
            dispatch(setCredentials(user));
        } catch (error) {
            console.log(error);
        }
        
    }



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
    )
}