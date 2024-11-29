import Card from "./Card"
const Plans = () => {
  return (
  <>
  <div className="bg-[url('/plans.jpg')] w-full md:h-[800px] h-[1400px] bg-cover bg-no-repeat relative md:top-[400px] top-[700px] lg:top-[700px]">
  <h3 className="md:text-[38px] text-[30px] font-bold text-center py-[50px] text-white ">Tween Marketing Plans</h3>
  <div className="md:flex justify-center gap-8 lg:space-y-0 space-y-5">
  <Card btn={"RECOMMENDED PLAN"} paragraphe={"Sufficient"} para2={"$4,600"} para3={"Managed Features"} list1={"Fully Digital"} list2={"Social Media Managements"} list3={"Website Optimizations"} list4={"24/7 Phone Calls and Emails"} para4={"Small to Mid-size Businesses"} para5={"Everything you need for your digital marketing stuffs"}/>
  <Card btn={"ECOMMERCE PLAN's"} paragraphe={"Complete"} para2={"$8,200"} para3={"Fully Featured Work"} list1={"Completely Digital"} list2={"Everything managed online"} list3={"Full Ecommerce Features"} list4={"24/7 Instant Video Chats"} para4={"High-end Ecommerce Websites"} para5={"Fit for your company and ecommerce related stuffs"}/>
  </div>
  </div>
</>

  )
}

export default Plans