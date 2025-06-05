import ProjectCard from '@/components/projectCard';
import Navbar from '@/components/navbar'
import CostumerReview from '@/components/costumerReview'
import FAQcard from '@/components/FQAcard';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black px-15 overflow-hidden">
      <Navbar />  
        
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


      <div className='flex justify-center pt-18'>
        <img src='interface.png' alt="Product's interface" className='w-auto h-170' />
      </div>


      <div className='flex flex-col pt-20'>
        <div className='text-center text-5xl font-bold'>
          <div>The Ultimate</div>
          <div> Data Engineering Course</div>
        </div>

        <div className='text-center text-lg pt-8 max-w-100 mx-auto'>
          Go from data novice to engineering pro ,faster than you thought possible
        </div>

        <div className='flex justify-center pl-40 pt-15'>
          <img src='product.png' alt="product's overview"/>
        </div>

        <button className='mt-15 rounded-lg bg-black text-white w-40 py-4 mx-auto hover:cursor-pointer'>View Course</button>
      </div>
      

      <div className='flex flex-col pt-20'>
        <div className='text-center text-[#8B90A1]'>PROJECTS</div> 
        <div className='pt-4 text-center font-bold text-4xl'>Work on Real Time Projects</div>
        <div className='pt-4 text-center max-w-100 mx-auto text-sm'>Gain proficiency with 14+ extensive projects designed to provide practical, real-world data engineering experience</div>
        <div className='pt-4 flex justify-center'>
          <div className='flex rounded-2xl border border-gray-300 overflow-hidden'>
            <button className='flex-1 py-2 w-60 text-white text-sm font-medium bg-gradient-to-bl from-[#2D3BF2] to-[#B832E9]'>Data Vidhya Projects</button>
            <button className='flex-1 py-2 text-sm text-[#33333366] font-medium hover:cursor-pointer'>Students Review</button>
          </div>
        </div>
        <div className='flex flex-wrap justify-center gap-5 pt-12'>
            <ProjectCard image={"project.png"} project_name={"Project Name"} Airflow={"AirFlow"} description={"Learn to automate, schedule, and monitor data pipelines with Apache Airflow. This course covers the basics, building efficient DAGs, and real-world projects on AWS & GCP. Perfect for anyone looking to manage modern data workflows easily"} />
            <ProjectCard image={"project.png"} project_name={"Project Name"} Airflow={"AirFlow"} description={"Learn to automate, schedule, and monitor data pipelines with Apache Airflow. This course covers the basics, building efficient DAGs, and real-world projects on AWS & GCP. Perfect for anyone looking to manage modern data workflows easily"} />
            <ProjectCard image={"project.png"} project_name={"Project Name"} Airflow={"AirFlow"} description={"Learn to automate, schedule, and monitor data pipelines with Apache Airflow. This course covers the basics, building efficient DAGs, and real-world projects on AWS & GCP. Perfect for anyone looking to manage modern data workflows easily"} />
        </div>
        <div className='text-center pt-12'>
          <button className='text-white bg-black rounded-lg w-40 mx-auto py-2 hover:cursor-pointer'>View All Projects</button>        
        </div>
      </div>

          
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
                  <div>5.   Python</div>
                </div>
              </div>
              <img src='platforms.png' alt='platforms' className='flex-2 p-5 w-auto h-[400px]'/>
          </div>
        </div>
      </div>

      <div className='flex flex-col py-20'>
        <div className='text-center text-4xl font-bold'>Customer Testimonials</div>
        <div className='text-center pt-5 pb-10'>What our customers say about us!</div>
        <div className='px-30 grid grid-cols-3'>
          <CostumerReview image={"Stars.png"} 
            review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."} 
            avatar={"avatar.jpg"}
            name={"Darshil Parmar"}
            position={"HR, Google"}
            />
            <CostumerReview image={"Stars.png"} 
            review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."} 
            avatar={"avatar.jpg"}
            name={"Darshil Parmar"}
            position={"HR, Google"}
            />
            <CostumerReview image={"Stars.png"} 
            review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."} 
            avatar={"avatar.jpg"}
            name={"Darshil Parmar"}
            position={"HR, Google"}
            />
            <CostumerReview image={"Stars.png"} 
            review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."} 
            avatar={"avatar.jpg"}
            name={"Darshil Parmar"}
            position={"HR, Google"}
            />
            <CostumerReview image={"Stars.png"} 
            review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."} 
            avatar={"avatar.jpg"}
            name={"Darshil Parmar"}
            position={"HR, Google"}
            />
            <CostumerReview image={"Stars.png"} 
            review={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."} 
            avatar={"avatar.jpg"}
            name={"Darshil Parmar"}
            position={"HR, Google"}
            />
        </div>
      </div>


      <div className='w-screen flex flex-col bg-[#F7F7FB]'>
          <div className='text-center text-4xl font-bold mt-30'>FAQs</div>
          <div className='text-center pt-5'>Find answers to your most pressing questions about our data engineering courses and platform.</div>
          <div className='pt-15 flex flex-col mb-40 '>
              <FAQcard question={"What is Data engineering?"}/>
              <FAQcard question={"Who should take courses?"}/>
              <FAQcard question={"What is the platform?"}/>
              <FAQcard question={"How do i enroll?"}/>
              <FAQcard question={"Is there a refund policy?"}/>
          </div>
      </div>

      <Footer />
    </div>
  );
}
