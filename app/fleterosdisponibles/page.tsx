import Navbar from '@/components/bars/Navbar'
import Tapbar from '@/components/bars/Tapbar'
import ChoferButton from '@/components/buttons/ChoferButton';

export default function ChofferAvailables() {
  return (
    <main className="flex min-h-screen bg-gray-300 flex-col items-center content-center gap-4 p-24">
      <Navbar/>
        <ChoferButton/>
      <Tapbar/>
    </main>
  )
}
