import React, { ReactNode }  from 'react'

interface ModalProps {
    children: ReactNode;
}

export default function Modal({children}: ModalProps) {
  return (
    <div className='fixed bottom-0 right-0 w-screen h-screen flex items-center justify-center'>
        <div className='bg-black w-full h-full opacity-50 absolute'></div>
        <div className='bg-gray-300 p-4 relative'>
            {children}
        </div>
    </div>
  )
}
