import Form from '../components/Form';
import Contacts from '../components/Contacts';
import Filter from "../components/Filter";
import styles from '../App.module.css';

export default function ContactsView() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.phonebook}>
                    <h1 className={styles.title}>Phonebook</h1>
                    <Form />
                    <h2 className={styles.titleContacts}>Contacts</h2>
                    <Filter />
                    <Contacts />
                </div>
            </div>
        </>
    )
}