import React from 'react';
import Navbar from './components/Navbar';
import { Hero, Experience, Education, Projects, Skills } from './components/sections';
import { personalInfo, experiences, education, projects, skills } from './data';
import { Mail } from 'lucide-react';

const App = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar personalInfo={personalInfo} />
            <Hero personalInfo={personalInfo} />
            <Experience experiences={experiences} />
            <Education education={education} />
            <Projects projects={projects} />
            <Skills skills={skills} />
            
            <section id="contact" className="py-20 bg-white px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        I'm always open to discussing new projects and opportunities.
                    </p>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        <Mail size={20} />
                        <span>Email Me</span>
                    </a>
                </div>
            </section>

            <footer className="bg-gray-800 text-white py-8 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;