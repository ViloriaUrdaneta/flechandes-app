import { Flete } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface AppState {
    listaFletes: Array<Flete>
}

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


//setFletes(fletes => [...fletes, newFlete])