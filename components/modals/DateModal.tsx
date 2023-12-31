import React, { ReactNode, useState }  from 'react';
import Datetime from 'react-datetime';
import moment, { Moment } from 'moment';
import "react-datetime/css/react-datetime.css";
import "../module.css";


interface ModalProps {
    children: ReactNode;
    onRequestClose: (e: React.MouseEvent<HTMLElement, MouseEvent> ) => void;
    onSave: () => void;
    updateDate: (value: string) => void;
}

export default function DateModal({ children, onRequestClose, onSave, updateDate }: ModalProps) {

    //const [selectedDate, setSelectedDate] = useState<string | Moment>('');

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
                <p className='text-center font-bold mt-4 text-sky-600'>i</p>
                <p className='text-center font-bold mt-3 text-sky-600'>{children}</p>
                <div className='flex justify-evenly my-6 text-sky-600 bg-gray-200'>
                    <Datetime 
                        input={false} 
                        inputProps={{className:'datetime'}}
                        onChange={(date: string | Moment) => updateDate(moment(date).format("DD MMMM, hh:mm a").toString())}
                    />
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


