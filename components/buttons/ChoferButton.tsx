import React, {  } from 'react';

interface ButtonProps {
    
}

export default function MainButton({  }: ButtonProps) {
  return (
    <div>
      <div className='items-center w-80 bg-gray-100 pb-5 pt-2 rounded-lg shadow-lg justify-center'>
        <div className='flex justify-evenly mt-2'>
          <div className='text-center'>
            <p>Foto</p>
            <p className='text-xs text-black'>Conductor</p>
          </div>
          <div>
            <h2 className='font-bold'>Nombre Apellido</h2>
            <button 
              className='items-center text-sky-500 rounded-lg shadow p-2 px-7 font-bold bg-white drop-shadow-lg border border-sky-500 text-xs'
            >
              Ver perfil
            </button>
          </div>
          <div className='flex'>
            <p className='text-sm font-bold'>nota</p>
            <p>♦</p>
          </div>
        </div>
        <p className='text-xs m-5'>
          Retiramos tus paquetes y los entregamos en la dirección que indiques
        </p>
        <div className='flex m-5'>
          <div className='text-center'>
            <p>Foto</p>
            <p className='text-xs text-black'>Vehiculo</p>
          </div>
          <div className='text-center ml-5'>
            <p>Foto</p>
            <p className='text-xs text-black'>Ayudante</p>
          </div>
        </div>
        <div className='flex justify-evenly'>
          <button 
            className='rounded-lg border-2 border-sky-500 bg-gray-200 px-10 py-2 my-1 text-sky-500 font-semibold' 
          >
            Cancelar
          </button>
          <button 
            className='rounded-lg bg-sky-500 px-10 py-2 my-1 text-white font-semibold'
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
