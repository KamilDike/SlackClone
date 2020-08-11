import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="https://emergent-enterprise.com/wp-content/uploads/2019/01/slacklogo-620x350.png"
                    alt=""
                />
                <h1>
                    Sign in
                </h1>
                <button>Sign in with google</button>
            </div>
        </div>
    )
}

export default Login
