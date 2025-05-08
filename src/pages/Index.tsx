import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const Index = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <Layout>
      <div className="relative h-screen w-full -mt-16">
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          {/* Center text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            transition={{ duration: 0.6 }}
            className="md:w-2/4 w-full text-center"
          >
            <h1 className="text-6xl mb-8 font-['Barlow']">Welcome</h1>
            <p className="text-xl mb-10 mx-auto font-['Arial']">
              My name is Noah Cook, and I am a life-long technology enthusiast and software engineer.
              I like working on projects that challenge me and serve a purpose for others.
            </p>
            <p className="text-xl mb-8 mx-auto font-['Arial']">
              Click above to learn more about me.
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;