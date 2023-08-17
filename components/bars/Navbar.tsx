'use client'
import React from 'react'
import { usePathname  } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {

    const pathname = usePathname();

    let location = ''

    switch (pathname){
        case '/':
            location = 'Inicio';
            break;
        case '/publicar':
            location = 'Publicar';
            break;
        case '/perfil':
            location = 'Perfil';
            break;
        case '/fleterosdisponibles':
            location = 'Fleteros Disponibles';
            break;
        case '/mispublicaciones':
            location = 'Mis Publicaciones';
            break;
        case '/pagar':
            location = 'Pagar';
            break;
    }


    return (
        <div>
            <div className='fixed inset-x-0 top-0 bg-gray-100 w-screen h-14 flex items-center justify-around '>
                { pathname === '/' ? (
                    <h2 className='font-bold text-lg text-black mr-1'>{location}</h2>
                ):(
                    <>
                        <Link href={'/'}>
                            <p>i</p>
                        </Link>
                        <h2 className='font-bold text-lg text-black mr-1'>{location}</h2>
                        <p></p>
                    </>
                )}
                
            </div>
        </div>
    )
}
