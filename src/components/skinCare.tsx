 
 import Image from 'next/image'


import hydra from '../../public/skinCare/hyaluronic-acid.jpg'
import vitaminC from '../../public/skinCare/vitaminC.png'
import sunsCream from '../../public/skinCare/lina-verovaya-BibJjO4sYrI-unsplash.jpg'
import Retinol from "../../public/skinCare/Retinol Night Cream.jpg"

import { TiShoppingCart } from "react-icons/ti"

import { Button } from '@/components/ui/button'
import { Card, CardHeader ,CardTitle, CardContent, CardDescription,CardFooter } from '@/components/ui/card'

const skinData = [
    {
      "id": 1,
      "name": "Hydrating Facial Cleanser",
      "image": hydra,
      "description": "A gentle, non-foaming cleanser that removes dirt and makeup without stripping the skin of its natural oils.",
      "details": {
        "ingredients": ["Glycerin", "Ceramides", "Hyaluronic Acid"],
        "suitableFor": "All skin types, especially dry and sensitive skin",
        "size": "236 ml"
      },
      "price": "$12.99"
    },
    {
      "id": 2,
      "name": "Vitamin C Serum",
      "image": vitaminC,
      "description": "A brightening serum formulated with pure Vitamin C to reduce dark spots and improve skin tone.",
      "details": {
        "ingredients": ["Vitamin C", "Ferulic Acid", "Vitamin E"],
        "suitableFor": "Dull and uneven skin tone",
        "size": "30 ml"
      },
      "price": "$25.99"
    },
    {
      "id": 3,
      "name": "Sunscreen SPF 50+",
      "image": sunsCream,
      "description": "A lightweight, non-greasy sunscreen that provides broad-spectrum protection against UVA and UVB rays.",
      "details": {
        "ingredients": ["Zinc Oxide", "Niacinamide", "Avobenzone"],
        "suitableFor": "All skin types",
        "size": "50 ml"
      },
      "price": "$18.99"
    },
    {
      "id": 4,
      "name": "Retinol Night Cream",
      "image": Retinol,
      "description": "An anti-aging night cream that reduces the appearance of fine lines and wrinkles.",
      "details": {
        "ingredients": ["Retinol", "Peptides", "Shea Butter"],
        "suitableFor": "Normal to dry skin",
        "size": "50 ml"
      },
      "price": "$29.99"
    },
    
  ]
  

export default function SkinCare() {
  return (
    <div className='grid grid-cols-2 max-sm:block'>
      {skinData.map((item)=>(
        <div
        className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4 flip-in-hor-bottom ">
        <div className="min-h-[256px]">
          <Image alt={`${item.id}`} src={item.image} className="w-full" />
        </div>
  
        <div className="p-6">
          <h3 className="text-gray-800 text-xl font-bold">{item.name}</h3>
          <p className="mt-4 text-sm text-gray-500 leading-relaxed"> {item.description} 
            <br />
          </p>
          <ul>
          <li>{item.details.ingredients}</li>
            <li>{item.details.suitableFor}</li>
            <li>{item.details.size}</li>

          </ul>
          <button  className="mt-6 px-5 py-2.5 flex rounded-lg text-white text-sm tracking-wider border-none outline-none bg-pink-600 hover:bg-pink-700 active:bg-pink-600"><TiShoppingCart className='mt-1'/> Shop Now</button>
        </div>
      </div>
      ))}
    </div>
  )
}
