import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '../components/Layout';
import { DecorativeCircle, DecorativeSquare } from '../components/DecorativeShapes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

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
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-['Barlow'] mb-4 px-4">hello@noah.win</h1>
              <div className="w-full h-1 bg-gray-200 my-8"></div>
              <p className="text-xl text-gray-600 mb-6">
                Have a question or want to work together? Feel free to contact me.
              </p>
            </motion.div>
          </div>
        </section>
        
        <div className="-mt-40"></div>
        {/* Contact Info */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            {/* <h2 className="section-title font-['Barlow']">Connect With Me</h2> */}
            <div className="flex justify-center space-x-8 mt-8">
              <a
                href="https://github.com/noahzanecook"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="GitHub"
              >
                <Github size={32} className="text-gray-700" />
              </a>
              <a
                href="https://linkedin.com/in/noahzanecook"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={32} className="text-gray-700" />
              </a>
              {/* <a
                href="https://twitter.com/noahzanecook"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={32} className="text-gray-700" />
              </a> */}
              <a
                href="mailto:hello@noah.win"
                className="p-4 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Email"
              >
                <Mail size={32} className="text-gray-700" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
