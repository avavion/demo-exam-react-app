import React from 'react'

const SignUpPage = () => {
    return (
        <article className="post" >
            <h1>Registration</h1>
            <form action="#">
                <label htmlFor="form-name">Your name</label>
                <input id="form-name" type="text" placeholder="Your name" /><br />
                <label htmlFor="form-email">Your email</label>
                <input id="form-email" type="text" placeholder="Your email" /> <span>Error message</span><br />
                <label htmlFor="form-password">Your password</label>
                <input id="form-password" type="text" placeholder="Your password" /><br />
                <input type="submit" value="Registration" />
            </form>
        </article >
    )
}

export default SignUpPage