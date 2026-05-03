import { motion } from 'framer-motion';
import { ChevronDown, Mail, Phone, MapPin, Download } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative px-6">
      <div className="container mx-auto text-center z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Picture Avatar */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--color-accent-blue)] to-[var(--color-accent-cyan)] blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            <img 
              src="/profile.jpg" 
              alt="Yahya ES-SEHYMY" 
              className="relative w-full h-full object-cover rounded-full border-2 border-white/20 shadow-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://ui-avatars.com/api/?name=Yahya+Es-Sehymy&background=0D8ABC&color=fff&size=200";
              }}
            />
          </div>

          <h2 className="text-[var(--color-accent-cyan)] font-medium tracking-wider mb-4 text-sm md:text-base">
            HI, MY NAME IS
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[var(--color-text-primary)]">
            Yahya <span className="text-gradient">ES-SEHYMY</span>
          </h1>
          <h3 className="text-2xl md:text-4xl font-semibold text-[var(--color-text-secondary)] mb-8 flex flex-wrap justify-center gap-2">
            <span>I build</span>
            <span className="text-[var(--color-accent-blue)]">
              <Typewriter
                options={{
                  strings: ['Scalable Web Apps', 'React Interfaces', 'Laravel APIs', 'AI Chatbots'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80
                }}
              />
            </span>
          </h3>
          
          <div className="flex items-center justify-center gap-2 mb-8 text-[var(--color-text-secondary)]">
            <MapPin size={18} className="text-[var(--color-accent-cyan)]" />
            <span>Safi, Morocco</span>
          </div>

          <p className="text-[var(--color-text-muted)] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm a Full Stack Web Developer specializing in creating exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-[var(--color-accent-blue)] text-white font-medium hover:bg-[var(--color-accent-cyan)] transition-colors shadow-lg shadow-[var(--color-accent-blue)]/20 w-full sm:w-auto">
              Check out my work
            </a>
            <a href="/CV_Yahya_ES-SEHYMY2026.pdf" download className="px-8 py-3 rounded-full border border-[var(--color-accent-cyan)] text-[var(--color-accent-cyan)] font-medium hover:bg-[var(--color-accent-cyan-glass)] transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
              <Download size={18} /> Download CV
            </a>
            <div className="flex items-center gap-4 mt-4 sm:mt-0 sm:ml-4">
              <a href="https://github.com/YahyaEs-sehymy" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass glass-hover text-[var(--color-text-secondary)] hover:text-white">
                <GithubIcon size={20} />
              </a>
              <a href="https://www.linkedin.com/in/yahya-es-sehymy-233331365/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass glass-hover text-[var(--color-text-secondary)] hover:text-white">
                <LinkedinIcon size={20} />
              </a>
              <a href="mailto:yahyaessehymy19@gmail.com" className="p-3 rounded-full glass glass-hover text-[var(--color-text-secondary)] hover:text-white">
                <Mail size={20} />
              </a>
              <a href="tel:+212710137753" className="p-3 rounded-full glass glass-hover text-[var(--color-text-secondary)] hover:text-white">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-[var(--color-text-muted)]" />
      </motion.div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent-blue)] rounded-full blur-[120px] opacity-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
