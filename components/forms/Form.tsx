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

    const [inputValues, dispatch] = useNewFleteForm();
    /**
     * Valores modales
     */
    const [cargoDescription, setCargoDescription] = useState('');
    const [photo, setPhoto] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [date, setDate] = useState('');
    const [assistant, setAssistant] = useState('');
    const [offer, setOffer] = useState(0);
    const [insurance, setInsurance] = useState(false);

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
     * Validador de campos llenos
     */
    const validateForm = () => {
        if (
            inputValues.origen === '' ||
            inputValues.destino === '' ||
            inputValues.carga === '' ||
            inputValues.vehiculo === '' ||
            inputValues.fecha === '' ||
            inputValues.ayudante === '' ||
            inputValues.oferta === ''
        ) {
            return false;
        }
        return true;
    };

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
    const closeModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        document.body.classList.remove('overflow-hidden');
        setIsCargoModalOpen(false);
        setIsPhotoModalOpen(false);
        setIsVehicleModalOpen(false);
        setIsAssistantModalOpen(false);
        setIsOfferModalOpen(false);
        setIsDateModalOpen(false);
    };

    /**
     * Handles modals savers
     */
    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const {name, value} = e.target
        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    };
    const handleModalSave = (
        inputName: string, 
        inputValue: string, 
        closeModalFunc: { (value: React.SetStateAction<boolean>): void; (arg0: boolean): void; }
    ) => {
        dispatch({
            type: 'change_value',
            payload: {
                inputName,
                inputValue,
            },
        });
        document.body.classList.remove('overflow-hidden');
        closeModalFunc(false);
    };
    const handleInsuranceSave = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, checked } = e.target;
        setInsurance(checked); 
        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: checked.toString()
            },
        });
    };

    /**
     * Handler Submit
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            onNewFlete(inputValues);
            //handleClear();
        } else {
            // Puedes mostrar un mensaje de error o realizar alguna acción en caso de que no se cumplan los requisitos.
            console.log('No todos los campos requeridos están llenos.');
        }
    }

    const handleClear = () => {
        dispatch({type: "clear"})
    }

    return (
        <div>
            <form 
                onSubmit={handleSubmit} 
                className='flex flex-col gap-3 text-black'
            >
                <input 
                    onChange={handleChange} 
                    type='text' 
                    className={`lex items-center w-80 rounded-lg shadow-lg p-2 ${inputValues.origen !== '' ? 'bg-sky-200' : 'bg-slate-50'}`}
                    name='origen' 
                    placeholder='Origen de carga' 
                />
                <input 
                    onChange={handleChange} 
                    type='text' 
                    className={`lex items-center w-80 rounded-lg shadow-lg p-2 ${inputValues.destino !== '' ? 'bg-sky-200' : 'bg-slate-50'}`}   
                    name='destino' 
                    placeholder='Destino de carga' 
                />
                <input 
                    onChange={handleChange} 
                    readOnly 
                    onClick={handleCargoInputChange} 
                    type='text' 
                    className={`lex items-center w-80 rounded-lg shadow-lg p-2 ${inputValues.carga !== '' ? 'bg-sky-200' : 'bg-slate-50'}`}
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
                    className={`lex items-center w-80 rounded-lg shadow-lg p-2 ${inputValues.foto !== '' ? 'bg-sky-200' : 'bg-slate-50'}`}
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
                    className={`lex items-center w-80 rounded-lg shadow-lg p-2 ${inputValues.vehiculo !== '' ? 'bg-sky-200' : 'bg-slate-50'}`} 
                    name='vehiculo' 
                    placeholder='¿Qué vehiculo necesitas?' 
                    value={vehicle !== '' ? `Vehiculo ${vehicle}` : ''}
                />
                <input 
                    onChange={handleChange} 
                    readOnly 
                    autoCapitalize="none" 
                    onClick={handleDateInputChange} 
                    type='text' 
                    className={`lex items-center w-80 rounded-lg shadow-lg p-2 ${inputValues.fecha !== '' ? 'bg-sky-200' : 'bg-slate-50'}`}  
                    name='fecha' 
                    placeholder='¿Cuándo lo necesitas?' 
                    value={date}
                />
                <input 
                    onChange={handleChange} 
                    readOnly 
                    autoCapitalize="none" 
                    onClick={handleAssistantInputChange} 
                    type='text' 
                    className={`lex items-center w-80 rounded-lg shadow-lg p-2 ${inputValues.ayudante !== '' ? 'bg-sky-200' : 'bg-slate-50'}`}
                    name='ayudante' 
                    placeholder='¿Necesitas ayudante?'
                    value={assistant} 
                />
                <input 
                    onChange={handleChange} 
                    readOnly 
                    autoCapitalize="none" 
                    onClick={handleOfferInputChange} 
                    type='text' 
                    className={`lex items-center w-80 rounded-lg shadow-lg p-2 ${inputValues.oferta !== '' ? 'bg-sky-200' : 'bg-slate-50'}`}
                    name='oferta' 
                    placeholder='Oferta un precio' 
                    value={offer !== 0 && offer >= 35000 ? `$${numberWithDots(offer)}` : ''}
                />
                <div className='flex items-center justify-between'>
                    <p className='font-bold'>Seguro para carga</p>
                    <label className="toggle">
                        <input 
                            className="toggle-checkbox" 
                            type="checkbox"
                            name='seguro'
                            onChange={handleInsuranceSave} 
                            checked={insurance}
                        />
                        <div className="toggle-switch"></div>
                    </label>
                </div>
                <p className='font-bold text-xs'>Cobertura del 100% del valor de tu carga en caso de daño o perdida</p>
                <button  
                    type='submit' 
                    className='lex items-center w-80 rounded-lg shadow-lg p-3 font-bold bg-sky-500 text-white drop-shadow-lg'
                >
                    Publicar
                </button>
            </form>
            { isCargoModalOpen && (
                <CargoModal
                    onRequestClose={closeModal} 
                    cargoDescription={cargoDescription}
                    onSave={() => handleModalSave('carga', cargoDescription, setIsCargoModalOpen)}
                    updateFormDescription={setCargoDescription}
                >    
                    <p>¿Qué transportas?</p>
                </CargoModal>
            )}
            { isPhotoModalOpen && (
                <PhotoModal
                    onRequestClose={closeModal} 
                    onSave={() => handleModalSave('foto', photo, setIsPhotoModalOpen)}
                    updatePhoto={setPhoto}
                />    
            )}
            { isVehicleModalOpen && (
                <VehicleModal
                    onRequestClose={closeModal} 
                    onSave={() => handleModalSave('vehiculo', vehicle, setIsVehicleModalOpen)}
                    updateVehicle={setVehicle}
                />    
            )}
            { isDateModalOpen && (
                <DateModal
                    onRequestClose={closeModal} 
                    onSave={() => handleModalSave('fecha', date, setIsDateModalOpen)}
                    updateDate={setDate}
                >    
                    <p>¿Cuando lo necesitas?</p>
                </DateModal>
            )}
            { isAssistantModalOpen && (
                <AssistantModal
                    onRequestClose={closeModal} 
                    onSave={() => handleModalSave('ayudante', assistant, setIsAssistantModalOpen)}
                    updateAssistant={setAssistant}
                > 
                <p>¿Cuantos ayudantes necesitas?</p>   
                </AssistantModal>
            )}
            { isOfferModalOpen && (
                <OfferModal
                    onRequestClose={closeModal}
                    onSave={() => handleModalSave('oferta', numberWithDots(offer), setIsOfferModalOpen)} 
                    currentOffer={offer.toString()}
                    updateOffer={setOffer}
                > 
                <p>¿Cual es tu oferta?</p>   
                </OfferModal>
            )}
        </div>
    )
}

export default Form

