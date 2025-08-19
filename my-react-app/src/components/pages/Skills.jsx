import { useState } from 'react';
import progressBar from './Skills-progress-bar'
import { ThemeContext } from '../../ThemeContext';
import { useContext } from 'react';

const categories = ['Frontend', "Backend", "Tools"]

export default function Skills() {

    const {theme} = useContext(ThemeContext);

    const [skillBar, setSkillBar] = useState("Frontend")

    const filterSkill = skillBar === 'Frontend' ? progressBar.filter(frontCat => frontCat.category === 'Frontend') : progressBar.filter(otherCat => otherCat.category === skillBar);

    return <div>
        <section className="py-2" id='skills'>
            <div className="max-w-[1200px]  mx-auto px-5 pb-5">
                
                <div
                className="text-center">
                    <h1 className="text-3xl font-bold">My Skills</h1>
                    <div className={`w-20 mt-2 rounded h-1 mx-auto bg-black ${theme ? 'bg-white' : ''}`}></div>
                    <p className="text-gray-500 my-4">I've gained expertise in various technologies throughout my career. Here's an overview of my technical skills.</p>
                </div>

                <div className={`flex my-8 mx-auto px-5 py-1.5 gap-10 rounded bg-gray-200 w-fit ${theme ? 'text-gray-600 bg-gray' : ''}`}>
                    {
                        categories.map(cat => (
                            <button onClick={() => setSkillBar(cat)} className='px-3'>{cat}</button>
                        ))
                    }
                </div>

                <div className="grid grid-cols-1 gap-y-4 min-h-[250px] md:grid-cols-2 md:gap-x-7">
                    {
                        filterSkill.map((skill, id) => (
                            <div key={id}>                          
                                <div className={`w-full px-5 border shadow-md border-gray-300 rounded-[7px] h-22 flex justify-center flex-col overflow-hidden ${theme ? 'bg-black border-gray-400' : ''}`}>

                                    <div className=" flex justify-between mb-1">
                                        <p className='text-[18px]'>{skill.name}</p>
                                        <p>{`${skill.level}%`}</p>
                                    </div>

                                    <div className={`w-full rounded-full h-2 ${theme ? 'bg-gray-400' : 'bg-gray-200'}`}> 
                                        <div className={`bg-black w-full rounded-full h-2 transition-all duration-500 ${theme ? 'bg-white' : ''}`} style={{width: `${skill.level}%`}}> 
                                    </div>
                                    </div>
                                </div>
                                
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    </div>
}