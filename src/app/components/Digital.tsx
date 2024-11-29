import Image from "next/image"
const Digital = () => {
  return (
    <div className="w-full h-[530px]" >
      <div className="md:flex mt-[90px] mb-[20px] ml-[60px] lg:gap-[550px] md:gap-[300px] ">
      <h2 className=" text-5xl"> Digital Happiness</h2>
      <ul className="underline text-gray-400 flex space-x-8 mt-5 text-[18px]">
      <li className="hover:text-primary">Introduction</li>
      <li className="hover:text-primary">Profile</li>
      <li className="hover:text-primary">FAQS</li></ul>
      </div>
      <div className="md:flex justify-center lg:gap-16 md:gap-6">
      <Image src={"/digital.jpg"} alt="digital" height={220} width={530} />
      <div className="h-[370px] lg:w-[450px] md:w-[350px]  w-[340px] ml-3 md:ml-0 lg:text-[17px] text-[17px] md:text-[15px] text-justify mr-3">
        <h3 className="text-[32px] font-bold pt-6 pb-2">Brand Creation</h3>
        <p>We want you to be happy with our Tween Agency services. Our digital agency is ready to serve you to grow your business in a healthy way.</p>
        <br />
        <p>This is Bootstrap 5 HTML template for your website provided by Tooplate. You can download, edit and use this layout for your company website.</p>
        <br />
        <p>Image credits go to FreePik and Unsplash for images used in this template. We really appreciate these stock image websites for providing free photos to everyone.</p>
      </div>
      </div>
    </div>
 
  )
}

export default Digital