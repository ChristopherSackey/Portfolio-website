import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useState } from "react"
import projects from "./ProjectDetails"
import { ThemeContext } from "../../ThemeContext";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react"; 

const categories = ["All", "Web App", "Mobile"]

export default function Projects(){
    const {theme} = useContext(ThemeContext);

    const [selectCategory, setSelectCategory] = useState("All");

    const filterCategory = selectCategory === "All" ? projects : projects.filter(projectData => projectData.category === selectCategory)


    return <div>
        <section className="py-5 pb-20 " id="projects">
            <div className="max-w-[1200px] mx-auto px-5">    
                <div className="text-center my-10" data-aos="fade-up">
                    <h1 className="text-3xl font-bold mb-2">My Recent Projects</h1>
                    <div className={`w-16 h-1 mx-auto mt-1 rounded ${theme ? 'bg-white' : 'bg-black'}`}></div>
                    <p className="text-[18px] text-gray-500 mt-4 px-5">Browse through some of my latest work. Each project showcases my skills and passion for creating beautiful, functional web applications.</p>
                </div>



                <div className="flex flex-row gap-x-3.5 justify-center">
                    {
                        categories.map(cat => {
                                const iaActive = selectCategory === cat;
                            return (
                                <button data-aos="fade-up" className={`border-2 mt-5 px-5 rounded-2xl cursor-pointer ${iaActive ? (theme ? 'bg-white text-black' : 'bg-black text-white') : (theme ? '' : '')} `} key={cat} onClick={() => setSelectCategory(cat)}>{cat}</button>
                            )}
                        )
                    }
                </div>



                <div className="mt-8 gap-y-7 flex flex-col items-center md:px-3 md:gap-10 md:grid grid-cols-2 lg:grid-cols-3 ">
                    {
                        filterCategory.map(project => (
                            <div className="group pb-4 overflow-hidden w-[360px] rounded-[10px] shadow shadow-gray-500" data-aos="fade-up">
                                <div className="border-0">
                                    <img src={project.image} alt="" className="w-full h-[250px] transition-transform duration-300 ease-in-out hover:scale-105"/>

                                </div>


                                <div className="ml-3">
                                    <h1 className="text-[23px] font-bold ">{project.title}</h1>
                                    <p className="mt-4 text-gray-500">{project.description}</p>
                                    
                                    <div className="flex gap-10 mt-2.5">
                                        {
                                            Object.values(project.technologies).map((tech, idx) => (
                                                <p key={idx} className={`px-3 rounded-2xl ${theme ? 'bg-gray-700 text-white' : 'bg-gray-300'}`}>{tech}</p>
                                            ))
                                        }
                                    </div>

                                    <div className="text-center absolute bottom-7 left-0 w-full h-full bg-opacity-60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a href={project.github} target='_blank' className="flex bg-white text-black px-4 py-2 rounded"><FaGithub size={24} className='mr-1'/>GitHub</a>

                                        {/* <a href={project.liveDemo} className="flex bg-black text-white px-4 py-2 rounded"><ArrowTopRightOnSquareIcon className=" mr-1 w-6 h-6 text-white" />Live Demo</a> */}

                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>






                {/* New */}

            </div>
        </section>
        
    </div>
}