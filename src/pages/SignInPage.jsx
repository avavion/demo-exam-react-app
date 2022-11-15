import React from 'react'
import UserContext from '../context/UserContext';
import StorageService from '../services/StorageService';
import UserService from '../services/UserService';

const SignInPage = () => {
    const token = React.useContext(UserContext);

    const [form, setForm] = React.useState({
        email: "",
        password: ""
    });

    const onChangeHandle = (evt) => setForm({ ...form, [evt.target.name]: evt.target.value })


    const authorizeHandle = async (evt) => {
        evt.preventDefault();

        const formData = new FormData();

        for (const key of Object.keys(form)) {
            formData.append(key, form[key]);
        }

        const response = await UserService.signIn(formData);

        if (response.ok) {
            const { data } = await response.json();

            StorageService.set('_token', data.token);
            token.setUser(data.token);
        }
    }

    return (
        <article className="post">
            <h1>Login</h1>
            <form action="#">
                <label htmlFor="form-email">Your email</label>
                <input onChange={onChangeHandle.bind(this)} id="form-email" name='email' type="text" placeholder="Your email" /> <span>Error message</span><br />
                <label htmlFor="form-password">Your password</label>
                <input onChange={onChangeHandle.bind(this)} id="form-password" name="password" type="text" placeholder="Your password" /><br />
                <input onClick={authorizeHandle.bind(this)} type="submit" value="Login" />
            </form>
        </article>
    )
}

export default SignInPage