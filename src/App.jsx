
import About from './Components/About'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Header from './Components/Header'
import Project from './Components/Project/Project'
import Skills from './Components/Skills'
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
   <div className='px-4 xl:px-72 lg:px-48 sm:px-8 md:px-24 text-gray-200  flex-col items-center justify-center '>
    
    
    <Header/>
    <main>
    <About/>
    <Skills/>
    <Experience />
    <Project/>
    <Contact/>
    <Analytics />
    </main>
    
   </div>
  )
}

export default App