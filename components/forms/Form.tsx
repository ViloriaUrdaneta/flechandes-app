import useNewFleteForm from '../../hooks/useNewFleteForm';
import React, { useState } from 'react';
import { Flete } from '../../types';
import CargoModal from '../modals/CargoModal';
import "../module.css";
import PhotoModal from '../modals/PhotoModal';
import VehicleModal from '../modals/VehicleModal';
import OfferModal from '../modals/OfferModal';
import AssistantModal from '../modals/AssistantModal';
import DateModal from '../modals/DateModal';
import { numberWithDots } from '@/utils/numberWithDots';


interface FormProps {
    onNewFlete: (newFlete: Flete) => void
}

function Form({onNewFlete}: FormProps) {

    const [inputValues, dispatch] = useNewFleteForm()
    /**
     * Valores modales
     */
    const [cargoDescription, setCargoDescription] = useState('');
    const [photo, setPhoto] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [date, setDate] = useState('');
    const [assitant, setAssitant] = useState('');
    const [offer, setOffer] = useState(0);
    /**
     * Estados de los modales
     */
    const [isCargoModalOpen, setIsCargoModalOpen] = useState(false);
    const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
    const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);
    const [isDateModalOpen, setIsDateModalOpen] = useState(false);
    const [isAssistantModalOpen, setIsAssistantModalOpen] = useState(false);
    const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
    
    /**
     * Handlers open modals
     */
    const handleCargoInputChange = (e: React.MouseEvent<HTMLInputElement>) => {
        setIsCargoModalOpen(true);
        document.body.classList.add('overflow-hidden');
        setCargoDescription(inputValues.carga);
    };
    const handlePhotoInputChange = (e: React.MouseEvent<HTMLInputElement>) => {
        setIsPhotoModalOpen(true);
        document.body.classList.add('overflow-hidden');
    };
    const handleVehicleInputChange = (e: React.MouseEvent<HTMLInputElement>) => {
        setIsVehicleModalOpen(true);
        document.body.classList.add('overflow-hidden');
    };
    const handleAssistantInputChange = (e: React.MouseEvent<HTMLInputElement>) => {
        setIsAssistantModalOpen(true);
        document.body.classList.add('overflow-hidden');
    };
    const handleOfferInputChange = (e: React.MouseEvent<HTMLInputElement>) => {
        setIsOfferModalOpen(true);
        document.body.classList.add('overflow-hidden');
    };
    const handleDateInputChange = (e: React.MouseEvent<HTMLInputElement>) => {
        setIsDateModalOpen(true);
        document.body.classList.add('overflow-hidden');
    };

    /**
     * Close Modals functions
     */
    const closeCargoModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        document.body.classList.remove('overflow-hidden');
        setIsCargoModalOpen(false);
    };
    const closePhotoModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        document.body.classList.remove('overflow-hidden');
        setIsPhotoModalOpen(false);
    };
    const closeVehicleModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        document.body.classList.remove('overflow-hidden');
        setIsVehicleModalOpen(false);
    };
    const closeAssistantModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        document.body.classList.remove('overflow-hidden');
        setIsAssistantModalOpen(false);
    };
    const closeOfferModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        document.body.classList.remove('overflow-hidden');
        setIsOfferModalOpen(false);
    };
    const closeDateModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        document.body.classList.remove('overflow-hidden');
        setIsDateModalOpen(false);
    };

    /**
     * Handles modals savers
     */
    const handleCargoModalSave = (value: string) => {
        setCargoDescription(value);
        dispatch({
            type: 'change_value',
            payload: {
                inputName: 'carga',
                inputValue: cargoDescription,
            },
        });
        setIsCargoModalOpen(false);
    };
    const handlePhotoModalSave = (value: string) => {
        setPhoto(value);
        dispatch({
            type: 'change_value',
            payload: {
                inputName: 'carga',
                inputValue: cargoDescription,
            },
        });
        setIsPhotoModalOpen(false);
    };
    const handleVehicleModalSave = (value: string) => {
        setVehicle(value);
        dispatch({
            type: 'change_value',
            payload: {
                inputName: 'carga',
                inputValue: cargoDescription,
            },
        });
        setIsVehicleModalOpen(false);
    };
    const handleDateModalSave = (value: string) => {
        setPhoto(value);
        dispatch({
            type: 'change_value',
            payload: {
                inputName: 'carga',
                inputValue: cargoDescription,
            },
        });
        setIsDateModalOpen(false);
    };
    const handleAssitantModalSave = (value: string) => {
        setAssitant(value);
        dispatch({
            type: 'change_value',
            payload: {
                inputName: 'carga',
                inputValue: cargoDescription,
            },
        });
        setIsAssistantModalOpen(false);
    };
    const handleOfferModalSave = (value: string) => {
        setOffer(Number(value));
        dispatch({
            type: 'change_value',
            payload: {
                inputName: 'carga',
                inputValue: cargoDescription,
            },
        });
        setIsOfferModalOpen(false);
    };

    /**
     * Handler Submit
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewFlete(inputValues);
        handleClear();
    }

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const {name, value} = e.target
        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    const handleClear = () => {
        dispatch({type: "clear"})
    }

    return (
        <div className=''>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 text-black'>
                <input 
                    onChange={handleChange} 
                    type='text' 
                    className='lex items-center w-80 bg-slate-50 rounded-lg shadow-lg p-2' 
                    name='origen' 
                    placeholder='Origen de carga' 
                />
                <input 
                    onChange={handleChange} 
                    type='text' 
                    className='lex items-center w-80 bg-slate-50 rounded-lg shadow-lg p-2'  
                    name='destino' 
                    placeholder='Destino de carga' 
                />
                <input 
                    onChange={handleChange} 
                    readOnly 
                    onClick={handleCargoInputChange} 
                    type='text' 
                    className='lex items-center w-80 bg-slate-50 rounded-lg shadow-lg p-2'  
                    name='carga' 
                    placeholder='¿Qué transporta?' 
                    value={cargoDescription}
                />
                <input 
                    onChange={handleChange} 
                    readOnly 
                    autoCapitalize="none" 
                    onClick={handlePhotoInputChange} 
                    type='text' 
                    className='lex items-center w-80 bg-slate-50 rounded-lg shadow-lg p-2' 
                    name='foto' 
                    placeholder='Agregar imágenes del flete' 
                    value={photo}
                />
                <input 
                    onChange={handleChange} 
                    readOnly 
                    autoCapitalize="none" 
                    onClick={handleVehicleInputChange} 
                    type='text' 
                    className='lex items-center w-80 bg-slate-50 rounded-lg shadow-lg p-2'  
                    name='vehiculo' 
                    placeholder='¿Qué vehiculo necesitas?' 
                    value={vehicle}
                />
                <input 
                    onChange={handleChange} 
                    readOnly 
                    autoCapitalize="none" 
                    onClick={handleDateInputChange} 
                    type='text' 
                    className='lex items-center w-80 bg-slate-50 rounded-lg shadow-lg p-2' 
                    name='foto' 
                    placeholder='¿Cuándo lo necesitas?' 
                />
                <input 
                    onChange={handleChange} 
                    readOnly 
                    autoCapitalize="none" 
                    onClick={handleAssistantInputChange} 
                    type='text' 
                    className='lex items-center w-80 bg-slate-50 rounded-lg shadow-lg p-2'  
                    name='ayudante' 
                    placeholder='¿Necesitas ayudante?'
                    value={assitant} 
                />
                <input 
                    onChange={handleChange} 
                    readOnly 
                    autoCapitalize="none" 
                    onClick={handleOfferInputChange} 
                    type='text' 
                    className='lex items-center w-80 bg-slate-50 rounded-lg shadow-lg p-2'  
                    name='oferta' 
                    placeholder='Oferta un precio' 
                    value={offer !== 0 ? numberWithDots(offer) : ''}
                />
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
            { isCargoModalOpen && (
                <CargoModal
                    onRequestClose={closeCargoModal} 
                    cargoDescription={cargoDescription}
                    onSave={handleCargoModalSave}
                    updateFormDescription={setCargoDescription}
                >    
                    <p>¿Qué transportas?</p>
                </CargoModal>
            )}
            { isPhotoModalOpen && (
                <PhotoModal
                    onRequestClose={closePhotoModal} 
                    onSave={handlePhotoModalSave}
                />    
            )}
            { isVehicleModalOpen && (
                <VehicleModal
                    onRequestClose={closeVehicleModal} 
                    onSave={handleVehicleModalSave}
                />    
            )}
            { isDateModalOpen && (
                <DateModal
                    onRequestClose={closeDateModal} 
                    onSave={handleDateModalSave}
                >    
                    <p>¿Cuando lo necesitas?</p>
                </DateModal>
            )}
            { isAssistantModalOpen && (
                <AssistantModal
                    onRequestClose={closeAssistantModal} 
                    onSave={handleAssitantModalSave}
                > 
                <p>¿Cuantos ayudantes necesitas?</p>   
                </AssistantModal>
            )}
            { isOfferModalOpen && (
                <OfferModal
                    onRequestClose={closeOfferModal}
                    onSave={handleOfferModalSave} 
                    currentOffer={offer.toString()}
                > 
                <p>¿Cual es tu oferta?</p>   
                </OfferModal>
            )}
        </div>
    )
}

export default Form

