import { AppState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fletes: <AppState["listaFletes"]>([])
}

export const fleteSlice = createSlice({
    name: 'flete',
    initialState,
    reducers: {
        setFlete: (state, {payload}) => {
            state.fletes = [...state.fletes, payload];
        }
    }
});

export const { setFlete } = fleteSlice.actions;

export default fleteSlice.reducer;
