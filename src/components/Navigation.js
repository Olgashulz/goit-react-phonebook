import React from 'react';
import { NavLink } from 'react-router-dom';
import * as authSelectors from '../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';


const styles = {
    link: {
        display: 'inline-block',
        textDecoration: 'none',
        padding: 12,
        fontWeight: 700,
        color: '#000',

    },
    activeLink: {
        color: '#899ad0',
    },
};

const Navigation = () => {
    const isLogedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <nav>
            <NavLink
                to="/"
                exact
                style={styles.link}
                activeStyle={styles.activeLink}>
                Home
            </NavLink>

            {isLogedIn && <NavLink
                to="/contacts"
                exact
                style={styles.link}
                activeStyle={styles.activeLink}
            >
                Contacts
            </NavLink>}
        </nav>
    )

};

export default Navigation;