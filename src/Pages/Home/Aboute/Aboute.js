import React from 'react';
import image from '../../../assets/images/nasim.png'
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
const Aboute = () => {
    return (
        <div className=' mt-12  w-full '>
            <h1 className='text-3xl font-bold text-white text-center'>About  Me</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse p-12">
                    <div className="lg:w-1/2 lg:ml-20">
                        <h1 className='text-white text-3xl font-semibold mb-3'>Hi, I'm MD Nasim Billah</h1>
                        <p><span className="text-1xl font-semibold  text-white"> I'm a Junior Front-end Web Developer from Naogaon, Bangladesh. I completed Diploma In Engineering in Computer Technology from Rajshahi Polytechnic Institute. An enthusiast of technology always enjoys working with programming & web technologies.</span><br /></p>
                        <p className=' mt-4'><span className='text-1xl text-white font-semibold'>Currently, I have a good understanding of Front-end Web Development. Also, I am focusing on learning MERN Stack web development & try to implement it in building projects. </span><br /></p>
                        <p className=' font-semibold text-white mt-4'>
                            My experience is adept in all
                            stages of junior Front-end web development. Knowledgeable in a user interface have a positive outlook and
                            always willing to learn new traits. I work well both independently and as part of a team.
                        </p>
                        <div className='flex mt-8'>
                            <a href="https://www.linkedin.com/in/nasim-billah-456a5321b/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className='text-4xl text-white mr-4 hover:bg-blue-600 hover:border-0  '></FaLinkedin>
                            </a>

                            <a href="https://www.facebook.com/mdnasim.billah.50" target="_blank" rel="noopener noreferrer">
                                <FaFacebookSquare className='text-4xl text-white mr-4  hover:bg-blue-600 hover:border-none '></FaFacebookSquare>
                            </a>

                            <a href="https://github.com/nasimbillah269" target="_blank" rel="noopener noreferrer">
                                <FaGithubSquare className='text-4xl text-white  hover:bg-black hover:text-blue-600 hover:border-none '></FaGithubSquare>
                            </a>

                        </div>
                    </div>

                    <img src={image} alt='' className="lg:w-96 lg:h-96" />
                </div>
            </div>
        </div>
    );
};

export default Aboute;