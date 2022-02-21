import Login from "./Login";
import Signup from "./Signup";

function App() {
    const handleSignUpOnSuccess = () => {
        console.log("done");
    };

    return (
        <div className="App">
            <h2>Sign Up!</h2>
            <Signup onSuccess={handleSignUpOnSuccess} />
            <br />
            <br />
            <h2>Sign In!</h2>
            <Login onSuccess={handleSignUpOnSuccess} />
        </div>
    );
}

export default App;
