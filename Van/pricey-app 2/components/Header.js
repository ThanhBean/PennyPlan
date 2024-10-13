import React from 'react'
import Image from "next/image"
import { HomeIcon } from 'lucide-react'

function Header() {
  return (
    <div className='sticky top-0 z-50 bg-white flex justify-between shadow-md items-center'>
        {/* Left */}
        <div className='flex justify-left'>
            <Image
            src = "/images/logo.png"
            width = {40}
            height = {40}
            layout = "fixed"/>
        </div>

        {/* Right */}
        <div className='flex justify-right'>
            {/* Profilepic */}

            <p className="whitespace-nowrap font-semibold pr-3">My User</p>
        </div>
    </div>
  )
}

export default Header
