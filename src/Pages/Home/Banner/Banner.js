import React from 'react';
import image from '../../../assets/images/nasim.png'
import resume from '../../../assets/images/Nasim Billah Resume (5).pdf'
import { TypeAnimation } from 'react-type-animation';



const Banner = () => {
    return (
        <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row-reverse bg-black p-12">
                <img src={image} alt='' className="lg:w-96 lg:h-96" />
                <div className="lg:w-1/2">
                    <h1 className='text-white text-2xl font-semibold mb-3'>Hello I'm...</h1>
                    <p><span className="text-4xl font-bold mb-6 text-primary"> MD Nasim Billah</span><br /></p>
                    <p className=' mt-4'><span className='text-2xl text-white font-bold'>
                        I'm A</span>
                        <TypeAnimation className='text-white'
                            sequence={[
                                'Front End Developer_',
                                1000, // Waits 1s
                                'Mern Stack Developer_', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                'Web Programmer', // Types 'Three' without deleting 'Two'

                                // () => {
                                //     console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                // }
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '2em', }}
                        />
                    </p>
                    <p className=' font-semibold text-white'>
                        A tech-enthusiastic person & web desinger/developer who
                        loves to design & develop websites. I always love to learn
                        something new & try to share the knowledge that I know. and I'm student diploma computer engennering </p>
                    <a href={resume} download  >

                        <button className="btn btn-active btn-primary mt-4 px-12 hover:bg-blue-600 animate-bounce ">Download Resume</button>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Banner;