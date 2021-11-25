import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import * as authSelectors from '../redux/auth/auth-selectors';


<Redirect to="/login" />

export default function PrivatRoute({ children, ...routeProps }) {
    const isLogedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Route {...routeProps}>
            {isLogedIn ? children : <Redirect to="/login" />}
        </Route>
    );
}