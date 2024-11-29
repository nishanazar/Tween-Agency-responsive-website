import { CircleUserRound } from "lucide-react"

interface ICard {
  btn: string;
  paragraphe: string;
  para2: string;
  para3: string;
  list1: string;
  list2: string;
  list3: string;
  list4: string;
  para4: string;
  para5: string;

}
const Card = (props: ICard) => {
  const { btn ,paragraphe, para2, para3 ,list1, list2,list3,list4,para4, para5} = props
  return (
  <div className="h-[580px] lg:w-[500px] md:w-[360] w-[351px] bg-white  transition duration-500 transform hover:scale-90 ml-4 lg:m-0">
  <button className="bg-primary text-white py-2 px-4 lg:ml-[346px] text-[12px]">{btn}</button>
  <div className="flex justify-around gap-[80px] my-[35px]">
  <div className="flex lg:gap-7 gap-0 md:gap-3">
  <CircleUserRound className="h-[40px] w-[40px]"/>
  <p className="text-[30px] font-semibold tracking-wider">{paragraphe}</p>
  </div>
  <p className="lg:text-[33px] text-[25px] font-bold">{para2}</p>
  </div>
  <hr />
  <div className="lg:ml-[130px] ml-5 my-[30px]">
  <p className="text-[24px] font-semibold pb-4">{para3}</p>
  <ul className="list-disc pl-5 text-gray-600 space-y-2 ">
  <li>{list1}</li>
  <li>{list2}</li>
  <li>{list3}</li>
  <li>{list4}</li>
  </ul></div>
  <div className="lg:ml-[130px] ml-5 mr-[55px]">
  <p className="text-[25px] font-semibold pb-4">{para4}</p>
  <p className="text-[18px]">{para5}</p>
  </div>
    </div>
  )
}

export default Card