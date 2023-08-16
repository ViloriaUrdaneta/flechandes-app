import { Flete } from '@/types';
import React, { useState } from 'react';
import Link from 'next/link';
import CancelModal from '../modals/CancelModal';

interface ButtonProps {
    flete: Flete
}

export default function CancelPublicationButton({ flete }: ButtonProps) {

  return (
    <div>
      <div className='items-center w-80 bg-gray-100 pb-5 pt-2 rounded-lg shadow-lg justify-center'>
        <div className='ml-6 mt-3'>
          <h2 className='font-bold text-red'>Flete cancelado</h2>
        </div>
        <div className='mt-3 ml-6 text-black'>
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
              Volver a publicar
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
