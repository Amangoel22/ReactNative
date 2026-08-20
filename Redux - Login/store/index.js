import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

// Configure the Redux Store
// configureStore automatically configures the Redux DevTools extension, 
// adds redux-thunk middleware by default, and sets up development-only checks.
export const store = configureStore({
  reducer: {
    // We register our auth reducer under the key 'auth'
    // This defines the shape of our global state: state.auth
    auth: authReducer,
  },
});
