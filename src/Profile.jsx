import loginGuard from "./loginGuard";

const Profile = ({ user }) => {
    return (
        <div>
            <pre>{JSON.stringify(user)}</pre>
        </div>
    );
};

export default loginGuard(Profile);
