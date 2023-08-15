'use client'
import React, { useEffect, useState } from 'react';
import Form from '@/components/forms/Form'
import { Flete } from '@/types'
import Navbar from '@/components/bars/Navbar';
import Tapbar from '@/components/bars/Tapbar';
import SecondaryButton from '@/components/buttons/SecondaryButton';
import PublicationButton from '@/components/buttons/PublicationButton';

interface AppState {
    flete: Array<Flete>
}

export default function FormPage() {

    const [fletes, setFletes] = useState<AppState["flete"]>([])
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const windowHeigt = window.innerHeight;
            const bodyHeight = document.body.clientHeight;
            const keyboardThreshold = 200;
            const isKeyboard = windowHeigt + keyboardThreshold < bodyHeight;
            setIsKeyboardVisible(isKeyboard);
        };
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[])

    const handleNewFlete = (newFlete: Flete): void => {
        setFletes(fletes => [...fletes, newFlete])
        console.log(newFlete)
    }

    const formView = () => { return (
        <>
            <div className='flex justify-evenly mb-3'>
                <SecondaryButton>Envíos</SecondaryButton>
                <SecondaryButton>Fletes</SecondaryButton>
                <SecondaryButton>Mudanzas</SecondaryButton>
            </div>
            <div className='mb-12'>
                <Form onNewFlete={handleNewFlete}/>
            </div>
        </>
    )}

    const fleteView = () => { return (
        <>
            <h1 className='mt-5'>Icono</h1>
            <h1 className='font-bold mt-3'>¡Confirma tu flete!</h1>
            <div className='mb-12 mt-5'>
                <PublicationButton
                    flete={fletes[0]}
                />
            </div>
        </>
    )}

    return (
        <div className='flex min-h-screen bg-gray-300 flex-col items-center content-center p-16'>
            <Navbar/>
            { fletes.length === 0 ? formView() : fleteView()}
            { isKeyboardVisible ? (<></>) : (<Tapbar/>)}
        </div>
    )
}
