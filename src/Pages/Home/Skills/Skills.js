import React from 'react';
import html from '../../../assets/images/html.png'
import css from '../../../assets/images/css.png'
import javascript from '../../../assets/images/js.png'
import bootstarp from '../../../assets/images/bootstrap.png'
import tailwind from '../../../assets/images/tailwindcss.png'
import firebase from '../../../assets/images/firebase.png'
import github1 from '../../../assets/images/github1.png'
import mongodb from '../../../assets/images/mongodb.png'
import react from '../../../assets/images/react.png'
import node from '../../../assets/images/node.png'
import visual from '../../../assets/images/visual-studio.png'
import figma from '../../../assets/images/figma.png'
import Skill from './Skill';
const Skills = () => {
    const skills = [
        {
            id: 1,
            name: 'HTML',
            image: html
        },
        {
            id: 2,
            name: 'CSS',
            image: css
        },
        {
            id: 3,
            name: 'Javascript',
            image: javascript
        },
        {
            id: 4,
            name: 'Bootstarp',
            image: bootstarp
        },
        {
            id: 5,
            name: 'Tailwind css',
            image: tailwind
        },
        {
            id: 6,
            name: 'Firebase',
            image: firebase
        },
        {
            id: 7,
            name: 'Github',
            image: github1
        },
        {
            id: 8,
            name: 'MongoDB',
            image: mongodb
        },
        {
            id: 9,
            name: 'React . Js',
            image: react
        },
        {
            id: 10,
            name: 'Node . Js',
            image: node
        },
        {
            id: 11,
            name: 'Visual Studio',
            image: visual
        },
        {
            id: 12,
            name: 'Figma',
            image: figma
        },

    ]
    return (
        <div className='container mx-auto bg-black mt-12  p-12'>
            <h2 className='text-3xl font-bold text-center mb-4 text-white'>My Skills</h2>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    skills.map(skill => <Skill
                        key={skill.id}
                        skill={skill}
                    ></Skill>)
                }
            </div>
        </div>
    );
};

export default Skills;