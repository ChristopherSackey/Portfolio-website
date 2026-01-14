import { LuSunMedium } from "react-icons/lu";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function Navbar() {
    const {theme, setTheme} = useContext(ThemeContext)

    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleThemeToogle = () => {
        setTheme(!theme)
    }

    return <div>
        <section className={`backdrop-blur-2xl shadow-sm z-50 fixed top-0 w-full ${theme ? 'bg-black' : 'bg-white '}`}>
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
                <div>
                    <a href="#home" className="text-[18px] md:text-2xl font-bold">Christopher Sackey</a>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex gap-5 text-[18px]">
                    <a className="text-gray-400 transition-colors hover:text-black" href="#home">Home</a>
                    <a className="text-gray-400 transition-colors hover:text-black" href="#about">About</a>
                    <a className="text-gray-400 transition-colors hover:text-black" href="#projects">Projects</a>
                    <a className="text-gray-400 transition-colors hover:text-black" href="#skills">Skills</a>
                    <a className="text-gray-400 transition-colors hover:text-black" href="#contact">Contact</a>

                    <button onClick={()=>{handleThemeToogle();localStorage.setItem("theme", JSON.stringify(!theme))}}>
                        {theme ? <MdOutlineDarkMode size={24}/> : <LuSunMedium size={24}/>}
                    </button>
                </div>



                
                <div className="md:hidden">
                    {/* Mobile theme icon */}
                    <button onClick={()=>{handleThemeToogle();localStorage.setItem("theme", JSON.stringify(!theme))}} className="mr-3">
                        {theme ? <MdOutlineDarkMode size={24}/> : <LuSunMedium size={24}/>}
                    </button>                
                    
                    {/* Mobile menu icon */}
                    <button onClick={handleMenu}>
                        {menuOpen ? <IoClose size={24} /> : <IoMdMenu size={24} />  }
                    </button>
                </div>

                {/* Mobile menu */}
                {
                    menuOpen && (
                        <div className={`absolute top-[50px] left-0 w-full flex flex-col items-center gap-4 py-6 md:hidden z-50 transition-all ease-in-out ${theme ? 'bg-[#151515] text-white' : 'bg-gray-100'}`}>
                                <a href="#home" onClick={() => {setMenuOpen(false)}}>Home</a>
                                <a href="#about" onClick={() => {setMenuOpen(false)}}>About</a>
                                <a href="#projects" onClick={() => {setMenuOpen(false)}}>Projects</a>
                                <a href="#skills" onClick={() => {setMenuOpen(false)}}>Skills</a>
                                <a href="#contact" onClick={() => {setMenuOpen(false)}}>Contact</a>
                                <div className="md:hidden shadow-md bg-gray-200">
                    
                                </div>
                        </div>


                    )                 
                }
            </div>
        </section>
    </div>
}