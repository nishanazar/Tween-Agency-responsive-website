interface IDescription {
    paragraphe: string;
    heading: string
}

const Description = ( props: IDescription) => {
    const {paragraphe, heading} = props
    return (
    <div className="h-[110px] w-[250px] bg-slate-100 rounded-md pl-[20px] pt-5 space-y-3 blur-effect hover:blur-sm hover:scale-100 transition duration-300 ease-in-out">
    <span className="bg-white rounded-[10px] py-2 px-3 text-[10px]">{paragraphe}</span>
    <p className="text-[30px] font-semibold">{heading}</p>
    </div>
    )
  }
  
  export default Description