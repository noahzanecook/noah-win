
import { motion } from 'framer-motion';
import ThreeScene from '../components/ThreeScene';
import Layout from '../components/Layout';
import { DecorativeCircle, DecorativeSquare } from '../components/DecorativeShapes';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A modern web application built with React and Three.js",
      tags: ["React", "Three.js", "Tailwind"],
      link: "#"
    },
    {
      id: 2,
      title: "Project Two",
      description: "An interactive dashboard with data visualization",
      tags: ["TypeScript", "D3.js", "Firebase"],
      link: "#"
    },
    {
      id: 3,
      title: "Project Three",
      description: "A mobile-first e-commerce platform",
      tags: ["React Native", "GraphQL", "Node.js"],
      link: "#"
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
              <h1 className="text-4xl font-bold mb-4">My Projects</h1>
              <p className="text-xl text-gray-600 mb-6">
                A selection of my recent work and creative experiments.
              </p>
              <div className="mt-10 mb-16">
                <ThreeScene sceneType="cube" />
              </div>
            </motion.div>
          </div>
        </section>
        
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
                  <div className="h-40 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500 text-sm">Project Image Placeholder</p>
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
                    <Button variant="outline" className="w-full">View Project</Button>
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
