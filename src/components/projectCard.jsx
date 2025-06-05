

const ProjectCard = ({ image, project_name, Airflow, description }) =>{
    return <>
    <div className="flex flex-col rounded-2xl border border-gray-200 mx-5 py-5 px-5 w-[350px]"> 
        <div className="pt-1">
            <img src={image} alt="project image"className="w-full h-auto" />
        </div>
        <div className="pt-2 flex justify-between items-center">
            <div className="text-gray-700 text-lg">{project_name}</div>
            <button className="bg-gray-200 rounded-4xl py-2 px-4">{Airflow}</button>
        </div>
        <div className="pt-5 text-gray-600 text-xs leading-relaxed">
            {description}
        </div>
    </div>
    </>
}

export default ProjectCard