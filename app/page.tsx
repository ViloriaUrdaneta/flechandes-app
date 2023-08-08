import MainButton from '@/components/MainButton'
import Navbar from '@/components/Navbar'
import Tapbar from '@/components/Tapbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-300 flex-col items-center content-center gap-4 p-24">
      <Navbar/>
      <MainButton/>
      <MainButton/>
      <MainButton/>
      <Tapbar/>
    </main>
  )
}
