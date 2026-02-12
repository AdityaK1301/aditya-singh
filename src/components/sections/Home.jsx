import { RevealOnScroll } from "../RevealOnScroll"
import { useState, useEffect } from "react"
import profileImage from '../../assets/aditya.jpg'

export const Home = () => {
    const [text, setText] = useState("")
    const fullText = "Hi, I'm Aditya"
    
    useEffect(()=>{
        let index = 0
        const interval = setInterval(()=>{
            setText(fullText.substring(0, index))
            index++;
            if (index > fullText.length) {
                clearInterval(interval)
            }
        }, 100)
        return ()=> clearInterval(interval)
    },[])

    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative"
        >
            <div className="w-full max-w-4xl xl:max-w-5xl mx-auto px-6 md:px-8">
                <RevealOnScroll>
                    {/* Balanced layout */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16">
                        
                        {/* Image - REDUCED SIZE (purple highlighted part) */}
                        <div className="flex-shrink-0 lg:order-1 w-full lg:w-auto flex justify-center">
                            <div className="relative">
                                {/* Glow effect - significantly reduced */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-amber-50 blur-xl opacity-20"></div>
                                {/* Image container - smaller */}
                                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gray-600/30 shadow-lg">
                                    <img 
                                        src={profileImage} 
                                        alt="Aditya Singh"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center lg:text-left lg:order-2 w-full max-w-2xl">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 
                                font-bold mb-2 bg-gradient-to-r from-blue-400 to-amber-50 
                                bg-clip-text text-transparent leading-tight">
                                {text}
                            </h1>
                            
                            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 font-light">
                                Computer Science Graduate | AI/ML 
                            </h2>
                            
                            <p className="text-gray-400 text-base sm:text-lg md:text-xl 
                                mb-5 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                I specialize in Generative AI, building systems that don't just analyze data—they create;
                                end-to-end solutions; that are as functional as they are innovative.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
                                <a href="#projects" 
                                    className="bg-blue-600 text-white py-2.5 px-7 rounded-md font-medium text-base sm:text-lg
                                    transition-all duration-300 hover:-translate-y-0.5 
                                    hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-center"
                                >
                                    View Projects
                                </a>
                                
                                <a href="#contact" 
                                    className="border border-blue-500/50 text-gray-100 
                                    py-2.5 px-7 rounded-md font-medium text-base sm:text-lg
                                    transition-all duration-200 hover:-translate-y-0.5 
                                    hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                                    hover:bg-blue-500/10 text-center"
                                >
                                    Contact Me
                                </a>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    )
}