import { MoonLoader } from 'react-spinners'

const Spinner = () => {
  return (
    <div
      className={`h-[250px]  
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
     
      <MoonLoader size={100} color="#fc00a6" />
    </div>
  )
}

export default Spinner