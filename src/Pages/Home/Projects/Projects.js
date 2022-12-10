import React from 'react';
import helthy from '../../../assets/images/helthy.PNG'
import laptop from '../../../assets/images/laptop.PNG'
import car from '../../../assets/images/car.PNG'
import quiz from '../../../assets/images/quiz.PNG'
import doctor from '../../../assets/images/doctor.PNG'
import webtech from '../../../assets/images/webtech.PNG'
import Project from './Project';

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: 'Reselle Laptop Bazar Website',
            image: laptop,
            description: "Resell laptop bazar mern Stack website. Added Home page Laptop Bazar beautiful banner design and navbar   The Category page is very interesting and features product cards. Booking button click   beautiful modal to open the page. And user product booking confirmation Email password based authentication and google sign in implementation The Project used technology  React, Firebase authentication, Express js, Mongodb, Jwt",
            liveSite: 'https://laptop-bazar-97a1e.web.app/',
            clientCode: 'https://github.com/nasimbillah269/laptop-bazar-client',
            serverCode: 'https://github.com/nasimbillah269/laptop-bazar-server'

        },
        {
            id: 2,
            name: 'Doctor Protal Website',
            image: doctor,
            description: "Doctor protal mern Stack website. Added Home page doctor porta; beautiful banner design and navbar   The appointment  page is very interesting and features appointment cards. Booking button click   beautiful modal to open the page. And user appointment  booking confirmation Email password based authentication and google sign in implementation The Project used technology  React, Firebase authentication, Express js, Mongodb, Jwt",
            liveSite: 'https://doctors-portal-e47f2.web.app/',
            clientCode: 'https://github.com/nasimbillah269/doctor-portal-client',
            serverCode: 'https://github.com/nasimbillah269/doctor-portal-server'

        },
        {
            id: 3,
            name: 'Web Tech E-Learing Website',
            image: webtech,
            description: "Web Technology E-Learing  mern Stack website. Added Beautiful Home page and course category and navbar section The Category page is very interesting and features course cards. Detail button click shows in course detail information. And download option added detail page Email password based authentication and google sign in implementation  The Project used technology React, Firebase authentication, Express js, Mongodb",
            liveSite: 'https://web-tect-e-learning.web.app/',
            clientCode: 'https://github.com/nasimbillah269/web-tech-e-learning-client',
            serverCode: 'https://github.com/nasimbillah269/web-tech-e-learning-server'


        },
        {
            id: 4,
            name: 'Genius Car Website',
            image: car,
            description: "Genius car mern Stack website. Added Home page Genius car beautiful banner design and navbar   The Service page is very interesting and features product cards. checkout button click   beautiful checkout to open the page. And user product orders. confirmation Email password based authentication and google sign in implementation. The Project used technology  React, Firebase authentication, React js, Tailwind css ",
            liveSite: 'https://genius-car-8badd.web.app/',
            clientCode: 'https://github.com/nasimbillah269/genius-car-client',
            serverCode: 'https://github.com/nasimbillah269/genius-car-server'

        },
        {
            id: 5,
            name: 'Special Helthy Club Website',
            image: helthy,
            description: "Special Helthy Club mern Stack website. Added Home page Laptop Bazar beautiful banner design and navbar   The Category page is very interesting and features product cards. Booking button click   beautiful modal to open the page. And user product booking confirmation Email password based authentication and google sign in implementation The Project used technology  React, Firebase authentication, Express js, Mongodb, Jwt",
            liveSite: 'https://scintillating-valkyrie-b25f90.netlify.app/',
            clientCode: 'https://github.com/nasimbillah269/ultra-active-club',
            serverCode: 'https://github.com/nasimbillah269/ultra-active-club'

        },
        {
            id: 6,
            name: 'Coding Quiz Website',
            image: quiz,
            description: "Coding quiz Website mern Stack website. Added Home page Laptop Bazar beautiful banner design and navbar   The Category page is very interesting and features product cards. Booking button click   beautiful modal to open the page. And user product booking confirmation Email password based authentication and google sign in implementation The Project used technology  React, Firebase authentication, Express js, Mongodb, Jwt",
            liveSite: 'https://imaginative-kataifi-1fa4b9.netlify.app/',
            clientCode: 'https://github.com/nasimbillah269/quiz-crackerz',
            serverCode: 'https://github.com/nasimbillah269/quiz-crackerz'


        },
    ]
    return (
        <div className='lg:px-12 bg-black mt-12'>
            <h1 className='text-3xl font-bold text-center mb-4 text-white'>My Projects</h1>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;