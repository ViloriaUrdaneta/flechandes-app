import React, { useState }  from 'react'
import VehicleButton from '../buttons/VehicleButton';

interface ModalProps {
    onRequestClose: (e: React.MouseEvent<HTMLElement, MouseEvent> ) => void;
    onSave: () => void;
    updateVehicle: (value: string) => void;
}

export default function VehicleModal({ onRequestClose, onSave, updateVehicle }: ModalProps) {

    const [activeVehicle, setActiveVehicle] = useState('');

    const handleAccept = () => {
        onSave();
    };

    const handleVehicleSelect = (selectedVehicle: string) => {
        updateVehicle(selectedVehicle)
        setActiveVehicle(selectedVehicle);
    };

    return (
        <div className='fixed bottom-0 right-0 w-screen h-screen flex items-center justify-center'>
            <div className='bg-black w-full h-full opacity-50 absolute' onClick={onRequestClose}></div>
            <div className='fixed bottom-0 justify-center bg-gray-200 w-full rounded-t-lg mb-20'>
                <div className='flex justify-center py-2'>
                    <hr className='text-center border-t-4 rounded-full w-8 border-sky-600'/>
                </div>
                <p className='text-center text-black font-bold my-3 mr-16 ml-16'>¿Qué vehiculo necesitas para transportar tu carga?</p>
                <div className='flex flex-col items-center content-center gap-2 mx-auto'>
                    <VehicleButton
                        selectVehicle={handleVehicleSelect}
                        vehicleNumber={'1'}
                        isActive={activeVehicle === '1'}
                    >
                        Vehiculo 1
                    </VehicleButton>
                    <VehicleButton
                        selectVehicle={handleVehicleSelect}
                        vehicleNumber={'2'}
                        isActive={activeVehicle === '2'}
                    >
                        Vehiculo 2
                    </VehicleButton>
                    <VehicleButton
                        selectVehicle={handleVehicleSelect}
                        vehicleNumber={'3'}
                        isActive={activeVehicle === '3'}
                    >
                        Vehiculo 3
                    </VehicleButton>
                </div>
                <div className='flex justify-evenly my-3 '>
                    <button 
                        className='rounded-lg border-2 border-sky-500 bg-gray-200 px-10 py-2 my-1 text-sky-500 font-semibold' 
                        onClick={onRequestClose}
                    >
                        Cancelar
                    </button>
                    <button 
                        className='rounded-lg bg-sky-500 px-10 py-2 my-1 text-white font-semibold'
                        onClick={handleAccept}
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    )
}
