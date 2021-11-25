import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from './Filter.module.css';
import { filterContact, resetFilter } from "../../redux/actions";

const Filter = () => {
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch();

    return (
        <label className={styles.findLabel}>
            Find contact by name
            <input
                type="text"
                name="name"
                value={filter}
                onChange={event => dispatch(filterContact(event.target.value))}
                className={styles.inputForm}
                onBlur={() => dispatch(resetFilter())}
            />
        </label>
    )
}

export default Filter;

