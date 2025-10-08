import React from "react";
import Title from "../components/Title";
import { projects } from "../utils/constant";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="">
      <div className="container">
        <Title
          title={"my"}
          highlight={"projects"}
          subtitle={"Bringing ideas to live through code"}
        />
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id}>
              <img
                className="rounded-tr-2xl rounded-tl-2xl"
                src={project.image}
                alt={project.title}
              />
              <div className="bg-gray-900 rounded-br-2xl rounded-bl-2xl px-4 py-6">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="line-clamp-3 mb-6">{project.description}</p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.stack.map((tech) => {
                    <span
                      key={tech}
                      className="px-2 py-1g bg-gray-800 text-white rounded-full mb-2"
                    >
                      {tech}
                    </span>;
                  })}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="px-6 py-2 flex items-center gap-2 capitalize font-semibold bg-gradient-to-r from-indigo-700 to-purple-600 text-white rounded-md hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-600 duration-500 hover:transition-transform hover:-translate-y-1 ease-in-out"
                  >
                    <ExternalLink size={20} />
                    <p className="font-semibold">View</p>
                  </a>
                  
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    className="px-6 py-2 flex items-center gap-2 capitalize font-semibold bg-gray-600 text-white rounded-md duration-500 hover:transition-transform hover:-translate-y-1 ease-in-out"
                  >
                    <Github size={20} />
                    <p className="font-semibold">Source</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
