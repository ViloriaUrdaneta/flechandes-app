'use client'
import React, { useEffect, useState } from 'react';
import Form from '@/components/Form'
import { Flete } from '@/types'
import Navbar from '@/components/Navbar';
import Tapbar from '@/components/Tapbar';
import SecondaryButton from '@/components/SecondaryButton';

interface AppState {
    flete: Array<Flete>
}

export default function page() {

    //const [fletes, setFletes] = useState<AppState["flete"]>([])


    const handleNewFlete = (newFlete: Flete): void => {
        //setFletes(fletes => [...fletes, newFlete])
        console.log(newFlete)
    }

    return (
        <div className='flex min-h-screen bg-gray-300 flex-col items-center content-center p-24'>
            <Navbar/>
            <div className='flex justify-evenly mb-3'>
                <SecondaryButton>Envíos</SecondaryButton>
                <SecondaryButton>Fletes</SecondaryButton>
                <SecondaryButton>Mudanzas</SecondaryButton>
            </div>
            <Form onNewFlete={handleNewFlete}/>
            <Tapbar/>
        </div>
    )
}
