import { createSlice } from "@reduxjs/toolkit";

export const { actions: invoicesAction, reducer: invoicesReducer } = createSlice(
  {
    name: "invoices",
    initialState: {
      invoices: [],
      loading: true,
      error: null,
    },
    reducers: {
      setInvoices(state, action) {
        state.invoices = action.payload
        state.loading = false
    },
    },
  }
);
