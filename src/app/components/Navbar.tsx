import { AlignJustify, ArrowDownToLine } from "lucide-react";
import Link from "next/link";
export default function Home (){
    return(
    <>
    {/* logo */}
    <div className="flex justify-around items-center h-[80px] ">
    <div className="text-5xl">Tween</div>
    <div>
    <ul className="text-[18px] font-semibold md:flex gap-x-6 hidden ">
    <li>
    <Link href="/home"className="text-primary">home</Link></li>
    <li><Link href="#about">About</Link></li>
    <li><Link href="#services">Services</Link></li>
    <li><Link href="#ourWork">OurWork</Link></li>
     <li><Link href="#pricing">Pricing</Link></li>
    <li><Link href="#contact">Contact</Link>
    
    </li>
   

 
    </ul>
    </div>
    <div className="md:hidden"><AlignJustify /></div>
    <button className="bg-primary h-[45px] w-[150px] p-2  pl-6 font-semibold rounded-sm"> Download 
    <ArrowDownToLine className="relative bottom-5 h-4 w-4 animate-bounce "/>
    </button>
    </div>
    </>
)
}