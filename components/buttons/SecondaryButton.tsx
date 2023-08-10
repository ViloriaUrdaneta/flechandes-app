import React, { ReactNode } from 'react';

interface SecondaryButtonProps {
    children: ReactNode;
}

export default function SecondaryButton({ children }: SecondaryButtonProps) {
    return (
        <div className='flex items-center justify-center text-white py-2 w-28 bg-red rounded-lg shadow-lg '>
            <div className='text-center'>
                <h3>00</h3>
                <p className='text-xs'>{children}</p>
            </div>
        </div>
    )
}
