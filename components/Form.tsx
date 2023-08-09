//import useNewFleteForm from '../hooks/useNewFleteForm';
import React, { useState } from 'react';
import { Flete } from '../types';
import Modal from './Modal';
import "./module.css";


interface FormProps {
    onNewFlete: (newFlete: Flete) => void
}

function Form({onNewFlete}: FormProps) {

    //const [inputValues, dispatch] = useNewFleteForm()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleInputChange = (e: React.MouseEvent<HTMLInputElement>) => {
        setIsModalOpen(true);
        document.body.classList.add('overflow-hidden');
        console.log('clic')
    }
    const closeModal = () => {
        document.body.classList.remove('overflow-hidden');
        setIsModalOpen(false);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //onNewFlete(inputValues);
        handleClear();
    }

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const {name, value} = e.target
        /*dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })*/
    }

    const handleClear = () => {
        //dispatch({type: "clear"})
    }

    return (
        <div className=''>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 text-black'>
                <input onChange={handleChange} type='text' className='lex items-center w-80 bg-slate-50 rounded-lg shadow-lg p-2' name='origen' placeholder='Origen de carga' />
                <input onChange={handleChange} type='text' className='lex items-center w-80 bg-slate-50 rounded-lg shadow-lg p-2'  name='destino' placeholder='Destino de carga' />
                <input onChange={handleChange} onClick={handleInputChange} type='text' className='lex items-center w-80 bg-slate-50 rounded-lg shadow-lg p-2'  name='carga' placeholder='¿Qué transporta?' />
                <input onChange={handleChange} type='text' className='lex items-center w-80 bg-slate-50 rounded-lg shadow-lg p-2' name='foto' placeholder='Agregar imágenes del flete' />
                <input onChange={handleChange} type='text' className='lex items-center w-80 bg-slate-50 rounded-lg shadow-lg p-2'  name='foto' placeholder='¿Qué vehiculo necesitas?' />
                <input onChange={handleChange} type='text' className='lex items-center w-80 bg-slate-50 rounded-lg shadow-lg p-2' name='foto' placeholder='¿Cuándo lo necesitas?' />
                <input onChange={handleChange} type='text' className='lex items-center w-80 bg-slate-50 rounded-lg shadow-lg p-2'  name='ayudante' placeholder='¿Necesitas ayudante?' />
                <input onChange={handleChange} type='text' className='lex items-center w-80 bg-slate-50 rounded-lg shadow-lg p-2'  name='oferta' placeholder='Oferta un precio' />
                <div className='flex items-center justify-between'>
                    <p className='font-bold'>Seguro para carga</p>
                    <label className="toggle">
                        <input className="toggle-checkbox" type="checkbox"/>
                        <div className="toggle-switch"></div>
                    </label>
                </div>
                <p className='font-bold text-xs'>Cobertura del 100% del valor de tu carga en caso de daño o perdida</p>
                <button onClick={handleClear} type='submit' className='lex items-center w-80 rounded-lg shadow-lg p-3 font-bold bg-sky-500 text-white drop-shadow-lg'>Publicar</button>
            </form>
            { isModalOpen && (
                <Modal
                    onRequestClose={closeModal} 
                >    
                    <p>¿Qué transportas?</p>
                </Modal>
            )}
            
        </div>
    )
}

export default Form

