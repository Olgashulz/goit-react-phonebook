import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import { todosReducer } from './todos';
import { authReducer } from './auth';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const contactsPersistConfig = {
    key: 'contacts',
    storage,
}

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    // reducer: persistedReducer,
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: persistReducer(contactsPersistConfig, rootReducer)
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }),
});

const persistor = persistStore(store)

const obj = { store, persistor }
export default obj;

//////////////////////////////////////////////////////////////////////////////////////////
// import { createStore } from 'redux';
// import { rootReducer } from './reducers';

// console.log(rootReducer)

// const store = createStore(rootReducer);

// export default store;