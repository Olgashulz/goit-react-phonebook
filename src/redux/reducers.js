// import { combineReducers, createReducer } from "@reduxjs/toolkit";
// import { addContact, deleteContact, filterContact, resetFilter } from "./actions";

// const items = createReducer([], {
//     [addContact]: (state, action) => [...state, action.payload],
//     [deleteContact]: (state, action) => state.filter((contact) => contact.id !== action.payload),

// });

// const filter = createReducer('', {
//     [filterContact]: (state, action) => action.payload,
//     [resetFilter]: (state, action) => state = '',

// });

// const rootReducer = combineReducers({
//     items,
//     filter
// })

// export default rootReducer;

import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations"
import { filterContact, resetFilter } from "./actions"

const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    [addContact.fulfilled]: (state, action) => [...state, action.payload],
    [deleteContact.fulfilled]: (state, action) => state.filter((contact) => contact.id !== action.payload),
});



const isLoading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,

    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,

    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
})


const error = createReducer(null, {
    [fetchContacts.rejected]: (_, action) => action.payload,
    [fetchContacts.pending]: () => null,
})

const filter = createReducer('', {
    [filterContact]: (state, action) => action.payload,
    [resetFilter]: (state, action) => state = '',

});


// const sort = createReducer([], {
//     [fetchContacts.fulfilled]: (_, { payload }) => payload,
//     [sortContact]: (state, { payload }) => payload,
// });


const rootReducer = combineReducers({
    items,
    filter,
    isLoading,
    error,
    // sort,
})

export default rootReducer;






