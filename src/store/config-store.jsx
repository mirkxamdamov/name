import {configureStore} from '@reduxjs/toolkit';
import { invoicesReducer } from './Invoices';

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer
  },
});