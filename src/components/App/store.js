import { configureStore } from '@reduxjs/toolkit';
import contactsSliceReducer from 'features/contacts/slice';
import filterReducer from 'features/filter/filterSlice';
import authSliceReducer from 'features/auth/slice';

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
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsSliceReducer,
    auth: persistReducer(authPersistConfig, authSliceReducer),
  },
middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }),
});

export const persistor = persistStore(store);
