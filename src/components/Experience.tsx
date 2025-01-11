import React from 'react';

const Experience: React.FC = () => {
    const experiences = [
        {
            title: 'Software Engineer',
            company: 'Tech Company A',
            duration: 'June 2021 - Present',
        },
        {
            title: 'Web Developer',
            company: 'Web Agency B',
            duration: 'January 2020 - May 2021',
        },
        {
            title: 'Intern',
            company: 'Startup C',
            duration: 'June 2019 - December 2019',
        },
    ];

    return (
        <div className="experience">
            <h2>Experience</h2>
            <ul>
                {experiences.map((exp, index) => (
                    <li key={index}>
                        <h3>{exp.title}</h3>
                        <p>{exp.company}</p>
                        <p>{exp.duration}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;