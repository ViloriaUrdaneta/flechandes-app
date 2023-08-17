import Link from 'next/link';
import React, { ReactNode, useState, useEffect }  from 'react'

interface ModalProps {
    onRequestClose: (e: React.MouseEvent<HTMLElement, MouseEvent> ) => void;
}

export default function PhotoModal({ onRequestClose }: ModalProps) {

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


    return (
        <div className='fixed bottom-0 right-0 w-screen h-screen flex items-center justify-center'>
            <div className='bg-black w-full h-full opacity-50 absolute' onClick={onRequestClose}></div>
            <div className={`fixed bottom-0 justify-center bg-gray-200 w-full rounded-t-lg ${modalMarginBotton}`}>
                <div className='flex justify-center py-2'>
                    <hr className='text-center border-t-4 rounded-full w-8 border-sky-600'/>
                </div>
                <div className='text-center mt-3'>
                    <h2 className='font-bold text-sky-500'>¿Cancelar publicación?</h2>
                </div>
                <div className='flex justify-center pt-5'>
                    <button  
                        className='items-center w-64 rounded-lg shadow-lg p-2 font-semibold bg-sky-500 text-white drop-shadow-lg'
                        onClick={onRequestClose}
                    >
                        No
                    </button>
                </div>
                <div className='flex justify-center py-3'>
                    <Link href={'/mispublicaciones'}>
                        <button  
                            className='items-center w-64 text-sky-500 rounded-lg shadow-lg font-semibold  p-2 bg-white drop-shadow-lg border border-sky-500'
                        >
                            Sí, Cancelar
                        </button>
                    </Link>
                </div>
                <div className='flex justify-center pt-2'>
                    <hr className='text-center border-t-4 rounded-full w-24 border-red mb-2'/>
                </div>
            </div>
        </div>
    )
}
