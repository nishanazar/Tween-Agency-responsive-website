import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <div className="w-full h-[470px] bg-[#0d2e30] text-white lg:m-0 md:mt-[30px] mt-[170px]">
    <div className="flex lg:gap-[100px] md:gap-[5px]">
    <div className="h-[200px] lg:w-[450px] w-[350px] relative lg:left-[130px] md:left-[30px] top-[100px] hidden md:block">
    <h5 className="text-[25px] font-bold">Newsletter</h5>
    <input type="email" placeholder="Your email address" className=" bg-transparent border-b-2 border-b-white  p-3 w-[30px]  hover:ring ring-blue-300 focus:outline-none  h-[50px] lg:w-[280px] mt-6 "/>
    <button className=" py-4 px-8 rounded-md ml-4 hover:bg-black hover:text-white text-black bg-white">Subscribe</button>
    </div>
    <div className=" h-[250px] w-[250px] relative lg:left-[130px] ml-4 top-[100px]">
    <h3 className="text-[23px] font-semibold">Services</h3>
    <ul className="space-y-2 mt-3">
    <li>Digital Marketing</li>
    <li>Creative Ideas</li>
    <li>Branding</li>
    <li>Video Contents</li>
    </ul>
    </div>
    <div className=" h-[250px] w-[200px]  relative lg:left-[130px] top-[100px] mr-3 md:mr-0">
    <h3 className="text-[23px] font-semibold">Say Hi</h3>
    <p className="text-[18px]">Sunderland SR6 0JL, United Kingdom <br />
     email@company.com</p>
    </div>
    </div>
    <div className="border-b-2 border-[#686e6b] mt-[85px] md:mx-[120px] mx-[30px] "></div>
    <div className="md:ml-[130px] ml-[30px] md:flex justify-between mt-5">
    <p>Copyright © 2022 Tween Agency Co., Ltd. <br />
    Design: Tooplate</p>
    <div className="flex gap-4 space-y-6 md:space-y-0">
    <Facebook />
    <Twitter />
    <Instagram />
    <Linkedin />
    <Youtube />
    </div>
    <div>
    </div>
    </div>
    </div>
  )
}

export default Footer