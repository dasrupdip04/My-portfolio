import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function About() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/myresume.pdf'; 
    link.download = 'Rupdip_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    
      <section className="my-8 flex flex-row items-center justify-between px-3">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold">Rupdip Das.</h1>
          <p className="mt-2 text-lg">Full Stack AI Developer</p>
          <p className="mt-4 text-gray-400">Full Stack GenAI Developer skilled in integrating AI into web apps, building RAG systems, and creating memory-aware agentic AI tools. Experienced in delivering scalable, real-world solutions using React, Node.js, Express and modern AI frameworks.</p>
          <a
            href="https://drive.google.com/file/d/1HvYqkhIDYo1B3LznYw2EaZDugfTSR5Mm/view"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded bg-purple-800 px-4 py-2 text-white hover:bg-purple-950"
          >
            Resume
            <AiOutlineArrowRight />
          </a>



          
        </div>
        <div className=" md:block">
          <img className="h-[200px] w-[200px] object-cover rounded-full" src="https://imgur.com/8MkOaWs.jpg" alt="profilephoto2" />
        </div>
      </section>
    
  );
}
