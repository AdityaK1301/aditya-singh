import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex flex-col justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-all">
                    <h3 className="text-xl font-bold mb-2">LLM-Vision-OCR</h3>
                    <p className="text-gray-100 m-4 font-extralight">
                        This project sends an image to the Groq chat/completions 
                        endpoint with a prompt to extract the text, parses the returned 
                        text, and stores that result both as JSON and as Excel file.
                    </p>
                    <div className="flex flex-wrap gap-2- mb-4">
                        {["Python", "Flask", "REST APIs", "Streamlit", "Pandas"].map((tech, key) => (
                            <span
                            key={key}
                            className="bg-gray-500/10 text-gray-400 
                                py-1 px-3 rounded-full text-sm hover:bg-gray-600 hover:text-white
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/AdityaK1301/LLM-Vision-OCR" className="text-blue-300 hover:text-amber-50 transition-colors my-4 mb-2">View Project {'-->'} </a>
                    </div>
                </div>
                
                <div className="p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-all">
                    <h3 className="text-xl font-bold mb-2">LangChain RAG Chatbot</h3>
                    <p className="text-gray-100 m-4 font-extralight">
                        Advanced Retrieval-Augmented Generation chatbot built with LangChain, providing 
                        intelligent question-answering capabilities with contextual understanding.
                    </p>
                    <div className="flex flex-wrap gap-2- mb-4">
                        {["Python", "LangChain", "RAG", "Vector DB", "LLMs"].map((tech, key) => (
                            <span
                            key={key}
                            className="bg-gray-500/10 text-gray-400 
                                py-1 px-3 rounded-full text-sm hover:bg-gray-600 hover:text-white
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/AdityaK1301/LangChain-RAG-Chatbot" className="text-blue-300 hover:text-amber-50 transition-colors my-4 mb-2">View Project {'-->'} </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-all">
                    <h3 className="text-xl font-bold mb-2">EDUVISION</h3>
                    <p className="text-gray-100 m-4 font-extralight">
                        Developed an intelligent career guidance platform that analyzes 
                        resumes and provides personalized job role recommendations 
                        and learning path suggestions.
                    </p>
                    <div className="flex flex-wrap gap-2- mb-4">
                        {["Python", "SBERT", "TF-IDF", "Streamlit", "NLP"].map((tech, key) => (
                            <span
                            key={key}
                            className="bg-gray-500/10 text-gray-400 
                                py-1 px-3 rounded-full text-sm hover:bg-gray-600 hover:text-white
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/AdityaK1301/EDUVISION" className="text-blue-300 hover:text-amber-50 transition-colors my-4 mb-2">View Project {'-->'} </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Sign Language Detection</h3>
                    <p className="text-gray-100 m-4 font-extralight">
                        Real-time sign language recognition system using 
                        computer vision, deep learning and pre-trained object 
                        detection model for gesture detection and classification.
                    </p>
                    <div className="flex flex-wrap gap-2- mb-4">
                        {["Python", "Tensorflow", "OpenCV", "Computer Vision"].map((tech, key) => (
                            <span
                            key={key}
                            className="bg-gray-500/10 text-gray-400 
                                py-1 px-3 rounded-full text-sm hover:bg-gray-600 hover:text-white
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/AdityaK1301/Sign-Language-Detection" className="text-blue-300 hover:text-amber-50 transition-colors my-4 mb-2">View Project {'-->'} </a>
                    </div>
                </div>

            </div>
        </div>
        </RevealOnScroll>
    </section>
}