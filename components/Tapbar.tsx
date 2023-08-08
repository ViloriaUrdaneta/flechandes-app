import React from 'react'

export default function Tapbar() {
  return (
    <div>
      <div className='absolute bottom-0 right-0 bg-red w-screen h-20 flex items-center justify-evenly text-white'>
        <div className='text-center'>
            <h1>i</h1>
            <p className='text-xs'>
                Inicio
            </p>
        </div>
        <div className='text-center'>
            <h1>i</h1>
            <p className='text-xs'>
                Publicar
            </p>
        </div>
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
