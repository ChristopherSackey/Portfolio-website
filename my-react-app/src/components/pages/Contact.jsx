import { ThemeContext } from "../../ThemeContext";
import { useContext, useEffect, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import emailjs from "emailjs-com";

export default function Contact() {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleInput = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    // email
    const [status, setStatus] = useState("");

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     if(!contact.name || !contact.email || !contact.message){
    //         setStatus("Please fill out all fields");
    //         return;
    //     }

    //     emailjs.send(
    //         "service_ay73c18",
    //         "template_fb2y4yg",
    //         contact,
    //        0 "4YeIl_ok-iPnwMjIh"
    //     ).then(
    //         () => {
    //             setStatus("✅ Message sent successfully!") ;
    //             setContact({name: "", email: "", message: ""});
    //         },
    //         (error) => {
    //             setStatus("❌ Failed to send message. Try again later");
    //             console.error(error);
    //         }
    //     )
    // }


const sendEmail = (e) => {
    e.preventDefault();

    if (!contact.name || !contact.email || !contact.message) {
        setStatus("❌ Please fill out all fields");
        return;
    }

    emailjs.send(
        "service_ay73c18",
        "template_fb2y4yg",
        {
            title: "New Contact Form Submission",
            name: contact.name,
            email: contact.email,
            message: contact.message
        },
        "4YeIl_ok-iPnwMjIh"
    ).then(
        () => {
            setStatus("✅ Message sent successfully!");
            setContact({ name: "", email: "", message: "" });
        },
        (error) => {
            setStatus("❌ Failed to send message. Try again later");
            console.error(error);
        }
    );
};









    const {theme} = useContext(ThemeContext);

    return <div>
        <section className={`pb-10 mt-15 md:mt-20 ${theme ? 'bg-[#111111]' : 'bg-gray-50'}`}  id="contact">
            <div className="max-w-[1200px] mx-auto px-7  outline: 2px solid red;" >
                <div className="" >
                    <h1 className="text-center md:text-center text-3xl font-bold">Get In Touch</h1>
                    <div className={`w-16 h-1 mx-auto mt-1 rounded ${theme ? 'bg-white' : 'bg-black'}`}></div>
                    <p className=" md:text-center md:mt-5 text-[18px] text-gray-500">From big projects to simple hellos—I'm just a message away. </p>
                </div>

                <div className="flex flex-col xl:flex-row md:justify-between mt-10 gap-10 ">
                    <div className="flex flex-col gap-7">
                        <div className={`flex py-7 pr-30 pl-5 border shadow rounded-[5px] ${theme ? 'border-gray-400 bg-black' : 'border-gray-300 bg-white'}`}>
                            <CiLocationOn className="mt-1" size={24}/>
                            <div className="ml-2.5">
                                <h2 className="font-bold text-[18px] ">Location</h2>
                                <p className="text-gray-400">Cape coast, Ghana</p>
                            </div>
                        </div>

                        <div className={`flex py-7 pr-30 pl-5 border shadow rounded-[5px] ${theme ? 'border-gray-400 bg-black' : 'border-gray-300 bg-white'}`}>
                            <MdOutlineMail className="mt-1" size={24}/>
                            <div className="ml-2.5">
                                <h2 className="font-bold text-[18px] ">Email</h2>
                                <p className="text-gray-400">sackeychristopher03@gmail.com</p>
                            </div>
                        </div>

                        <div className={`flex py-7 pr-30 pl-5 border shadow rounded-[5px] ${theme ? 'border-gray-400 bg-black' : 'border-gray-300 bg-white'}`}>
                            <FiPhoneCall  size={24}/>
                            <div className="ml-2.5">
                                <h2 className="font-bold text-[18px] ">Phone</h2>
                                <p className="text-gray-400">+233 557-611-32 </p>
                            </div>
                        </div>
                    </div>

                    <div className={`py-2 px-10 border shadow rounded  md:min-w-[700px] ${theme ? 'bg-black text-gray-400' : 'bg-white border-gray-300'}`}>
                        <form onSubmit={sendEmail} >
                            <div className="flex flex-col md:flex">

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="border pl-3 pr-10 py-1.5  rounded" placeholder="Your name" onChange={handleInput} name="name" value={contact.name} />                            
                                </div>

                                <div className="flex flex-col gap-1 mt-5">
                                    <label htmlFor="name">Email</label>
                                    <input type="text" className="border md:pl-3 md:pr-10 md:py-1.5  rounded" placeholder="Your email" onChange={handleInput} name="email" value={contact.email} />    
                                </div>

                            </div>

                            <div className="flex gap-1 mt-5 md:flex-col">
                                <label htmlFor="message">Message</label>
                                <textarea placeholder="Your message" className="border px-3 pt-1 rounded border-gray-200" name="message" id="message" cols="30" rows="6" resize="none" onChange={handleInput} value={contact.message}></textarea>
                            </div>

                            <button type="submit" className={`mt-5 border py-1.5 px-7 rounded ${theme ? 'bg-white text-black' : 'bg-black text-white'} `}>Send Message</button>
                            
                            {status && <p className="text-center text-sm mt-2">{status}</p>}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    </div>
}