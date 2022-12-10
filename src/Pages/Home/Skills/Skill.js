import React from 'react';

const Skill = ({ skill }) => {
    const { name, image } = skill;
    return (
        <div className="card p-5 border border-purple-700 ">
            <figure >
                <img src={image} alt="skill" className=" w-20" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-white">{name}</h2>
            </div>
        </div>
    );
};

export default Skill;