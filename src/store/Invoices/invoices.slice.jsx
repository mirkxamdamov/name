import { createSlice } from "@reduxjs/toolkit";

export const { action: invoicesAction, reducer: invoicesReducer } = createSlice(
  {
    name: "invoices",
    initialState: {
      invoices: [],
      loading: true,
      error: null,
    },
    reducers: {
      setInvoices(state, action) {
        console.log(action);
    },
    },
  }
);
