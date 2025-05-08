import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { DecorativeCircle, DecorativeSquare } from '../components/DecorativeShapes';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Haymakers",
      description: "A 3D browser fighting game built with Three.js and Rapier.rs",
      tags: ["React", "Three.js", "Node.js", "Rapier.rs"],
      link: "https://github.com/noahzanecook/haymakers",
      image: "/src/assets/haymakers.png"
    },
    {
      id: 2,
      title: "SpecOps.tech",
      description: "An interactive dashboard with data visualization",
      tags: ["TypeScript", "D3.js", "Firebase"],
      link: "#",
      image: "/src/assets/project2.png"
    },
    {
      id: 3,
      title: "Flow AI",
      description: "A mobile-first e-commerce platform",
      tags: ["React Native", "GraphQL", "Node.js"],
      link: "#",
      image: "/src/assets/project3.png"
    },
    {
      id: 4,
      title: "Home Lab",
      description: "A modern web application built with React and Three.js",
      tags: ["React", "Three.js", "Tailwind"],
      link: "#",
      image: "/src/assets/project4.png"
    },
    {
      id: 5,
      title: "Ubiquity Browser",
      description: "A modern web application built with React and Three.js",
      tags: ["React", "Three.js", "Tailwind"],
      link: "#",
      image: "/src/assets/project5.png"
    },
    {
      id: 6,
      title: "Old CS Mods",
      description: "A modern web application built with React and Three.js",
      tags: ["React", "Three.js", "Tailwind"],
      link: "#",
      image: "/src/assets/project6.png"
    }
  ];
  return (
    <Layout>
      <div className="relative overflow-hidden">
        <DecorativeCircle />
        <DecorativeSquare />
        
        {/* Header */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-['Barlow'] mb-4">My Projects</h1>
              <p className="text-xl text-gray-600 mb-6">
                A selection of my recent work and creative experiments.
              </p>
            </motion.div>
            {/* horizontal line */}
            <div className="w-full h-1 bg-gray-200 my-8"></div>
          </div>
        </section>
        {/* negative margin */}
        <div className="-mt-32"></div>
        
        {/* Projects Grid */}
        <section className="section-padding bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="h-40 bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://placehold.co/600x400?text=Project+Image';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-secondary rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">View Project</Button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
