import Navbar from '@/components/Navbar'
import Tapbar from '@/components/Tapbar'
import React from 'react'

export default function page() {
  return (
    <div className='flex min-h-screen bg-gray-300 flex-col items-center content-center p-16'>
      <Navbar/>
      <Tapbar/>
    </div>
  )
}
