import axios from 'axios';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = () => {
    return axios.get('/contacts').then(response => response.data);
};

export const addContact = value => {
    return axios.post('/contacts', value).then(({ data }) => data);
};

export const deleteContact = contactId => {
    axios.delete(`/contacts/${contactId}`);
    return contactId;
};

export const updateContact = (contactId, update) => {

    // return axios.patch(`/contacts/${contactId}`, update).then(({ data }) => data);
    const dataNew = axios.patch(`/contacts/${contactId}`, update).then(({ data }) => data);
    console.log(dataNew);
    return dataNew
};




