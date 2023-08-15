'use client'
import React from 'react'
import { usePathname  } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {

    const pathname = usePathname();

    let location = ''

    if(pathname === '/'){
        location = 'Inicio'
    }else if(pathname === '/publicar'){
        location = 'Publicar'
    } else if(pathname === '/perfil'){
        location = 'Perfil'
    }  else if(pathname === '/fleterosdisponibles'){
        location = 'Fleteros Disponibles'
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
