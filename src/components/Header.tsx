
import { Menu } from "lucide-react";
import Image from "next/image"
import Link from "next/link"
import {  Sheet, SheetContent, SheetDescription,SheetHeader,SheetTitle,SheetTrigger,} from "@/components/ui/sheet";


import { IoIosMenu,IoMdClose } from "react-icons/io";

import profile from '../../public/profile/profile-e.jpg'


interface Data{
    name: string,
    path: string
}

const LinksData:Data[] =[
    { name:'Home', path:'/' },
    { name:'Product', path:'http://localhost:3000/components/products'},
    {name:"Blog", path:"/" },
    {name:"Contact", path:"http://localhost:3000/components/contact" },    

]


export default function Header() {
  
  return (
  <>


   <header className="flex border-b py-3 px-4 sm:px-10 bg-white  font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
   <div className='flex justify-between items-center gap-10 w-full'>
            {/* logo */}
            <div className="flex justify-center">
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


            {/* nav links */}
            <div  className='flex justify-between items-center md:block'>
            <ul className="hidden md:block lg:flex lg:justify-evenly gap-16  font-serif font-bold text-pink-700 hover:text-pink-600 ">
            {LinksData.map((list)=>(
                  <li className="space-x-5">
                  <Link href={`${list.path}`}>{list.name}</Link>
                </li>
                ))             
}
            </ul>
                
           </div>
            
            <Sheet >
              <SheetTrigger className="md:hidden">
              <Menu className="text-2xl"/>
              </SheetTrigger>
              <SheetContent >
                <SheetHeader>
                  <SheetTitle className="mt-5 mx-5 text-2xl font-bold hover:text-rose-900 text-pink-700">Menu Bar</SheetTitle>
                  <ul>
                {LinksData.map((list)=>(
                  <li className="flex flex-col space-y-6 mt-5 mx-5 text-2xl font-bold hover:text-rose-900 text-pink-700">
                  <Link href={`${list.path}`}>{list.name}</Link></li>
                ))}
               
            </ul>
                </SheetHeader>
              </SheetContent>
            </Sheet>
</div>
        </header>   
</>
  )
}
