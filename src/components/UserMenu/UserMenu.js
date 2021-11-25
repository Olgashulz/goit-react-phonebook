import { useDispatch, useSelector } from 'react-redux';

import { authOperations } from '../../redux/auth';
import defaultAvatar from '../../pictures/icons/hi.png';
import * as authSelectors from '../../redux/auth/auth-selectors';
import styles from "./UserMenu.module.css"


export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    const avatar = defaultAvatar;

    return (
        <div className={styles.container}>
            <img src={avatar} alt="" width="30" className={styles.avatar} />
            <span className={styles.name}>{name}</span>
            <button type="button" className={styles.btn} onClick={() => dispatch(authOperations.logOut())}>
            </button>
        </div>
    );
}