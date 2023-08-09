import React, { ReactNode }  from 'react'

interface ModalProps {
    children: ReactNode;
    onRequestClose: () => void;
}

export default function Modal({children, onRequestClose }: ModalProps) {
    return (
        <div className='fixed bottom-0 right-0 w-screen h-screen flex items-center justify-center'>
            <div className='bg-black w-full h-full opacity-50 absolute' onClick={onRequestClose}></div>
            <div className='fixed bottom-0 justify-center bg-gray-200 w-full  rounded-t-lg'>
                <div className='flex justify-center pt-2'>
                    <hr className='text-center border-t-4 rounded-full w-8 border-sky-600'/>
                </div>
                <p className='text-center font-bold mt-4 text-sky-600'>i</p>
                <p className='text-center font-bold mt-3 text-sky-600'>{children}</p>
                <p className='text-center text-sm mt-3 mr-20 ml-20'>Describe detalladamente qué necesitas movilizar</p>
                <div className='flex justify-center pt-2'>
                    <textarea className='lex mt-4 bg-sky-100 text-sm items-center w-80 bg-slate-50 rounded-lg shadow-lg p-2 h-24'>
                    </textarea>
                </div>
                <div className='flex justify-evenly my-6 '>
                    <button className='rounded-lg border-2 border-sky-500 bg-gray-200 px-10 py-2 my-1 text-sky-500 font-semibold'>Cancelar</button>
                    <button className='rounded-lg bg-sky-500 px-10 py-2 my-1 text-white font-semibold'>Aceptar</button>
                </div>
                
            </div>
        </div>
    )
}
