import { useState } from "react";
import UserForm from "./UserForm";

const signup = (email, password) => {
    let status = true;

    return fetch("/signup", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
        .then((res) => {
            if (!res.ok) {
                status = false;
            }
            return res;
        })
        .then((res) => {
            return res.json();
        })
        .then((info) => {
            if (status) {
                return info;
            }
            throw info;
        });
};

const Signup = (props) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSignUp = (email, password) => {
        setError(null);
        setLoading(true);
        signup(email, password)
            .then(() => {
                props.onSuccess();
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
            <h2>Registration:</h2>
            {error ? <p>{error?.message ?? "Unknown error"}</p> : null}
            <UserForm onSubmit={handleSignUp} loading={loading} />
        </div>
    );
};

export default Signup;
