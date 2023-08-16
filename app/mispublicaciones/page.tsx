import Navbar from '@/components/bars/Navbar'
import Tapbar from '@/components/bars/Tapbar'
import SecondaryButton from '@/components/buttons/SecondaryButton'


export default function MyPublications() {
  return (
    <main className="flex min-h-screen bg-gray-300 flex-col items-center content-center gap-4 p-24">
      <Navbar/>
        <div className='flex justify-evenly mb-3'>
          <SecondaryButton>Envíos</SecondaryButton>
          <SecondaryButton>Fletes</SecondaryButton>
          <SecondaryButton>Mudanzas</SecondaryButton>
        </div>
      <Tapbar/>
    </main>
  )
}
