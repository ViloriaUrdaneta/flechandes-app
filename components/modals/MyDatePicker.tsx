import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Importa los estilos del date picker

export default function MyDatePicker() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return (
        <div className="">
            <div className="relative">
                <input
                    type="text"
                    readOnly
                    value={selectedDate ? selectedDate.toLocaleDateString() : ''}
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:border-sky-500 w-48"
                />
                <DatePicker
                    selected={selectedDate}
                    onChange={(date: Date | null) => setSelectedDate(date)}
                    className="absolute top-10 right-0 z-10 border rounded-lg bg-white p-2 shadow-lg"
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Selecciona una fecha"
                />
            </div>
        </div>
    );
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