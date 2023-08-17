'use client'
import Navbar from '@/components/bars/Navbar'
import Tapbar from '@/components/bars/Tapbar'
import PayPublicationButton from '@/components/buttons/PayPublicationButton';
import { useAppSelector } from '@/hooks/useAppDispatch';


export default function Pay() {

  const fleteList = useAppSelector(state => state.fleteReducer.fletes)

  return (
    <main className="flex min-h-screen bg-gray-300 flex-col items-center content-center gap-4 p-24">
      <Navbar/>
        <div className='mb-5 mt-5'>
          <PayPublicationButton
              flete={fleteList[0]}
          />
        </div>
      <Tapbar/>
    </main>
  )
}
