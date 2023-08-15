import { Flete } from '@/types';
import React, { useState } from 'react';
import Link from 'next/link';
import CancelModal from '../modals/CancelModal';

interface ButtonProps {
    flete: Flete
}

export default function PublicationButton({ flete }: ButtonProps) {

  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  
  const openModal = () =>{
    setIsCancelModalOpen(true);
    document.body.classList.add('overflow-hidden');
  }
  const closeModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    document.body.classList.remove('overflow-hidden');
    setIsCancelModalOpen(false);
  };

  return (
    <div>
      <div className='items-center w-80 bg-gray-100 pb-5 pt-2 rounded-lg shadow-lg justify-center'>
        <div className='flex justify-center'>
          <hr className='text-center border-t-4 rounded-full w-8 border-sky-600'/>
        </div>
        <div className='text-center mt-3'>
          <h2 className='font-bold text-sky-500'>Datos de tu flete</h2>
        </div>
        <div className='mt-3 ml-6'>
          <div className='flex'>
            <p className='ml-3'>00</p>
            <p className='ml-5 text-sm'>{flete.origen}</p>
          </div>
          <div className='flex'>
            <p className='ml-3'>00</p>
            <p className='ml-5 text-sm'>{flete.destino}</p>
          </div>
          <div className='flex'>
            <p className='ml-3'>00</p>
            <p className='ml-5 text-sm'>{flete.carga}</p>
          </div>
          <div className='flex'>
            <p className='ml-3'>00</p>
            <p className='ml-5 text-sm'>{flete.vehiculo}</p>
          </div>
          <div className='flex'>
            <p className='ml-3'>00</p>
            <p className='ml-5 text-sm'>{flete.fecha}</p>
          </div>
          <div className='flex'>
            <p className='ml-3'>00</p>
            <p className='ml-5 text-sm'>{flete.ayudante}</p>
          </div>
          <div className='flex'>
            <p className='ml-3'>00</p>
            <p className='ml-5 text-sm'>${flete.oferta}</p>
          </div>
        </div>
        <div className='flex justify-center pt-5'>
          <Link href={'/fleterosdisponibles'}>
            <button  
              className='items-center w-64 rounded-lg shadow-lg p-2 font-bold bg-sky-500 text-white drop-shadow-lg'
            >
              Ver fleteros disponibles
            </button>
          </Link>
        </div>
        <div className='flex justify-center pt-3'>
          <button  
            className='items-center w-64 text-sky-500 rounded-lg shadow-lg p-2 font-bold bg-white drop-shadow-lg border border-sky-500'
            onClick={openModal}
          >
            Cancelar
          </button>
        </div>
      </div>
      { isCancelModalOpen && (
        <CancelModal
          onRequestClose={closeModal} 
        />    
      )}
    </div>
  )
}
