import { useReducer } from "react"
import { Flete } from "../types"

interface FormState {
    inputValues: Flete
}

type FormReducerAction = {
    type: "change_value",
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: "clear"
}

const INITIAL_STATE = {
    origen: '',
    destino: '',
    carga: '',
    foto: '',
    vehiculo: '',
    fecha: '',
    ayudante: '',
    oferta: ''
}

const formReducer = (state: FormState['inputValues'], action: FormReducerAction) => {
    switch (action.type){
        case "change_value":
            const {inputName, inputValue} = action.payload;
            return {
                ...state,
                [inputName]: inputValue
            };
        case "clear":
            return INITIAL_STATE
    }
}

const useNewFleteForm = () => {
    return useReducer(formReducer, INITIAL_STATE)
}

export default useNewFleteForm