
import RefundPolicy from "./RefundPolicy";
import { motion } from "framer-motion";
import { Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-kubecraft-gray text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <div className="h-8 w-8 mr-2 flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/62d392eb-a9ce-41fc-934d-b5bb6aba18e7.png" 
                  alt="KubeCraft Logo" 
                  className="logo-image h-full w-auto object-contain"
                />
              </div>
              KubeCraft
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The #1 DevOps Community for Getting In, Standing Out & Staying Ahead.
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} KubeCraft. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">
                  About
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="https://www.skool.com/kubecraft" className="text-gray-300 hover:text-white transition-colors inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">
                  Join Now
                </a>
              </li>
              <li><RefundPolicy /></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4 mb-8">
              <li className="text-gray-300">
                <a href="https://www.skool.com/kubecraft" className="hover:text-white transition-colors inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">
                  www.skool.com/kubecraft
                </a>
              </li>
              <li className="text-gray-300">
                <a href="mailto:mischa@kubecraft.nl" className="hover:text-white transition-colors inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full">
                  mischa@kubecraft.nl
                </a>
              </li>
            </ul>
            <div className="flex space-x-6">
              <a href="https://www.youtube.com/@mischavandenburg" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-6 w-6 hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/mischavandenburg/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6 hover:scale-110 transition-transform" />
              </a>
            </div>
            <p className="mt-8 text-gray-400 text-sm">
              Made with ❤️ by Mischa & the KubeCraft team
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
