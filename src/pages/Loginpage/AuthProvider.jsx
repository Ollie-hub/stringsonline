import { useState, useEffect, useContext, createContext, useCallback, useMemo } from "react";
import { Route, Redirect } from "react-router-dom";
import JwtDecode from 'jwt-decode'

const AuthContext = createContext({
    loggedIn: false,
    user: null,
    login: () => { },
    logout: () => { },
});

export function AuthProvider(props) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (!user) {
            const access_token = sessionStorage.getItem('token');
            const user_id = sessionStorage.getItem('user_id');
            if (access_token && user_id) {
                setUser({
                    access_token,
                    user_id
                })
            }
        }
    }, [user, setUser]);

    const login = useCallback((username, password) => {

        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencodedBody = new URLSearchParams();
        urlencodedBody.append("username", username);
        urlencodedBody.append("password", password);

        let requestOptions = {
            method: "POST",
            headers: headers,
            body: urlencodedBody,
            redirect: "follow",
        };

        fetch("https://api.mediehuset.net/token", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log("login -> result", result)
                // If user exists  
                if (result.access_token) {
                    const decodedTokenInfo = JwtDecode(result.access_token);
                    setUser({ ...result, tokenInfo: decodedTokenInfo });
                    // Store token and user id in session storage
                    sessionStorage.setItem("token", result.access_token);
                    sessionStorage.setItem("user_id", result.user_id);
                }
                return result
            }).catch(err => {
                console.log(err);
                return err
            })
    }, [setUser]);
    // clears session storage when logging out.
    const logout = useCallback(() => {
        setUser(null);
        sessionStorage.clear();
    }, [setUser]);

    const value = useMemo(() => {
        const loggedIn = !!user;

        return {
            loggedIn,
            user,
            login,
            logout,
        };
    }, [user, login, logout]);

    return (
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext);
}
export function AuthRoute(props) {
    const { loggedIn } = useAuth();
    if (!loggedIn) return <Redirect to="/login" />
    return <Route {...props} />
}