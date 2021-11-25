export const visibleContacts = ({ contacts }) => {
    return contacts.items.filter(contact =>
        contact.name.toLowerCase().trim().includes(contacts.filter.toLowerCase().trim())
    );
};



