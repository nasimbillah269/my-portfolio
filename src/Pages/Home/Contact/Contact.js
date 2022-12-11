import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
    return (
        <div className=' bg-black w-full mt-12 '>
            <h3 className='text-3xl font-bold text-white text-center pt-12'>Contact Me</h3>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse p-12">

                    <div className="lg:w-96 lg:h-96 lg:ml-20">
                        <div >
                            <h2 className='text-2xl  mb-4 text-white'>Email Me</h2>
                            <form action='https://getform.io/f/2e208171-3980-4ee0-903f-7c2ba0c2264c' method='POST'>
                                <input type="text" name="name" placeholder="Your Full Name" className=" w-full  input input-bordered border-purple-700 bg-black text-white " required /><br />
                                <input type="email" name="email" placeholder="Enter Email Address" className="w-full  mb-8 my-3 input input-bordered  border-purple-700 bg-black text-white " required /><br />

                                <textarea type="text" name="message" className="textarea w-full mb-4  border-purple-700 bg-black text-white  " placeholder="Your Message " required></textarea>
                                <input className="btn btn-active btn-primary mt-4 px-12 hover:bg-blue-600" type="submit" value="submit" />
                            </form>

                        </div>

                    </div>
                    <div className="lg:w-96 lg:h-96 lg:ml-10 ">
                        <h2 className='text-2xl  mb-4 text-white'>Get In Touch</h2>
                        <div className='flex  items-center '>
                            <MdEmail className='text-4xl text-white mr-4 bg-gray-900 p-1 rounded-lg'></MdEmail>
                            <p className='text-1xl lg:text-2xl font-semibold text-white'> nasimbillah269@gmail.com</p>

                        </div>
                        <div className='flex items-center mt-4'>
                            <FaMapMarkerAlt className='text-4xl text-white mr-4 bg-gray-900 p-1 rounded-lg'> </FaMapMarkerAlt>
                            <p className='text-1xl lg:text-2xl font-semibold text-white' > Rajshahi, Bangladesh</p>
                        </div>
                        <div className='flex items-center mt-4'>
                            <FaPhoneAlt className='text-4xl text-white mr-4 bg-gray-900 p-1 rounded-lg '></FaPhoneAlt>
                            <p className='text-1xl lg:text-2xl font-semibold text-white'>  +8801738476741</p>
                        </div>

                        <div className='flex mt-8'>
                            <a href="https://www.linkedin.com/in/nasim-billah-456a5321b/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className='text-4xl text-white animate-bounce mr-4 hover:bg-blue-600 hover:border-0  '></FaLinkedin>
                            </a>

                            <a href="https://www.facebook.com/mdnasim.billah.50" target="_blank" rel="noopener noreferrer">
                                <FaFacebookSquare className='text-4xl text-white mr-4 animate-bounce  hover:bg-blue-600 hover:border-none '></FaFacebookSquare>
                            </a>

                            <a href="https://github.com/nasimbillah269" target="_blank" rel="noopener noreferrer">
                                <FaGithubSquare className='text-4xl text-white  animate-bounce hover:bg-black hover:text-blue-600 hover:border-none '></FaGithubSquare>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;