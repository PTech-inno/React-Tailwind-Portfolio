import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Saas Landing Page",
    description: "A beutiful landing page using React and Tailwind",
    image: "/Projects/project1.png",
    tags: ["React", "Tailwind", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Orbit analytics dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/Projects/project2.png",
    tags: ["Node.js", "D3.js", "React"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full featured e-commerce platform with user authentication and payment processing.",
    image: "/Projects/project3.png",
    tags: ["React", "Node.js", "Paystack"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "} Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">Here are some of our recent projects. Each project was carefully crafted with attention to detail, performace, and user experience.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {projects.map((project, key) => (
          <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
            <div className="h-48 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
            </div>
            <div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag)=> (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-forground border">{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-3 p-2">
                <a target="_blank" href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20}/></a>
                <a target="_blank" href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/></a>
              </div>
            </div>
            </div>
          </div>

        ))}

        </div>
        <div className="text-center mt-12 ">
          <a target="_blank" href="https://github.com/man-o-man" className="cosmic-button w-fit flex items-center mx-auto gap-2">Checkout my Github <ArrowRight size={16}/></a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
