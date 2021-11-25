import React from 'react';
import styles from './HomeView.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as authSelectors from '../redux/auth/auth-selectors';
import * as authOperations from '../redux/auth/auth-operations';


export default function HomeView() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> Phonebook </h1>
            <span className={styles.subtitle}>
                Please register or log into your account
            </span>

            <div className={styles.phone}>
                {isLoggedIn ?
                    <NavLink
                        to="/contacts"
                        exact
                        className={styles.button_contacts}
                        activeStyle={styles.activeLink}
                    >

                        Contacts
                    </NavLink> :
                    <NavLink
                        to="/register"
                        exact
                        className={styles.button_orange}
                        activeStyle={styles.activeLink}
                    >
                        Registation
                    </NavLink>}
                {isLoggedIn ?
                    <NavLink
                        to="/"
                        exact
                        className={styles.button_logOut}
                        activeStyle={styles.activeLink}
                        onClick={() => dispatch(authOperations.logOut())}
                    >
                        Logout
                    </NavLink>
                    :
                    <NavLink
                        to="/login"
                        exact
                        className={styles.button}
                        activeStyle={styles.activeLink}>
                        login
                    </NavLink>
                }
            </div>
        </div>
    )
};

