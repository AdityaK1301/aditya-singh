import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {
    return (
    <section 
    id="home" 
    className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl 
            font-bold mb-6 bg-gradient-to-r from-gray-400 to-amber-50 bg-clip-text text-transparent leading-right">
                Hi, I'm Aditya
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I'm a Computer Science graduate specializing in AI/ML with proficiency in Python
                and C++, experience in Generative AI along with full-stack skills.
            </p>
            <div className="flex justify-center space-x-4">

                <a href="#projects" className="bg-gray-600 text-white py-3 
                px-6 rounded font-medium transition relative overflow-hidden 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                    View Projects
                </a>
                
                <a href="#contact" className="border border-gray-500/50 text-gray-100 
                py-3 px-6 rounded font-medium transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-gray-500/10">
                    Contact Me
                </a>

            </div>
        </div>
        </RevealOnScroll>
    </section>
    )
}