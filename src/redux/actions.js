import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');

export const redactedContactRequest = createAction('contacts/redactedContactRequest');
export const redactedContactSuccess = createAction('contacts/redactedContactSuccess');
export const redactedContactError = createAction('contacts/redactedContactError');

export const filterContact = createAction('contacts/filterContact');
export const resetFilter = createAction('filter/resetFilter');
export const sortContact = createAction('sort/sortContact');

export const showModal = createAction('modal/showModal');






