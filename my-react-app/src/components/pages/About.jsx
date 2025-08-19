import AboutImage from '../../assets/About-image.jpg'
import { MdOutlineLightbulb } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { MdDevices } from "react-icons/md";

export default function About(){

    return <div>
        <section id="about" className="pb-5 pt-10 md:pt-20 md:bg-red-5">
            <div className="max-w-[1200px] mx-auto px-5 gap-y-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-7 sm:px-8">
                
                <div className="w-full h-[450px] rounded-2xl" data-aos="fade-right" data-aos-easing="ease-in-out">
                    <img src={AboutImage} alt="My self"  className='w-full h-full object-cover rounded-lg'/>

                    <div className='absolute bottom-0 right-0 py-10 px-5 rounded-full bg-black text-white'>
                        <p className='font-bold'>2+ Years</p>
                    </div>
                </div>
                

                <div className='' data-aos="fade-left">
                    <h1 className='text-3xl font-bold'><span className='border-b-4'>About</span> Me</h1>
                    <p className='mt-8 text-[18px] text-gray-500 md:mt-3 lg:mt-8'>Hello! I’m Christopher, a dedicated frontend developer with over 2 years of experience building visually appealing and highly functional websites. My expertise lies in React and UI/UX design, with a strong commitment to delivering intuitive and seamless user experiences.</p>
                    
                    <p className='mt-5 text-[18px] text-gray-500 md:mt-0 lg:mt-5'>I specialize in simplifying complex problems through clean, user-centered design. I believe that impactful design is not only about aesthetics but also about how effectively it serves the user.</p>

                    <div className='flex flex-col space-y-5 mt-9 md:flex-row md:space-x-5 md:mt-6 lg:mt-9'>
                        <div className='h-32 w-full border-1 border-gray-500 flex flex-col items-center justify-center rounded-2xl'>
                            <FaCode size={44}/>
                            <p>Clean code</p>
                        </div>

                        <div className='h-32 w-full border-1 border-gray-500 flex flex-col items-center justify-center rounded-2xl md:text-center'>
                            <MdOutlineLightbulb size={44}/>
                            <p>Problem Solving</p>
                        </div>

                        <div className='h-32 w-full border-1 border-gray-500 flex flex-col items-center justify-center rounded-2xl md:text-center'>
                            <MdDevices size={44}/>
                            <p>Responsive Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}