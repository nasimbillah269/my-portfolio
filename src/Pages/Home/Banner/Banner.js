import React from 'react';
import image from '../../../assets/images/nasim.png'
import resume from '../../../assets/images/Nasim Billah Resume (5).pdf'



const Banner = () => {
    return (
        <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row-reverse bg-black p-12">
                <img src={image} alt='' className="lg:w-96 lg:h-96" />
                <div className="lg:w-1/2">
                    <h1 className='text-white text-2xl font-semibold mb-3'>Hello I'm...</h1>
                    <p><span className="text-5xl font-bold mb-6 text-primary"> MD Nasim Billah</span><br /></p>
                    <p className=' mt-4'><span className='text-2xl text-white font-bold'>I am Frontend Web Developer_</span><br /></p>
                    <p className=' font-semibold text-white'>
                        A tech-enthusiastic person & web desinger/developer who
                        loves to design & develop websites. I always love to learn
                        something new & try to share the knowledge that I know. and I'm student diploma computer engennering </p>
                    <a href={resume} download  >

                        <button className="btn btn-active btn-primary mt-4 px-12 hover:bg-blue-600">Download Resume</button>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Banner;