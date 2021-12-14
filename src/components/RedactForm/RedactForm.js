import { useState } from "react";
import { operations } from '../../redux';
import { useDispatch, useSelector } from "react-redux";
import { selectors, } from '../../redux';
import * as actions from '../../redux/actions';
// import * as operations from '../redux/auth/auth-selectors';

// import shortid from 'shortid';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './RedactForm.module.css';

// export function GetUserById(id) {
//     const contacts = useSelector(state => state.contacts.items);

//     return contacts.items.find(contact =>
//         contact.id === id)
// };

// console.log(GetUserById('61a0e4325deb2600150f56d0'))



export default function RedactForm(id) {

    const contact = useSelector(selectors.GetUserById)
    console.log(contact)

    const [redactedContact, setRedactedContact] = useState({
        name: contact.name,
        number: contact.number,
        id: contact.id
    });

    // const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { name, value } = event.currentTarget;
        setRedactedContact((prev) => ({ ...prev, [name]: value }));
        // setUser((prev) => ({ ...prev, disabled: false }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const contact = {
            id: redactedContact.id,
            name: redactedContact.name,
            number: redactedContact.number
        }

        dispatch(operations.contactRedacted(contact.id, contact));
        console.log(contact)
        resetForm();
    }

    const resetForm = () => {
        // console.log(user)
        setRedactedContact((prev) => ({ ...prev, name: "", number: "" }));
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form} >
            <label className={styles.labelForm}>
                Name
                <input
                    type="text"
                    name="name"
                    value={redactedContact.name}
                    onChange={handleInputChange}
                    className={styles.inputForm}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            </label>
            <label className={styles.labelForm}>
                Number
                <input
                    type="tel"
                    name="number"
                    value={redactedContact.number}
                    onChange={handleInputChange}
                    className={styles.inputForm}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />

            </label>
            <button
                type="submit"
                // disabled={user.disabled}
                className={styles.formBtn}
            >Save changes</button>
            <button type="button" onClick={(event) => dispatch(actions.showModal(id))} className={styles.closeBtn}>X</button>

        </form>
    )
}
