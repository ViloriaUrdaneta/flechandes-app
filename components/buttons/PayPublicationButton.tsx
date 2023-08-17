import { Flete } from '@/types';
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    flete: Flete
}

export default function CancelPublicationButton({ flete }: ButtonProps) {

  return (
    <div>
      <div className='items-center w-80 bg-gray-100 pb-5 pt-2 rounded-lg shadow-lg justify-center'>
        <div className='ml-6 mt-3'>
          <h2 className='font-bold text-sky-500'>Flete</h2>
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
      </div>
    </div>
  )
}
