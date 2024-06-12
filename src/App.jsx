import './App.css';
import logo from "./images/Composure.jpg";
import { RiTwitterXFill } from "react-icons/ri";

function App() {

  return (
    <>
      <div className='flex flex-col-reverse justify-between h-screen w-[100%] gap-14 items-center m-auto lg:w-[80%] lg:flex-row lg:gap-8'>

      {/* Text Info */}
        <div className='w-[100%] text-center lg:text-start lg:w-[80%]  flex flex-col items-center justify-center lg:items-start lg:justify-between'>
          <h1 className='font-bold uppercase text-2xl mb-8 lg:text-3xl'>Composure</h1>
          <div className='flex flex-col items-start justify-center mb-8 tracking-widest'>
            You angry, sad, happy, broke, rich? <br />
            Reegardless of what that feeling may be STAY CALM.
          </div>
          <div className='flex flex-col gap-2 justify-between items-center w-[100%] font-semibold text-[#FFFF00] text-xl mb-8 lg:w-[60%] lg:flex-row lg:gap-0'>
              <span>STEEZE 100%</span>
              <span>COMPOSURE 250%</span>
          </div>
          <div className='py-2 px-4 rounded-md bg-[#ffff00] w-max text-center text-[#000] font-bold cursor-pointer animate-bounce'>
            <a href="https://x.com/ComposedSteeze?t=4RsuUMEXMoxVADVpY4gcZw&s=09" target='_blank'> <RiTwitterXFill size={16} /></a>
          </div>

        </div>

        {/* Image */}
        <div>
          <img src={logo} className='w-40 border-none rounded-full object-cover lg:w-60' />
        </div>
      </div>
    </>
  )
}

export default App
