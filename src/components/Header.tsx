'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


import { IoIosMenu,IoMdClose } from "react-icons/io";

import profile from '../../public/profile/profile-e.jpg'


interface Data{
    name: string,
    path: string
}

const LinksData:Data[] =[
    { name:'Home', path:'http://localhost:3000/' },
    { name:'Product', path:'http://localhost:3000/components/products'},
    {name:"Blog", path:"http://localhost:3000/" },
    {name:"Contact", path:"http://localhost:3000/components/contact" },    
       
    

]


export default function Header() {
  const [open, setOpen] = useState(false)
  return (
<header className='flex border-b py-3 px-4 sm:px-10 bg-white  font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>

{/* Logo Section */}
      <div className='flex justify-between items-center gap-10 w-full'>
        <div className="flex justify-center items-start">
        <Link href="/"><Image src={profile} alt="logo" className='rounded-full w-20 ring-2 ring-pink-500' />
        </Link>
        <h1 className="mt-5 mx-5 text-2xl font-bold hover:text-rose-900 text-pink-700">Qirat Saeed</h1>
        </div>


{/* Search Bar */}
        <div className="bg-white flex px-1 py-1 rounded-full max-lg:hidden border border-pink-700 overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input type='email' placeholder='Search Something...' className="w-full outline-none bg-white pl-4 text-sm" />
        <button type='button'
          className="bg-pink-500 hover:bg-pink-800 transition-all text-white text-sm rounded-full px-5 py-2.5">Search</button>
      </div>

{/* Toggle Button Section */}
        <div className={`flex justify-between items-center md:block ${
              open? "block" : "hidden"}`}>

          <ul
            className='sm:flex ms:ml-14 sm:gap-x-5 max-sm:space-y-5 max`-sm:pt-28 max-sm:text-pink-700  max-sm:backdrop-blur-sm max-sm:w-1/2 max-sm:min-w-[300px] max-sm:p-6 max-sm:h-full max-lg:shadow-md max-lg:overflow-auto z-50m '>
           {LinksData.map((item, index)=>(
            <Link key={index} href={item.path}>
                 <li className='mb-6 font-serif font-bold text-pink-700 hover:text-pink-600 max-lg:block'>
             {item.name}
           </li>
            </Link>
           ))}
           
          </ul>
        </div>

        <button id="toggleOpen" className='lg:hidden ml-auto' onClick={()=>setOpen(!open)}>
        {open ? (<IoMdClose className="bg-white text-pink-700 cursor-pointer" size={24}/>):(<IoIosMenu className="bg-white cursor-pointer text-pink-700" size={24}/>)}
        </button>
      </div>
    </header>
  )
}
