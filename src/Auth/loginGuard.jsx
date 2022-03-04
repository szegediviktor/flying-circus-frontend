import { useContext, useEffect } from "react";
import { userContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

// const loginGuard = (Component) => {
//     return (props) => {
//         const { user } = useContext(userContext);
//         if (user) {
//             return <Component {...props} user={user} />;
//         }
//         return null;
//     };
// };

const loginGuard = (Component) => {
    const Guarded = (props) => {
        const navigate = useNavigate();
        const { user } = useContext(userContext);

        useEffect(() => {
            if (!user) {
                navigate("/");
            }
        }, [navigate, user]);

        if (user) {
            return <Component {...props} user={user} />;
        }
        return null;
    };

    return Guarded;
};

export default loginGuard;
