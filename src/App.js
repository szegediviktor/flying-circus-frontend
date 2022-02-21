import Signup from "./Signup";

function App() {
    const handleSignUpOnSuccess = () => {
        console.log("done");
    };

    return (
        <div className="App">
            <Signup onSuccess={handleSignUpOnSuccess} />
        </div>
    );
}

export default App;
