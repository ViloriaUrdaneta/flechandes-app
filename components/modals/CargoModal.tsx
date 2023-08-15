import React, { ReactNode, useState, useEffect }  from 'react'

interface ModalProps {
    children: ReactNode;
    onRequestClose: (e: React.MouseEvent<HTMLElement, MouseEvent> ) => void;
    cargoDescription: string;
    onSave: () => void;
    updateFormDescription: (value: string) => void;
}

export default function CargoModal({
    children, 
    onRequestClose, 
    cargoDescription, 
    onSave, 
    updateFormDescription 
}: ModalProps) {

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

    const [description, setDescription] = useState(cargoDescription);

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
        updateFormDescription(e.target.value);
    };

    const handleAccept = () => {
        onSave();
    };

    return (
        <div className='fixed bottom-0 right-0 w-screen h-screen flex items-center justify-center'>
            <div className='bg-black w-full h-full opacity-50 absolute' onClick={onRequestClose}></div>
            <div className={`fixed bottom-0 justify-center bg-gray-200 w-full rounded-t-lg ${modalMarginBotton}`}>
                <div className='flex justify-center pt-2'>
                    <hr className='text-center border-t-4 rounded-full w-8 border-sky-600'/>
                </div>
                <p className='text-center font-bold mt-4 text-sky-600'>i</p>
                <p className='text-center font-bold mt-3 text-sky-600'>{children}</p>
                <p className='text-center text-black text-sm mt-3 mr-20 ml-20'>Describe detalladamente qué necesitas movilizar</p>
                <div className='flex justify-center pt-2'>
                    <textarea 
                        className='lex mt-4 bg-sky-100 text-sm items-center w-80 bg-slate-50 rounded-lg shadow-lg p-2 h-24 text-black'
                        value={description}
                        onChange={handleTextareaChange}
                    >
                    </textarea>
                </div>
                <div className='flex justify-evenly my-6 '>
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
