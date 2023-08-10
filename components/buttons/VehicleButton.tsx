import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
}

export default function VehicleButton({ children }: ButtonProps) {
  return (
    <div>
      <div className='flex items-center w-80 bg-sky-100 rounded-lg shadow-lg h-28 border border-sky-500'>
        <div className='flex'>
            <div className='text-center my-auto ml-5 mr-7'>
                <h3>Icono</h3>
            </div>
            <div className='ml-1 text-black'>
                <h3 className=' font-bold'>{children}</h3>
                <p className='text-xs text-black'>Retiramos tus paquetes y los entregamos en la dirección que indiques</p>
                <h3 className='font-bold'>Precio aprox:</h3>
            </div>
            
        </div>
      </div>
    </div>
  )
}
