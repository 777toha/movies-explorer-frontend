import React from "react";
import { useNavigate, useOutlet } from "react-router-dom";

type ProtectedRouteProps = React.PropsWithChildren<{
    isLoggedIn: boolean;
    element?: JSX.Element
}>

const ProtectedRoute = (props: ProtectedRouteProps) => {
    const navigate = useNavigate();
    const outlet = useOutlet();
    return (props.isLoggedIn ? outlet : (navigate('/', { replace: true }), null))
};

export default ProtectedRoute;