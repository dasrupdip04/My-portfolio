import { BsArrowRightShort } from 'react-icons/bs';

function Experience() {
  return (
    <section className='my-16 px-3' id='Experience'>
      <p className='text-3xl font-semibold text-slate-200 border-b-5 border-slate-500 inline-block pb-1 tracking-wide'>
        Experience
      </p>
      <div className='text-md md:text-xl my-8 flex flex-col'>
        <div className='flex flex-row flex-wrap justify-between items-center border-b-[0.1px] py-1 border-gray-500 text-slate-300'>
          <div className='flex items-center flex-wrap gap-2'>
            <BsArrowRightShort className='w-8 h-8' />
            <span className='font-semibold text-white'>
              AI Developer Intern <span className='text-purple-400 text-2xl' > @ Debales AI</span>
            </span>
            <span className='text-xs border border-slate-500 text-slate-400 px-2 py-[2px] rounded-full'>
              Remote
            </span>
          </div>
          <span className='text-sm text-slate-400 md:text-base'>April 2025 – Present</span>
        </div>
        <ul className='list-disc list-inside text-slate-300 pl-10 mt-2 space-y-1'>
          <li>Built GenAI chatbots for eCommerce brands to assist in product discovery.</li>
          <li>Revamped client weekly report automation with LangGraph and follow-up email flows.</li>
          <li>Boosted chatbot response efficiency by 20–30% by introducing summarization.</li>
          <li>Created robust RAG pipelines with batching for scraping and embeddings.</li>
          <li>Resolved 10+ production bugs and enhanced token tracking infrastructure.</li>
        </ul>
      </div>
      <div className='text-md md:text-xl my-8 flex flex-col'>
        <div className='flex flex-row flex-wrap justify-between items-center border-b-[0.1px] py-1 border-gray-500 text-slate-300'>
          <div className='flex items-center flex-wrap gap-2'>
            <BsArrowRightShort className='w-8 h-8' />
            <span className='font-semibold text-white'>
              ML Research Intern<span className='text-purple-400 text-2xl' > @Indian Statistical Institute, Kolkata</span>
            </span>
            <span className='text-xs border border-slate-500 text-slate-400 px-2 py-[2px] rounded-full'>
              Hybrid
            </span>
          </div>
          <span className='text-sm text-slate-400 md:text-base'>June 2025 – Present</span>
        </div>
        <ul className=' text-slate-300 pl-14 mt-2 space-y-1 list-disc list-outside'>
          <li>Fine-tuning multiple small language models (SLMs) including TinyLlama, Mistral, and Phi-2 on domain-specific datasets.</li>
          <li>Designed models for advanced query decomposition, logical reasoning, and fact-checking capabilities to support robust downstream tasks.</li>
          <li>Built an ensemble to leverage the strengths of multiple fine-tuned SLMs.</li>
          <li>Further goals include reducing hallucination in model outputs.</li>
          <li>Also working toward multi-objective optimization to find ideal trade-offs across models using genetic algorithms.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
