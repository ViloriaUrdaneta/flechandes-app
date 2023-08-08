'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Tapbar() {

    const pathname = usePathname()

    return (
        <div>
            <div className='fixed bottom-0 right-0 bg-red w-screen h-20 flex items-center justify-evenly text-white'>
                <Link href={'/'}>
                    <div className={`text-center ${pathname === '/' ? 'opacity-100' : 'opacity-50'}`}>
                        <h1>i</h1>
                        <p className='text-xs'>
                            Inicio
                        </p>
                    </div>
                </Link>
                <Link href={'/publicar'}>
                    <div className={`text-center ${pathname === '/publicar' ? 'opacity-100' : 'opacity-50'}`}>
                        <h1>i</h1>
                        <p className='text-xs'>
                            Publicar
                        </p>
                    </div>
                </Link>
                <Link href={'/perfil'}>
                    <div className={`text-center ${pathname === '/perfil' ? 'opacity-100' : 'opacity-50'}`}>
                        <h1>i</h1>
                        <p className='text-xs'>
                            Perfil
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
