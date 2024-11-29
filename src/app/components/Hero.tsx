import Navbar from "./Navbar";

export default function Home (){
    return(
    <div className="bg-[url('/surface.jpg')] text-white w-full lg:h-screen h-[500px] md:h-[600px] bg-cover bg-no-repeat ">
    <div className="absolute top-0 left-0 w-full h-screen bg-white opacity-30"></div>
    <Navbar/>
    <h1 className="relative md:text-6xl text-[33px] font-bold md:left-[110px] left-[20px] top-[100px] md:leading-[85px] transition duration-500 transform hover:scale-105 ">We are ready to serve <br /> for your digital <br /> marketing</h1>
    </div>
    )

}