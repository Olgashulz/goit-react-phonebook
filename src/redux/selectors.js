export const visibleContacts = ({ contacts }) => {
    return contacts.items.filter(contact =>
        contact.name.toLowerCase().trim().includes(contacts.filter.toLowerCase().trim())
    );
};



export function GetUserById({ contacts }) {
    // const contacts = useSelector(state => state.contacts.items);
    return contacts.items.find(contact =>
        contact.id)
};

