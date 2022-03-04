import { useCallback, useEffect, useContext, useRef } from "react";
import { userContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const Google = () => {
    const { login } = useContext(userContext);
    const popup = useRef(null);
    const navigate = useNavigate();

    const openPopUp = useCallback(() => {
        const width = 600;
        const height = 600;
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;

        const url = "http://localhost:3000/api/google";

        popup.current = window.open(
            url,
            "",
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
        );
    }, []);

    useEffect(() => {
        const listener = (e) => {
            const data = e.data;
            if (typeof data === "string") {
                const parsed = JSON.stringify(data);
                login(parsed);
                popup.current?.close();
                navigate("/");
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
