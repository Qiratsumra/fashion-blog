import Link from "next/link";
import { GoMail } from "react-icons/go";
import { SiFacebook } from "react-icons/si";
import { SlSocialLinkedin  } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";



export default function page() {
  return (
    <div className="bg-white my-7">
    <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl  font-[sans-serif]">
    <div>
        <h1 className="text-pink-600 text-3xl font-extrabold">Let's Talk</h1>
        <p className="text-sm text-pink-600 font-sans mt-4">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>

        <div className="mt-12">
            <h2 className="text-pink-600 text-base font-bold">Email</h2>
            <ul className="mt-4">
                <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <GoMail className="w-5 h-5  text-pink-600 "/>
                    </div>
                    <Link href="" className="text-[#007bff] text-sm ml-4">
                        <small className="block text-pink-500 text-[16px] mt-2">Mail</small>
                        <strong className="text-white">info@example.com</strong>
                    </Link>
                </li>
            </ul>
        </div>

        <div className="mt-12">
            <h2 className="text-pink-600 text-base font-bold">Socials</h2>

            <ul className="flex mt-4 space-x-4">
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <Link href="javascript:void(0)">
                       <SiFacebook className=" text-pink-600 w-5 h-5"/>
                    </Link>
                </li>
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <Link href="javascript:void(0)">
                       <SlSocialLinkedin className=" text-pink-600 w-5 h-5"/>
                    </Link>
                </li>
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <Link href="javascript:void(0)">
                       <FaInstagram className="text-pink-600 w-5 h-5"/>
                    </Link>
                </li>
            </ul>
        </div>
    </div>

    <form className="ml-auto space-y-4">
        <input type='text' placeholder='Name'
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-white focus:bg-white" />
        <input type='email' placeholder='Email'
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-white focus:bg-white" />
        <input type='text' placeholder='Subject'
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-white focus:bg-white" />
        <textarea placeholder='Message' rows={6}
            className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-white focus:bg-white"></textarea>
        <button type='button'
            className="text-white bg-purple-600 hover:bg-fuchsia-700 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
    </form>
</div>
</div>
  )
}


