import { BsArrowRightShort } from 'react-icons/bs';


function Skills() {
  return (
    <section className='my-16 px-3' id='Skills'>
      <p className='text-3xl font-semibold text-white border-b-5 border-slate-500 inline-block pb-1 tracking-wide '>Skills & Uses</p>
      <div className='text-md md:text-xl my-8 flex flex-col'>
      <p className='flex flex-row flex-wrap border-b-[0.1px] py-1 border-gray-500 text-slate-300 items-center' >
          <BsArrowRightShort className='w-8 h-8'/>
          <span className='font-semibold text-white'>Javascript, Python, C++</span>
          &nbsp;as my main languages
        </p>
        <p className='flex flex-row flex-wrap border-b-[0.1px] py-1 border-gray-500 text-slate-300 items-center' >
          <BsArrowRightShort className='w-8 h-8'/>
          <span className='font-semibold text-white'> React.js, Tailwind CSS, HTML, CSS3, Bootstrap</span>
          &nbsp;as my Frontend Tools
        </p>
        
        
         <p className='flex flex-row flex-wrap border-b-[0.1px] py-1 border-gray-500 text-slate-300 items-center' >
          <BsArrowRightShort className='w-8 h-8'/>
          <span className='font-semibold text-white'>ExpressJs, NodeJs, Mongoose, MongoDb, JWT authentication, Websockets...</span>
          &nbsp;as my Backend Tools
        </p>
        <p className='flex flex-row flex-wrap border-b-[0.1px] py-1 border-gray-500 text-slate-300 items-center' >
          <span><BsArrowRightShort className='w-8 h-8'/></span><span className='font-semibold text-white'>LangChain, LangGraph, Hugging Face Transformers, Memory-aware AI Agents, RAG Pipelines, Tool Binding, LLM as Judge, Vector and Graph Embeddings(Qdrant, Neo4j)
          </span>
          &nbsp;as my GenAI and AI system tools
        </p>
        
      </div>
      <p className='text-lg text-slate-300'>...more skills include <span className='text-white font-semibold'>Git, WebSockets, Data Structures and Algorithms, OOP, Problem solving
      </span></p>
    </section>
  )
}

export default Skills