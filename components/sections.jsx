import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';

export const Hero = ({ personalInfo }) => (
    <section id="about" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center">
                <div className="mb-8 relative">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg profile-image">
                        <img 
                            src="/api/placeholder/192/192" 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">{personalInfo.name}</h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 text-center">{personalInfo.title}</p>
                
                <div className="flex justify-center space-x-4 mb-12">
                    {/* Social Links */}
                    <SocialLink href={personalInfo.github} icon={<ExternalLink size={24} />} text="GitHub" />
                    <SocialLink href={personalInfo.linkedin} icon={<ExternalLink size={24} />} text="LinkedIn" />
                    <SocialLink href={`mailto:${personalInfo.email}`} icon={<Mail size={24} />} text="Email" />
                </div>
            </div>
        </div>
    </section>
);

export const Experience = ({ experiences }) => (
    <section id="experience" className="py-20 bg-white px-4 section-transition">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <TimelineItem key={index} data={exp} type="experience" />
                ))}
            </div>
        </div>
    </section>
);

export const Education = ({ education }) => (
    <section id="education" className="py-20 bg-gray-50 px-4 section-transition">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
            <div className="space-y-8">
                {education.map((edu, index) => (
                    <TimelineItem key={index} data={edu} type="education" />
                ))}
            </div>
        </div>
    </section>
);

export const Projects = ({ projects }) => (
    <section id="projects" className="py-20 bg-white px-4 section-transition">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    </section>
);

export const Skills = ({ skills }) => (
    <section id="skills" className="py-20 bg-gray-50 px-4 section-transition">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-tag bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 hover:shadow-md">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    </section>
);

// Helper Components
const SocialLink = ({ href, icon, text }) => (
    <a 
        href={href} 
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        target="_blank"
        rel="noopener noreferrer"
    >
        {icon}
        <span>{text}</span>
    </a>
);

const TimelineItem = ({ data, type }) => (
    <div className="timeline-item border-l-4 border-blue-500 pl-4 ml-4">
        <h3 className="text-xl font-semibold">
            {type === 'experience' ? data.position : data.degree}
        </h3>
        <p className="text-gray-600 mb-2">
            {type === 'experience' ? data.company : data.school} | {data.duration}
        </p>
        <p className="text-gray-700">{data.description}</p>
    </div>
);

const ProjectCard = ({ project }) => (
    <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {tech}
                </span>
            ))}
        </div>
    </div>
);