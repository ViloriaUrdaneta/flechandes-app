import React, { useState, useEffect }  from 'react'

interface ModalProps {
    onRequestClose: (e: React.MouseEvent<HTMLElement, MouseEvent> ) => void;
    onSave: (value: string) => void;
}

export default function PhotoModal({ onRequestClose, onSave }: ModalProps) {

    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

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

    const handlePhoto = () => {
        onSave('photo');
    };

    return (
        <div className='fixed bottom-0 right-0 w-screen h-screen flex items-center justify-center'>
            <div className='bg-black w-full h-full opacity-50 absolute' onClick={onRequestClose}></div>
            <div className={`fixed bottom-0 justify-center bg-gray-200 w-full rounded-t-lg ${modalMarginBotton}`}>
                <div className='flex justify-center py-2'>
                    <hr className='text-center border-t-4 rounded-full w-8 border-sky-600'/>
                </div>
                <div className='flex text-center my-2 justify-center'>
                    <p>i</p>
                    <button 
                        onClick={handlePhoto}
                        className='text-sm font-semibold ml-2 text-black'
                    >
                        Seleccionar desde la galería
                    </button>
                </div>
                <div className='flex text-center my-2 justify-center'>
                    <p>i</p>
                    <button 
                        onClick={handlePhoto}
                        className='text-sm font-semibold ml-2 text-black'
                    >
                        Seleccionar desde la galería
                    </button>
                </div>
                <div className='flex justify-center pt-2'>
                    <hr className='text-center border-t-4 rounded-full w-24 border-red mb-2'/>
                </div>
            </div>
        </div>
    )
}
