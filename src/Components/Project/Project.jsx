import { Link } from "react-router-dom";
import { ProjectDeatils } from "./ProjectDetails";
import React from 'react';
import YouTube from 'react-youtube';
import { otherproj } from "./othproj";

export default function Project() {
  return (
    <div>
        <section className="my-16 px-3" id="Projects">
      <p className="text-3xl font-semibold text-white border-b-5 border-slate-500 inline-block pb-1 tracking-wide">Featured Projects</p>

      {ProjectDeatils?.map(project => (
        <article className="group my-10" key={project.id}>
          <div className="flex flex-col justify-center relative">

            <div className="transition-all duration-300 flex flex-col space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 md:max-w-3xl lg:max-w-4xl max-w-xl mx-auto border border-white bg-white">
              
              <div className="w-full bg-white grid place-items-center aspect-video">
                <YouTube 
                  videoId={project.videoId} 
                  className="rounded-xl w-full h-full"
                  opts={{
                    width: '100%',
                    height: '100%',
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                />
              </div>

              <div className="bg-white flex flex-col p-3">
                <div>
                  <h1 className="text-gray-800 text-xl md:text-3xl font-semibold">{project.title}</h1>
                  <p className="md:text-lg text-gray-500 text-base mt-2">
                    <span className="text-m font-bold text-gray-800">Tech Stack:</span> {project.techStack}
                  </p>
                  <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
  <button className="px-4 py-2 rounded-lg bg-purple-800 text-white hover:bg-purple-950 transition">
    Source Code
  </button>
</a>

                </div>
              </div>

            </div>
          </div>
        </article>
      ))}
    </section>
    <section className="my-16 px-3" id="Projects">
  

  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
    {otherproj?.map(project => (
      <article className="group" key={project.id}>
        <div className="flex flex-col justify-center relative">

          <div className="flex flex-row absolute z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] 
  opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-150">
            <Link
              target="_blank"
              to={project.livelink}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-2xl font-semibold uppercase outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
            >
              Live
            </Link>
            <Link
              target="_blank"
              to={project.sourceLink}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-2xl font-semibold uppercase outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
            >
              Source
            </Link>
          </div>

          <div className="peer-hover:blur-sm group-hover:blur-sm transition-all duration-300 flex flex-col space-y-3 rounded-xl shadow-lg p-3 border border-white bg-white">
            <div className="w-full bg-white grid place-items-center h-11/12">
              <img className="rounded-xl object-cover" src={project.img} alt={project.title} />
            </div>
            <div className="bg-white flex flex-col p-3">
              <h1 className="text-gray-800 text-xl md:text-2xl font-semibold">{project.title}</h1>
              {/* <p className="md:text-lg text-gray-500 text-base mt-2">
                <span className="text-m font-bold text-gray-800">Tech Stack:</span> {project.techStack}
              </p> */}
            </div>
          </div>

        </div>
      </article>
    ))}
  </div>
</section>

    </div>
  )
}
