import React from 'react';


const Project = ({ project }) => {
    const { name, image, description, liveSite, clientCode, serverCode } = project;
    return (
        <div className="card w-96 border  border-purple-700  ">
            <figure><img className='p-5' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white ">{name}</h2>
                <p className='text-white '>{description.slice(0, 150)}...</p>
                <div className="card-actions ">
                    <a className='text-primary hover:text-blue-600' href={liveSite} target="_blank" >Live-site</a>
                    <a className=' text-primary hover:text-blue-600' href={clientCode} target="_blank" >Client-side-code</a>
                    <a className='text-primary hover:text-blue-600' href={serverCode} target="_blank" >Server-side-code</a>


                </div>
            </div>
        </div>
    );
};

export default Project;