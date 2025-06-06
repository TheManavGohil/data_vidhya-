const Hero = () =>{

    return<>
    <div className='relative'>
        <div className='absolute top-[100px] left-[-150px] w-[300px] h-[300px] rounded-full bg-[#6F37EE] opacity-20 blur-3xl z-0'></div>
        <div className='absolute bottom-[100px] right-[-150px] w-[300px] h-[300px] rounded-full bg-[#6F37EE] opacity-20 blur-3xl z-0'></div>

        <div className='flex flex-col z-10'>
          <div className='flex justify-center item-center pt-25'>
              <button className='flex justify-center rounded-3xl border border-gray-300 px-2 py-1 hover:cursor-pointer'>
                <div className='rounded-2xl px-2 text-white bg-gradient-to-r from-[#2D3BF2] to-[#B832E9]'> new </div>
                <span className="px-2 after:content-['>'] after:ml-4"> Intorducting datavidhya platform  </span>
              </button>
          </div>

          <div className='text-5xl font-black flex flex-col justify-center py-5'>
            <div className='text-center'>The #1 Job Transition Platform for </div>
            <span className='flex justify-center bg-gradient-to-b from-[#2D3BF2] to-[#B832E9] bg-clip-text text-transparent leading-tight overflow-visible pt-1'>Data Engineers.</span>
          </div>

          <div className='text-gray-500 text-xl flex justify-center font-'>
            Crush System Design and AI Interviews for breakfast!
          </div>

          <div className='flex justify-center font-semibold text-white pt-7 space-x-4'>
            <button className='rounded-2xl py-3 px-5 bg-gradient-to-b from-[#2D3BF2] to-[#B832E9] hover:cursor-pointer'>Explore Courses</button>
            <button className='rounded-2xl py-3 px-5 bg-[#2E2E2E] hover:cursor-pointer'>Solve Questions</button>
          </div>

          <div className='flex flex-col pt-20'> 
            <div className='flex justify-center text-[#777777] text-xl'> Trusted by 25934 Engineers who got their dream job at </div>
            <div className='flex justify-center items-center space-x-8 h-20 w-auto'>
              {/* <img src='monday-logo.png' alt='monday.com' className="h-15 w-auto " />
              <img src='segment-logo.png' alt='twilo-segment' className="h-20 w-auto" />
              <img src='oracle-logo.png' alt='oracle' className="h-20 w-auto" />
              <img src='samsung-logo.png' alt='samsung' className="h-20 w-auto" /> */}
              <img src="companies.png" alt='comapnies' />
            </div> 
          </div>
        </div>
      </div>
    </>
}

export default Hero 