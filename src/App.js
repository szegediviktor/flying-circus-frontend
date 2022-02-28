import Login from "./Login";
import Signup from "./Signup";
import UserContext from "./UserContext";
import Profile from "./Profile";
import Private from "./Private";
import Google from "./Google";

function App() {
    const handleSignUpOnSuccess = () => {
        console.log("done");
    };
    const handleLoginOnSuccess = () => {
        console.log("done login");
    };

    return (
        <UserContext>
            <div className="App">
                <Signup onSuccess={handleSignUpOnSuccess} />
                <Login onSuccess={handleLoginOnSuccess} />
                <Google />
                <Profile />
                <Private message="secret message" />
            </div>
        </UserContext>
    );
}

export default App;
