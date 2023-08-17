import React, { ReactNode, useState }  from 'react'

interface ModalProps {
    children: ReactNode;
    onRequestClose: (e: React.MouseEvent<HTMLElement, MouseEvent> ) => void;
    onSave: () => void;
    updateAssistant: (value: string) => void
}

export default function AssitantModal({ children, onRequestClose, onSave, updateAssistant }: ModalProps) {

    const [assitantNumber, setAssitantNumber] = useState('0');


    const handleAssistantButton = (value: string) => {
        setAssitantNumber(value);
        if(value === '1'){
            updateAssistant('1 Ayudante')
        } else if (value === '2'){
            updateAssistant('2 Ayudantes')
        }else if (value === '3'){
            updateAssistant('3 Ayudantes')
        }else {
            updateAssistant('Sin ayudantes')
        }
        
    };

    const handleAccept = () => {
        onSave();
    };

    return (
        <div className='fixed bottom-0 right-0 w-screen h-screen flex items-center justify-center'>
            <div className='bg-black w-full h-full opacity-50 absolute' onClick={onRequestClose}></div>
            <div className='fixed bottom-0 justify-center bg-gray-200 w-full rounded-t-lg mb-20'>
                <div className='flex justify-center pt-2'>
                    <hr className='text-center border-t-4 rounded-full w-8 border-sky-600'/>
                </div>
                <p className='text-center font-bold mt-8 text-sky-600'>{children}</p>
                <div className='flex flex-col mt-8 items-center content-center gap-2 mx-auto'>
                    <button 
                        className={`font-bold  ${assitantNumber === '1' ? 'text-black' : 'text-gray-400'}`}
                        onClick={() => handleAssistantButton('1')}
                    >
                        1
                    </button>
                    <button 
                        className={`font-bold ${assitantNumber === '2' ? 'text-black' : 'text-gray-400'}`}
                        onClick={() => handleAssistantButton('2')}
                    >
                        2
                    </button>
                    <button 
                        className={`font-bold ${assitantNumber === '3' ? 'text-black' : 'text-gray-400'}`}
                        onClick={() => handleAssistantButton('3')}
                    >
                        3
                    </button>
                    <button 
                        className={`font-bold ${assitantNumber === '4' ? 'text-black' : 'text-gray-400'}`}
                        onClick={() => handleAssistantButton('4')}
                    >
                        Yo ayudo
                    </button>
                </div>
                <div className='flex justify-evenly mt-8'>
                    <button 
                        className='rounded-lg border-2 border-sky-500 bg-gray-200 px-10 py-2 my-1 text-sky-500 font-semibold' 
                        onClick={onRequestClose}
                    >   
                        Cancelar
                    </button>
                    <button 
                        className='rounded-lg bg-sky-500 px-10 my-1 text-white font-semibold'
                        onClick={handleAccept}
                    >
                        Aceptar
                    </button>
                </div>
                <div className='flex justify-center pt-2 mt-6'>
                    <hr className='text-center border-t-4 rounded-full w-24 border-red mb-2'/>
                </div>
            </div>
        </div>
    )
}
