import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
};

// 2. Create the Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action: Start the login process
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    // Action: Successful login
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    // Action: Failed login
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    // Action: Logout
    logout: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
});

// 3. Export Action Creators
export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;


export const performLoginAsync = (email, password) => {
  return async (dispatch) => {
    dispatch(loginStart());

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (email.trim().toLowerCase() === 'user@example.com' && password === 'password123') {
        const dummyUser = {
          name: 'Jane Doe',
          email: email.trim().toLowerCase(),
          role: 'Premium User',
          joinedDate: 'August 2026',
        };
        dispatch(loginSuccess(dummyUser));
      } else {
        dispatch(loginFailure('Invalid credentials. Use user@example.com and password123.'));
      }
    } catch (err) {
      dispatch(loginFailure(err.message || 'An unexpected error occurred.'));
    }
  };
};

export default authSlice.reducer;
