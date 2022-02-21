import Profile from "./Profile";
import UserForm from "./UserForm";

const login = (email, password) => {
    return fetch("/signin", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    }).then((res) => {
        return res.json();
    });
};

const Login = (props) => {
    const handleLogin = (email, password) => {
        login(email, password).then(() => {
            props.onSuccess();
        });
    };

    return (
        <div>
            <UserForm onSubmit={handleLogin} />
            <Profile />
        </div>
    );
};

export default Login;
