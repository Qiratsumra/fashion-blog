import Image from "next/image";
import Hero from "../components/Hero";

import MakeUP from "../components/makeup";
import SkinCare from "../components/skinCare";



export default function Home() {
  return (
   <>
   <Hero/>
<br />   
<br />   
<br />   
 <div className="m-10">
 <SkinCare/>
 <MakeUP/>
 </div>

   </>
  );
}
