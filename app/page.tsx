import MainButton from '@/components/MainButton'
import Navbar from '@/components/Navbar'
import Tapbar from '@/components/Tapbar'
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gray-300 flex-col items-center content-center gap-4 p-24">
      <Navbar/>
      <Link href={'/publicar'}>
        <MainButton>Envíos</MainButton>
      </Link>
      <MainButton>Fletes</MainButton>
      <MainButton>Mudanzas</MainButton>
      <Tapbar/>
    </main>
  )
}
