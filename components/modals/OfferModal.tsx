import { off } from 'process';
import React, { ReactNode, useState, useEffect }  from 'react'

interface ModalProps {
    children: ReactNode;
    onRequestClose: (e: React.MouseEvent<HTMLElement, MouseEvent> ) => void;
    onSave: (value: string) => void;
    currentOffer: string
}

export default function OfferModal({children, onRequestClose, onSave, currentOffer }: ModalProps) {

    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [offer, setOffer] = useState(currentOffer);

    const handleAccept = () => {
        const parsedOffer = parseFloat(offer);

        if (!isNaN(parsedOffer) && parsedOffer >= 35000) {
            onSave(offer);
        } else {
            console.log("Oferta inválida");
        }
        onSave(offer);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOffer(e.target.value);
    }

    useEffect(() => {
        const handleResize = () => {
            const windowHeigt = window.innerHeight;
            const bodyHeight = document.body.clientHeight;
            const keyboardThreshold = 200;
            const isKeyboard = windowHeigt + keyboardThreshold < bodyHeight;
            setIsKeyboardVisible(isKeyboard);
        };
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[])

    const modalMarginBotton = !isKeyboardVisible ? 'mb-20' : '';

    return (
        <div className='fixed bottom-0 right-0 w-screen h-screen flex items-center justify-center'>
            <div className='bg-black w-full h-full opacity-50 absolute' onClick={onRequestClose}></div>
            <div className={`fixed bottom-0 justify-center bg-gray-200 w-full rounded-t-lg ${modalMarginBotton}`}>
                <div className='flex justify-center pt-2'>
                    <hr className='text-center border-t-4 rounded-full w-8 border-sky-600'/>
                </div>
                <p className='text-center font-bold mt-8 text-sky-600'>{children}</p>
                <p className='text-center text-black text-sm mt-3 mr-12 ml-12'>Según el detalle de tu flete el precio mínimo es de 35.000</p>
                <div className='flex justify-center pt-4 mt-8 text-black font-bold'>
                    <input 
                        type='text' 
                        className='bg-gray-200 text-center'
                        onChange={handleInputChange}
                        value={offer}
                    >
                    </input>
                </div>
                <div className='flex justify-center pt-2'>
                    <hr className='text-center border rounded-full w-64 border-sky-600'/>
                </div>
                <div className='flex justify-evenly mb-6 mt-8'>
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


