
import Description from "./Description"
import Image from "next/image"

const Select = () => {
  return (
    <div className="w-full h-[200px] mt-[350px] md:mt-0">
    <h3 className="text-[35px] font-bold text-center py-[50px]">Selected Projects</h3>
    <div className="md:flex justify-center md:gap-4">
    <div>
    <Image className="transition duration-500 transform hover:scale-105 ml-5 md:m-0 " src={"/burger.jpg"} alt="" height={250} width={350} />
    <div className="relative bottom-[130px] left-9">
    <Description paragraphe={"Art Direction"} heading={"Simple Burger"}/>
    </div>
    </div>
    <div>
    <Image className="transition duration-500 transform hover:scale-105 ml-4 md:m-0  "src={"/data.jpg"} alt="" height={140} width={350} />
    <div className="relative bottom-[130px] left-9">
    <Description paragraphe={"Web Development"} heading={"Data Science"}/>
    </div>
    </div>
    <div>
    <Image className="transition duration-500 transform hover:scale-105 "src={"/lady.jpg"} alt="" height={350} width={390} />
    <div className="relative bottom-[130px] left-9">
    <Description paragraphe={"Photography"} heading={"Portraits"}/>
    </div>
    </div>
    </div>
    <div className="lg:flex md:hidden hidden ">
    <div className="relative bottom-[220px] left-[110px]">
    <Image className="transition duration-500 transform hover:scale-105 "src={"/fitness.jpg"} alt="" height={140} width={350} />
    <div className="relative bottom-[130px] left-9">
    <Description paragraphe={"Design"} heading={"Fitness"}/>
    </div>
    </div>
    <div className="relative bottom-[340px] left-[130px]">
    <Image className="transition duration-500 transform hover:scale-105 "src={"/products.jpg"} alt="" height={240} width={350} />
    <div className="relative bottom-[130px] left-9">
    <Description paragraphe={"Web Development"} heading={"Data Science"}/>
    </div>
    </div>
    <div className="h-[90px] w-[330px] relative bottom-[90px] left-[170px]">
    <p className="text-[20px]">If you are interested in working together, Say <strong>Hi at hi@company.com</strong></p>
    </div>
    </div>
    0</div>
  )
}

export default Select