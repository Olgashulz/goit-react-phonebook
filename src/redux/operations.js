import { createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../components/api';
// import { useDispatch, useSelector } from "react-redux";





export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await api.fetchContacts();
            return contacts;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)


export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (text, { rejectWithValue }) => {
        try {
            const contacts = await api.addContact(text);
            return contacts;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const deleteContact = createAsyncThunk(

    'contacts/deleteContact',

    async (contactId, { rejectWithValue }) => {
        try {
            const contacts = await api.deleteContact(contactId);
            // const dispatch = useDispatch()
            // dispatch(fetchContacts())
            return contacts;
        } catch (error) {
            return rejectWithValue(error);
        }
    }

)

// export const fetchContactsOpration = () => async dispatch => {
//     dispatch(actions.fetchContactsRequest());

//     try {
//         const contacts = await api.fetchContacts();
//         dispatch(actions.fetchContactsSuccess(contacts));

//     } catch (error) {
//         dispatch(actions.fetchContactsError(error))
//     }
// }

// export const addContactsOpration = () => async dispatch => {
//     dispatch(actions.addContactRequest());

//     try {
//         const contact = await api.addContact();
//         dispatch(actions.addContactSuccess(contact));

//     } catch (error) {
//         dispatch(actions.addContactError(error))
//     }
// }