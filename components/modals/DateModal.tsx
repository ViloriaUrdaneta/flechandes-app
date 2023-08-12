import React, { ReactNode, useState, useEffect }  from 'react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import "../module.css";


import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker'; 
import 'react-datepicker/dist/react-datepicker.css'; 
import 'react-time-picker/dist/TimePicker.css';

import MyDatePicker from './MyDatePicker';

interface ModalProps {
    children: ReactNode;
    onRequestClose: (e: React.MouseEvent<HTMLElement, MouseEvent> ) => void;
}

export default function DateModal({children, onRequestClose }: ModalProps) {

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState('12:00');
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
                <div className='flex justify-center pt-2'>
                    <hr className='text-center border-t-4 rounded-full w-8 border-sky-600'/>
                </div>
                <p className='text-center font-bold mt-4 text-sky-600'>i</p>
                <p className='text-center font-bold mt-3 text-sky-600'>{children}</p>
                <div className='flex justify-evenly my-6 text-sky-600'>
                    <Datetime input={false} inputProps={{className:'datetime'}}/>
                </div>
                <div className='flex justify-evenly my-6 '>
                    <button className='rounded-lg border-2 border-sky-500 bg-gray-200 px-10 py-2 my-1 text-sky-500 font-semibold' onClick={onRequestClose}>Cancelar</button>
                    <button className='rounded-lg bg-sky-500 px-10 py-2 my-1 text-white font-semibold'>Aceptar</button>
                </div>
                
                
            </div>
        </div>
    )
}




/**
 *  <DatePicker
                        selected={selectedDate}
                        onChange={(date: Date | null) => setSelectedDate(date)}
                        className="border rounded-lg px-3 bg-gray-100 text-center py-2 focus:outline-none focus:border-sky-500 w-48 mx-auto my-4"
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Selecciona una fecha"
                    />
 */




/**
 * <Datetime input={false} inputProps={{className:'datetime'}}/>
 */


/**
 *  <div className='flex justify-center pt-2 bg-gray-200'>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date: Date | null) => setSelectedDate(date)}
                        className="border rounded-lg px-3 bg-gray-100 text-center py-2 focus:outline-none focus:border-sky-500 w-48 mx-auto my-4"
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Selecciona una fecha"
                    />
                    
                </div>
                <div className='flex justify-center pt-2 bg-gray-200'>
                    <TimePicker
                        value={selectedTime}
                        onChange={(time) => setSelectedTime(time ?? '00:00')}
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:border-sky-500"
                    />
                </div>
 */