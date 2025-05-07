
import { motion } from 'framer-motion';
import { useState } from 'react';
import ThreeScene from '../components/ThreeScene';
import Layout from '../components/Layout';
import { DecorativeCircle, DecorativeSquare } from '../components/DecorativeShapes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

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
              <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
              <p className="text-xl text-gray-600 mb-6">
                Have a question or want to work together? Feel free to contact me.
              </p>
              <div className="mt-10 mb-16">
                <ThreeScene sceneType="both" />
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="section-padding bg-secondary/20">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
        
        {/* Contact Info */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">Other Ways to Connect</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p>hello@example.com</p>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                <p>linkedin.com/in/yourprofile</p>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Twitter</h3>
                <p>@yourhandle</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
