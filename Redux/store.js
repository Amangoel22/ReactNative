// 17. Redux: independent state management library.
//
// store: jha sb store krte h -> uses configureStore
// reducer: store me change krna h to ye use hote h
// useSelector: jb value select krni store se
// useDispatch: jb value bhejni store se
//
// 18. Store Creation (store.js)

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export const store = configureStore({
  reducer: todoReducer
});
