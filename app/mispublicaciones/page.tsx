'use client'
import Navbar from '@/components/bars/Navbar'
import Tapbar from '@/components/bars/Tapbar'
import CancelPublicationButton from '@/components/buttons/CancelPublicationButton'
import SecondaryButton from '@/components/buttons/SecondaryButton'
import { useAppSelector } from '@/hooks/useAppDispatch';


export default function MyPublications() {

  const fleteList = useAppSelector(state => state.fleteReducer.fletes)

  return (
    <main className="flex min-h-screen bg-gray-300 flex-col items-center content-center gap-4 p-12">
      <Navbar/>
        <div className='flex justify-evenly mb-3'>
          <SecondaryButton>Envíos</SecondaryButton>
          <SecondaryButton>Fletes</SecondaryButton>
          <SecondaryButton>Mudanzas</SecondaryButton>
        </div>
        <div className='mb-12 mt-5'>
          <CancelPublicationButton
              flete={fleteList[0]}
            />
        </div>
      <Tapbar/>
    </main>
  )
}
