import loginGuard from "./loginGuard";

const Private = (props) => {
    return <h1>This is a private component, hihihi...{props.message}</h1>;
};

const Guarded = loginGuard(Private);

export default Guarded;
