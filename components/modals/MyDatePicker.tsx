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