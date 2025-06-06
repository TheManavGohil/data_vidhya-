const Platforms = () =>{

    return<>
    <div className='flex flex-col pt-20'>
        <div className='text-center text-[#8B90A1]'>PLATFORM</div>
        <div className='pt-5 text-center max-w-100 mx-auto text-4xl font-bold'>Solve Leet Code like problems</div>
        <div className='pt-5 text-center text-sm max-w-175 mx-auto'>Our platform empowers you to advance your career with practical skills and real-world applications. Join a vibrant community that supports your learning journey.</div>
        <div className='pt-8 flex justify-center'>
          <div className='flex rounded-2xl border border-gray-300 overflow-hidden w-300'>
              <button className='flex-1  py-2  text-white bg-gradient-to-bl from-[#2D3BF2] to-[#B832E9]'>Choose Your Path</button>
              <button className='flex-1 text-[#33333366] border border-gray-300'>Solve Questions</button>
              <button className='flex-1 text-[#33333366] border border-gray-300'>AI Review</button>
              <button className='flex-1 text-[#33333366]'>Gamified Learning</button>
          </div>
        </div>
        <div className='pt-5 flex justify-center'>
          <div className='flex justify-around items-center bg-[#784FEF08] border border-gray-300 rounded-lg w-300 h-[420px]'>
              <div className='flex-1 p-5'>
                <div className='font-bold'>Choose Your Path</div>
                <div className='text-[#33333366]'>
                  <div className='max-w-80'>Choose your path and have a personalized roadmap . We offer :</div>
                  <div>1. Pyspark</div>
                  <div>2. Scala</div>
                  <div>3. DBT</div>
                  <div>4. Postgres SQL</div>
                  <div>5. Python</div>
                </div>
              </div>
              <img src='platforms.png' alt='platforms' className='flex-2 p-5 w-auto h-[400px]'/>
          </div>
        </div>
    </div>
    </>
}

export default Platforms