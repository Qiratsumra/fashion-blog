import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { TiShoppingCart } from "react-icons/ti"
import { Button } from '@/components/ui/button'

import foundation from "../../public/makeup/liquid-foundation.jpg"
import lipstick from "../../public/makeup/lipstick.jpg"
import eyeshadow from '../../public/makeup/eyeshadow.jpg'
import mascara from "../../public/makeup/loral-paris-voluminous.jpg"
import { it } from "node:test";


const MakeupData =[
    {
      "id": 1,
      "name": "Liquid Foundation",
      "brand": "Maybelline",
      "price": 15.99,
      "category": "Face",
      "shades": ["Ivory", "Beige", "Tan", "Mocha"],
      "rating": 4.5,
      "stock": 25,
      "image":foundation,
      "description": "A lightweight liquid foundation with buildable coverage for a flawless finish."
    },
    {
      "id": 2,
      "name": "Matte Lipstick",
      "brand": "MAC",
      "price": 18.99,
      "category": "Lips",
      "shades": ["Ruby Woo", "Velvet Teddy", "Whirl"],
      "rating": 4.7,
      "stock": 40,
      "image": lipstick,
      "description": "A richly pigmented matte lipstick for bold and long-lasting color."
    },
    {
      "id": 3,
      "name": "Eyeshadow Palette",
      "brand": "Urban Decay",
      "price": 49.99,
      "category": "Eyes",
      "shades": ["Nude", "Smokey", "Rose Gold"],
      "rating": 4.8,
      "stock": 15,
      "image": eyeshadow,
      "description": "A versatile eyeshadow palette with highly pigmented shades."
    },
    {
      "id": 4,
      "name": "Volumizing Mascara",
      "brand": "L'Oreal",
      "price": 12.99,
      "category": "Eyes",
      "rating": 4.6,
      "stock": 30,
      "image": mascara,
      "description": "A volumizing mascara for fuller and dramatic lashes."
    },
  ]
  

export default function MakeUP() {
  return (
    <div className="grid grid-cols-2 max-sm:block">
      {MakeupData.map((item)=>(
        <div
        className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4 flip-in-hor-bottom ">
        <div className="min-h-[256px]">
          <Image alt={`${item.id}`} src={item.image} className="w-full" />
        </div>
  
        <div className="p-6">
          <h3 className="text-gray-800 text-xl font-bold">{item.name}</h3>
          <p className="mt-4 text-sm text-gray-500 leading-relaxed">{[item.brand,item.category]}. {item.description} 
            <br />
          </p>
          <ul>
          <li>{item.shades}</li>
            <li>{item.price}</li>
            <li>{item.stock}</li>
            <li>{item.rating}</li>
          </ul>
          <button  className="mt-6 px-5 py-2.5 flex rounded-lg text-white text-sm tracking-wider border-none outline-none bg-pink-600 hover:bg-pink-700 active:bg-pink-600"><TiShoppingCart className='mt-1'/> Shop Now</button>
        </div>
      </div>
      ))}
    </div>
  )
}
