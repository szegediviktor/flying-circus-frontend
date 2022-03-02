import { useState, useContext } from "react";
import UserForm from "./UserForm";
import { userContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const apiLogin = (email, password) => {
    let status = true;

    return fetch("/api/signin", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    }).then((res) => {
        if (res.ok) {
            return res.json();
        }
        throw new Error("Wrong credentials");
    });
};

const Login = (props) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { login } = useContext(userContext);
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        setError(null);
        setLoading(true);
        apiLogin(email, password)
            .then((user) => {
                login(user);
                navigate("/");
            })
            .catch((err) => {
                setError(err);
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div>
            <h2>Login:</h2>
            {error ? <p>{error?.message ?? "Unknown error"}</p> : null}
            <UserForm onSubmit={handleLogin} loading={loading} />
        </div>
    );
};

export default Login;
