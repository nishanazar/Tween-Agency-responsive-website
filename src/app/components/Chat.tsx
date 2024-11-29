const Chat = () => {
  return (
    <div className="lg:mt-[780px] md:mt-[500px] mt-[780px]">
    <h3 className="text-[35px] font-bold text-center ">Let&#39;s chat</h3>
    <div className="w-[750px]  h-[470px] m-auto mt-8 text-[#6f7572]">
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ml-4 lg:m-0 space-y-3 lg:space-y-0">
    <div>
    <label>Full Name</label>
    <br />
    <input type="text" className="h-[50px] lg:w-[210px] w-[300px] mt-3 border-[2px] hover:ring ring-blue-300 focus:outline-none rounded-md"/>
    </div>
    <div>
    <label>Email Address</label>
    <br />
    <input type="email" className="h-[50px] lg:w-[210px] mt-3 w-[300px] border-[1px] hover:ring ring-blue-300 focus:outline-none rounded-md" />
    </div>
    <div>
    <label>How did you know about us?</label>
    <div>
    <select className="border border-gray-300 rounded-md p-3 w-[300px]  hover:ring ring-blue-300 focus:outline-none  h-[50px] lg:w-[210px] mt-3  ">
   <option>Choose a subject</option>
   <option>Website Searches</option>
   <option>Social Media</option>
   <option>Others</option>
   </select>
   </div>
   <br />
   </div>

   <div>
    <label>Tell us about the project</label>
    <br />
    <input type="text" className="h-[170px] lg:w-[715px] w-[350px] focus:outline-none  border-gray-300  mt-3 border-[1px] hover:ring ring-blue-300 rounded-md"/></div>
   </div>
   <button className="font-semibold bg-primary mt-4 py-3 text-center rounded-lg md:w-[715] w-[350px] text-white hover:bg-black">Submit</button>
   </div>
    </div>
  )
}

export default Chat