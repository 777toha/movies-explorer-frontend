import React from "react";
import { useNavigate, useOutlet } from "react-router-dom";

type ProtectedRouteProps = React.PropsWithChildren<{
    isLoggedIn: boolean;
    children?: JSX.Element
  }>

  const ProtectedRoute = ({ isLoggedIn }: ProtectedRouteProps) => {
    const navigate = useNavigate();
    const outlet = useOutlet();

    React.useEffect(() => {
        if (!isLoggedIn) {
            console.log(isLoggedIn)
            navigate("/signup", { replace: true });
        }
    }, [isLoggedIn, navigate]);

    return outlet
}

export default ProtectedRoute;