import { Link } from "react-router-dom";
import { ProjectDeatils } from "./ProjectDetails";
import React from 'react';
import YouTube from 'react-youtube';

export default function Project() {
  return (
    <section className="my-16 px-3" id="Projects">
      <p className="text-3xl font-semibold text-white">Featured Projects</p>

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
                </div>
              </div>

            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
