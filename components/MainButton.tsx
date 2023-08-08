import React, { ReactNode } from 'react';

interface MainButtonProps {
    children: ReactNode;
}

export default function MainButton({ children }: MainButtonProps) {
  return (
    <div>
      <div className='flex items-center w-80 bg-gray-100 rounded-lg shadow-lg h-36'>
        <div className='flex'>
            <div className='ml-8'>
                <h3 className='text-sky-500 font-bold'>{children}</h3>
                <p className='text-xs mt-2'>Retiramos tus paquetes y los entregamos en la dirección que indiques</p>
            </div>
            <div className='text-center ml-5 mr-7'>
                <h3>00</h3>
                <button className='rounded-lg bg-sky-500 px-3 py-3 my-3 text-white font-semibold'>Publicar</button>
            </div>
        </div>
      </div>
    </div>
  )
}
