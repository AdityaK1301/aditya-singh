import {Languages, Frontend, Backend, AI, Libraries, Tools} from '../../assets/assets'
import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    return (
    <section id="about" className="min-h-screen flex 
    items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent text-center">
                About Me
            </h2>
            <p className="text-white font-stretch-semi-expanded mb-6 text-center"> 
                    AI/ML enthusiast with full-stack experience, 
                    passionate about building real-world solutions.
                </p>
            <div className="rounded-xl p-8 border-white/30 border hover:-translate-y-1 transition-all">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-blue-200">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {Backend.map((tech, key) => (
                                <span key={key} className='bg-gray-500/10 text-gray-400 
                                py-1 px-3 rounded-full text-sm hover:bg-gray-600 hover:text-white
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-blue-200">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {Frontend.map((tech, key) => (
                                <span key={key} className='bg-gray-500/10 text-gray-400 
                                py-1 px-3 rounded-full text-sm hover:bg-gray-600 hover:text-white
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-blue-200">Libraries and Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                            {Libraries.map((tech, key) => (
                                <span key={key} className='bg-gray-500/10 text-gray-400 
                                py-1 px-3 rounded-full text-sm hover:bg-gray-600 hover:text-white
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-blue-200">AI/ML</h3>
                        <div className="flex flex-wrap gap-2">
                            {AI.map((tech, key) => (
                                <span key={key} className='bg-gray-500/10 text-gray-400 
                                py-1 px-3 rounded-full text-sm hover:bg-gray-600 hover:text-white
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                <div className='p-6 rounded-xl border-white/10 border hoverL-translate-y-1 transition-all'>
                    <h3 className='text-xl font-bold mb-4 text-blue-200'>Education</h3>
                    <ul className='list-disc list-inside text-gray-300 space-y-2'>
                        <li>
                            <strong>B.Tech. in Computer Science Engineering</strong> <p className='font-extralight text-blue-200'> Bennett Univeristy (2021-2025)</p>
                        </li>
                        <li className='mt-4'>
                            <strong>CBSE Class XII</strong> <p className='font-extralight text-blue-200'>Bharti Public School (2020-2021)</p>
                        </li>
                    </ul>
                </div>
                <div className='p-6 rounded-xl border-white/10 border hoverL-translate-y-1 transition-all'>
                    <h3 className='text-xl font-bold mb-4 text-blue-200'>Work Experience</h3>
                    <div className='space-y-4 text-gray-300'>
                        <div>
                            <h4 className='font-semibold'>Software Intern at JetHat Cyber Security Pvt. Ltd. </h4> <p className='font-extralight text-blue-200'>(Dec 2025 - Present)</p>  
                        </div>

                        <div>
                            <h4 className='font-semibold'>AI Intern at Alexion Techno Pvt. Ltd. </h4> <p className='font-extralight text-blue-200'>(Sep 2025 - Dec 2025)</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    )
}