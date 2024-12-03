import Image from "next/image"
import hero from "../../public/hero/ashley-piszek-c8K6RsoPJXg-unsplash.jpg"
import { ImPageBreak } from "react-icons/im"
export default function Hero() {
  return (
    <>
   <div className="relative  py-16 font-serif">
      <div className="absolute inset-0">
        <Image  src={hero} alt="Background Image" className="w-full h-[500px] object-cover opacity-100" />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-8 z-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-10">Welcome to Our Premium Service</h1>
        <p className="text-lg md:text-xl mt-12">Experience excellence like never before with our exclusive products and services.</p>
        <button type="button" className="bg-pink-600 hover:bg-pink-800 text-white text-base tracking-wide px-6 py-5 mt-10 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl">Shop Now</button>
      </div>
    </div>
    </>
  )
}
