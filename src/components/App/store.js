import { configureStore } from '@reduxjs/toolkit';
import { contactsAPI } from 'services/contactsAPI';
import filterReducer from 'features/filter/filterSlice';
import authSliceReducer from 'features/authSlice';
import { authAPI } from 'services/auth';
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
    [contactsAPI.reducerPath]: contactsAPI.reducer,
    auth: persistReducer(authPersistConfig, authSliceReducer),
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware:
  getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }}).concat(contactsAPI.middleware, authAPI.middleware),

});

export const persistor = persistStore(store);
