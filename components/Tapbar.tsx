import React from 'react'
import Link from 'next/link';

export default function Tapbar() {
  return (
    <div>
      <div className='fixed bottom-0 right-0 bg-red w-screen h-20 flex items-center justify-evenly text-white'>
        <Link href={'/'}>
            <div className='text-center'>
                <h1>i</h1>
                <p className='text-xs'>
                    Inicio
                </p>
            </div>
        </Link>
        <Link href={'/publicar'}>
            <div className='text-center'>
                <h1>i</h1>
                <p className='text-xs'>
                    Publicar
                </p>
            </div>
        </Link>
        
        <div className='text-center'>
            <h1>i</h1>
            <p className='text-xs'>
                Perfil
            </p>
        </div>
      </div>
    </div>
  )
}
