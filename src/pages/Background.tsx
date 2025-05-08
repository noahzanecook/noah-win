import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { DecorativeCircle, DecorativeSquare } from '../components/DecorativeShapes';

const Background = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <div className="relative overflow-hidden">
        <DecorativeCircle />
        <DecorativeSquare />
        
        {/* Header */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-['Barlow'] mb-4">My Background</h1>
              <p className="text-xl text-gray-600 mb-8">
                A journey through my experiences and expertise.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => scrollToSection('about')}
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection('education')}
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Education
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h2 className="text-2xl font-['Barlow'] font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-gray-700">
                <p className="font-['Arial']">
                  My journey in technology began in South Georgia, where I was able to self-teach myself to program at a young age.
                  This gave me a strong foundation in self-discipline and problem-solving, which took me into my first job as an IT Technician.
                </p>
                <p className="font-['Arial']">
                  Now as a Computer Science student at Georgia Tech, I've had the privilege of exploring my passion at a world-class institution.
                  Throughout my time here, I've been able to work on a variety of projects involving machine learning, software engineering, and more.
                </p>
                <p className="font-['Arial']">
                  Most recently through Create-X, my team and I built a ceiling-mounted mmWave radar module that detects people's positions in real-time which we have been using for fall detection.
                  I am very grateful for the opportunities I have been given, and I am always looking for new ways to grow and learn.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section id="experience" className="section-padding bg-secondary/20 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title font-['Barlow']">Professional Experience</h2>
            <div className="w-full h-1 bg-gray-200 my-8"></div>
            <div className="space-y-12">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2">Software Engineer & Co-Founder - Thrive</h3>
                <p className="text-gray-500 mb-4">January 2025 - Present</p>
                <p>
                • Designed a ceiling-mounted mmWave radar module that detects falls using signal processing
                for detecting sudden position changes and machine learning for minimizing false positives.<br></br>
                • Integrated into an at-home elder care system where authorities and caretakers are alerted instantly.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-2">Machine Learning Researcher - Automated Algorithms Design Lab</h3>
                <p className="text-gray-500 mb-4">November 2023 - May 2024</p>
                <p>
                • Utilized genetic programming through EMADE (Evolutionary Multi-objective Algorithm Design Engine) to
                approach datasets in new ways with the goal of outperforming existing methods.<br></br>
                • Developed a self-driving model in a team-setting through object classification with YOLO and Python.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-2">IT Technician - Southern Tech Pro</h3>
                <p className="text-gray-500 mb-4">June 2022 - June 2023</p>
                <p>
                • Diagnosed and resolved IT issues, configured servers, and managed network systems for 30+ businesses across
                South Georgia, delivering comprehensive hardware and software solutions.<br></br>
                • Leveraged RMM software to automate IT tasks, reducing manual workload by 40%.<br></br>
                • Developed and executed Bash & Python scripts to automate software installations and server configurations.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section id="education" className="section-padding scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title font-['Barlow']">Education</h2>
            <div className="w-full h-1 bg-gray-200 my-8"></div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">Georgia Institute of Technology - B.S. in Computer Science</h3>
              <p className="text-gray-500 mb-4">2023 - 2027, GPA: 3.77</p>
              <p>
                - Concentration: Intelligence & Media<br></br>
                - Faculty Honors (4.0) in Summer 2023, Fall 2024, and Spring 2025<br></br>
                - Dean's List (3.0+) every semester<br></br>
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Background;
