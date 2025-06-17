
import { MdEmail } from 'react-icons/md';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineGithub,AiOutlineTwitter, AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="mt-16 pb-16 px-3" id="Contact">
      <p  className="text-3xl font-semibold">Get in Touch</p>

      <div className='mt-8 mb-6 flex flex-row justify-center items-center'>
      <Link to="https://github.com/dasrupdip04" target="_black" className="rounded-lg bg-zinc-800 p-2 mx-2 text-2xl ring-zinc-500 hover:ring-2 transition-all duration-200">
      <AiOutlineGithub/>
      
      </Link>
      {/* <Link to="https://twitter.com/RohitMane0" target="_black" className="rounded-lg bg-zinc-800 p-2 mx-2 text-2xl ring-zinc-500 hover:ring-2 transition-all duration-200">
      <AiOutlineTwitter />
      </Link> */}

      <Link to="https://www.linkedin.com/in/rupdip-das-704940211/" target="_black" className="rounded-lg bg-zinc-800 p-2 mx-2 text-2xl ring-zinc-500 hover:ring-2 transition-all duration-200">
      <GrLinkedinOption/>
      </Link>

      <Link to="mailto:dasrupdip04@gmail.com" target="_black" className="rounded-lg bg-zinc-800 p-2 mx-2 text-2xl ring-zinc-500 hover:ring-2 transition-all duration-200">
      <MdEmail/>
      </Link>
      </div>

      <div className='flex flex-row justify-center items-center text-gray-400'>
        made with  ReactJS
      </div>
      <div className='flex flex-row justify-center text-gray-400'>
        © {new Date().getFullYear()} Rupdip Das
      </div>
    </div>
  )
}
