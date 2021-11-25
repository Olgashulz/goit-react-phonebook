import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import * as authSelectors from '../redux/auth/auth-selectors';

export default function PuclicRoute({ children,
    restricted = false,
    ...routeProps
}) {
    // console.log(restricted)
    const isLogedIn = useSelector(authSelectors.getIsLoggedIn);
    const soulRedirect = isLogedIn && restricted;

    return <Route {...routeProps}>
        {soulRedirect ? <Redirect to="/" /> : children}
    </Route>
}