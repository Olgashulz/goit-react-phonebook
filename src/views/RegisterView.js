import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../redux/auth/auth-operations';
import styles from './RegisterView.module.css';
import { NavLink } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function RegisterView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (!name || !email || !password) return toast.error('Please enter your contact details!')

        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h1 className={styles.title}> Phonebook </h1>
            <span className={styles.subtitle}>
                Simple registration and convenient use this application.
            </span>


            <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
                <NavLink
                    to="/"
                    exact
                    className={styles.closeBtn}
                    activeStyle={styles.activeLink}
                >
                    X
                </NavLink>
                <label className={styles.labelForm}>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        className={styles.inputForm} />
                </label>

                <label className={styles.labelForm}>
                    E-mail
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className={styles.inputForm}
                    />
                </label>

                <label className={styles.labelForm}>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className={styles.inputForm}
                    />
                </label>

                <button
                    type="submit"
                    className={styles.formBtn}>
                    Registration</button>
            </form>
        </div>
    );
}

