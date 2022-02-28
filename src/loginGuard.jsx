import { useContext } from "react";
import { userContext } from "./UserContext";

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
        const { user } = useContext(userContext);
        if (user) {
            return <Component {...props} user={user} />;
        }
        return null;
    };

    return Guarded;
};

export default loginGuard;
