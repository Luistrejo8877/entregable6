import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const { handleSubmit, reset, register} = useForm()
    const { loginUser} = useAuth()
    const navigate = useNavigate()

    const submit = data => {
        loginUser(data, navigate)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
        <div>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" id="email" />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input {...register('password')} type="password" id="password" />
        </div>
        <button>Login</button>
        </form>
    );
};

export default LoginPage;
