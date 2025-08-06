import React from 'react';
import { personalInfo, projectsData } from '../data/Data';
import AsciiArt from './AsciiArt';
import InfoLine from './InfoLine';

const NeofetchDisplay = () => {
    const { user, host, ...info } = personalInfo;

    return (
        <div className="bg-[#111] border border-gray-800 p-4 sm:p-8 w-full max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-8">
                <div className="flex-shrink-0 self-center sm:self-start">
                    <AsciiArt />
                </div>
                <div className="flex-grow">
                    <div className="mb-4">
                        <span className="text-cyan-400 font-bold">{user}</span>
                        <span className="text-gray-500">@</span>
                        <span className="text-cyan-400 font-bold">{host}</span>
                    </div>
                    <div className="space-y-1 text-sm">
                        <InfoLine label="name" value={info.name} />
                        <InfoLine label="university" value={info.university} />
                        <InfoLine label="major" value={info.major} />
                        <InfoLine label="minor" value={info.minor} />
                        <InfoLine label="status" value={info.status} />
                        <div className="pt-2"><span className="text-gray-500">--------------------</span></div>
                        <InfoLine label="email" value={info.contact.email} isLink={true} href={`mailto:${info.contact.email}`} />
                        <InfoLine label="github" value={info.contact.github} isLink={true} href={info.contact.github}/>
                        <InfoLine label="linkedin" value={info.contact.linkedin} isLink={true} href={info.contact.linkedin}/>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <p className="text-gray-500 font-mono text-sm">
                    <span className="text-cyan-400">~/{user}/projects</span> $ ls -l
                </p>
                <div className="mt-2 text-sm font-mono space-y-2">
                    {projectsData.map((project, index) => (
                        <a href={project.link} key={index} target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row gap-x-4 hover:bg-gray-800/50 p-1">
                           <span className="text-green-500">{project.permissions}</span>
                           <span className="text-gray-400 flex-shrink-0">{project.owner.padEnd(8)}</span>
                           <span className="text-cyan-400 font-bold flex-grow">{project.name}</span>
                           <span className="text-gray-500 hidden md:inline">// {project.description}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NeofetchDisplay;