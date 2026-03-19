import { Languages, Frontend, Backend, AI, Libraries, Tools } from '../../assets/assets'
import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-white bg-clip-text text-transparent text-center">
                        About Me
                    </h2>
                    
                    {/* IMPROVED: More impactful and professional introduction */}
                    <div className="text-center mb-10">
                        <p className="text-white text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                            Building the bridge between <span className="text-blue-300 font-semibold">complex AI models</span> and 
                            <span className="text-blue-300 font-semibold"> production-ready applications</span>. 
                            I'm a Computer Science graduate who turns cutting-edge ML research into real, 
                            functional products.
                        </p>
                    </div>
                    
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
                                <h3 className="text-xl font-bold mb-4 text-blue-200">Libraries & Frameworks</h3>
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
                        <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                            <h3 className='text-xl font-bold mb-4 text-blue-200'>Education</h3>
                            <ul className='list-disc list-inside text-gray-300 space-y-4'>
                                <li className='text-base'>
                                    <span className="font-semibold text-white">B.Tech. in Computer Science Engineering</span>
                                    <p className='text-blue-200/90 text-sm mt-1 ml-1'>Bennett University · 2021-2025</p>
                                </li>
                                <li className='text-base'>
                                    <span className="font-semibold text-white">CBSE Class XII</span>
                                    <p className='text-blue-200/90 text-sm mt-1 ml-1'>Bharti Public School · 2020-2021</p>
                                </li>
                            </ul>
                        </div>
                        
                        <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                            <h3 className='text-xl font-bold mb-4 text-blue-200'>Work Experience</h3>
                            <div className='space-y-5 text-gray-300'>
                                <div className="border-l-2 border-blue-500/30 pl-4">
                                    <h4 className='font-semibold text-white text-base'>Software Intern</h4>
                                    <p className='text-blue-200 text-sm'>JetHat Cyber Security Pvt. Ltd.</p>
                                    <p className='text-gray-400 text-xs mt-1'>Dec 2025 - Present</p>
                                </div>
                                
                                <div className="border-l-2 border-blue-500/30 pl-4">
                                    <h4 className='font-semibold text-white text-base'>AI Intern</h4>
                                    <p className='text-blue-200 text-sm'>Alexion Techno Pvt. Ltd.</p>
                                    <p className='text-gray-400 text-xs mt-1'>Sep 2025 - Nov 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                   
                    
                </div>
            </RevealOnScroll>
        </section>
    )
}