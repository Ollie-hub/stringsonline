import React from "react";
import useAuth from "./AuthProvider";
import LoginComp from './LoginComp';
import './login.scss';

const Login = (props) => {

    // Loginsiden henter LoginComp componentet hvis brugeren ikke er logget ind. Det er dette komponent hvor indlogning sker

    const { logout, loggedIn } = useAuth();

    if (!loggedIn) {
        return (
            <LoginComp />
        )
    }
    return (
        <div>

            <section className="breadcrumbs">
                <p>Login</p>
            </section>

            <article className="loggedin">
                <p className="login-p">Du er nu logget ind</p>
                <button className="logout-button" onClick={logout}>Logout</button>
            </article>

        </div>
    )
}

export default Login;