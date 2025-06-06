import ProjectCard from "./projectCard"


const Projects = () =>{

    return<>
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
    </>
}


export default Projects