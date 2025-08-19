import { GoDownload } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import Footer from "../Footer";


export default function Home() {

    const {theme} = useContext(ThemeContext);

    return <div>
        <section className="pt-28" id="home" >
            <div className="max-w-[1200px] px-5 m-auto md:px-8 md: sm:px-8">
                <div className="flex flex-col text-center ">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-bold md:text-4xl">Hi, I'm Christopher Sackey</h1>
                        <p className="text-[20px] text-center text-gray-400 mt-3 md:text-3xl ">Frontend Developer | Software Engineering Student</p>               
                    </div>

                    <div className="flex flex-col items-center-safe text-[18px] mt-12 text-gray-500">
                        <p className="text-lg max-w-xl ">I build exceptional digital experiences with modern technologies. Specializing in React, Next.js, and intuitive UI design to create beautiful and functional Websites.</p>
                    </div>

                    <div className="flex mx-auto py-7 space-x-6 ">
                        <a href="#projects" className={`border-2 px-4 py-2 rounded-3xl ${theme ? 'bg-white text-black' : 'bg-black text-white'}`}>View My Work</a>
                        <a href="/ChristopherSackeyResume.pdf" download className="border-2 px-4 py-2 rounded-3xl flex">Download CV <span className="mt-1 ml-1"><GoDownload /></span></a>
                    </div>

                    <div className="flex mx-auto mt-2.5 space-x-4">
                        <a href="https://github.com/ChristopherSackey" target="_blank" className="border-2 px-2.5 py-2 rounded-3xl"><FaGithub size={24}/></a>
                        <a href="https://www.linkedin.com/in/christopher-sackey-23977a2a5/" target="_blank" className="border-2 px-2.5 py-2 rounded-3xl"><FaLinkedin size={24}/></a>
                        <a href="https://wa.me/233557611132" className="border-2 px-2.5 py-2 rounded-3xl"><FaWhatsappSquare size={24}/></a>
                    </div>
                </div>
                
            </div>
        </section>

        <About />

        <Projects />

        <Skills />

        <Contact />

        <Footer />
    </div>
}