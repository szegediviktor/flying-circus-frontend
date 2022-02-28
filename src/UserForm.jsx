import { useState } from "react";

const UserForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email || password) {
            return props.onSubmit(email, password);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    className="input"
                    placeholder="email"
                    value={email}
                    onChange={handleEmailChange}
                    disabled={props.loading}
                />
                <input
                    type="password"
                    className="input"
                    placeholder="password"
                    value={password}
                    onChange={handlePasswordChange}
                    disabled={props.loading}
                />
                <button
                    type="submit"
                    className="submit-btn"
                    disabled={props.loading}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UserForm;
