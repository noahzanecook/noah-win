
import { motion } from 'framer-motion';
import ThreeScene from '../components/ThreeScene';
import Layout from '../components/Layout';
import { DecorativeCircle, DecorativeSquare } from '../components/DecorativeShapes';

const Background = () => {
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
              <h1 className="text-4xl font-bold mb-4">My Background</h1>
              <p className="text-xl text-gray-600 mb-6">
                A journey through my experiences and expertise.
              </p>
              <div className="mt-10 mb-16">
                <ThreeScene sceneType="torus" />
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="section-padding bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Professional Experience</h2>
            
            <div className="space-y-12">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2">placeholder intern - Company Name</h3>
                <p className="text-gray-500 mb-4">2020 - Present</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ultricies leo. 
                  Maecenas quis magna id magna condimentum venenatis. Fusce maximus velit quis facilisis scelerisque.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-2">placeholder Developer - Company Name</h3>
                <p className="text-gray-500 mb-4">2017 - 2020</p>
                <p>
                  Nullam vel ante vel metus semper gravida. Donec a tortor at mi semper ultricies. 
                  Suspendisse imperdiet tortor in arcu fermentum, vel vehicula magna blandit.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Education</h2>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">BS in Computer Science</h3>
              <p className="text-gray-500 mb-4">Georgia Institute of Technology, 2023 - 2027</p>
              <p>
                Proin maximus pharetra neque, vel fringilla orci facilisis ut. 
                Etiam pharetra arcu in eros maximus, ac scelerisque tellus ultricies.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Background;
