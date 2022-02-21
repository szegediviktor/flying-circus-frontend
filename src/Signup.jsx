import UserForm from "./UserForm";

const signup = (email, password) => {
    return fetch("/signup", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    }).then((res) => {
        return res.json();
    });
};

const Signup = (props) => {
    const handleSignUp = (email, password) => {
        signup(email, password).then(() => {
            props.onSuccess();
        });
    };

    return (
        <div>
            <UserForm onSubmit={handleSignUp} />
        </div>
    );
};

export default Signup;
