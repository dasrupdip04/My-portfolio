import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function About() {
  return (
    
      <section className="my-8 flex flex-row items-center justify-between px-3">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold">Rupdip Das.</h1>
          <p className="mt-2 text-lg">Full Stack AI Developer</p>
          <p className="mt-4 text-gray-400">Full Stack GenAI Developer skilled in integrating AI into web apps, building RAG systems, and creating memory-aware agentic AI tools. Experienced in delivering scalable, real-world solutions using React, Node.js, Express and modern AI frameworks.</p>
          
        </div>
        <div className=" md:block">
          <img className="h-[200px] w-[200px] object-cover rounded-full" src="https://imgur.com/undefined.jpg" alt="profilephoto2" />
        </div>
      </section>
    
  );
}