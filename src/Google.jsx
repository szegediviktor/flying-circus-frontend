import { useCallback, useEffect, useContext } from "react";
import { userContext } from "./UserContext";

const Google = () => {
    const { login } = useContext(userContext);

    const openPopUp = useCallback(() => {
        const width = 600;
        const height = 600;
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;

        const url = "http://localhost:3000/api/google";

        const popUp = window.open(
            url,
            "",
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
        );
    }, []);

    useEffect(() => {
        const listener = (e) => {
            console.log(e);
            const data = e.data;
            if (data.email) {
                login(data);
            }
        };
        window.addEventListener("message", listener);
        return () => {
            window.removeEventListener("message", listener);
        };
    }, [login]);

    return (
        <div>
            <button onClick={openPopUp}>Login with Google</button>
        </div>
    );
};

export default Google;
