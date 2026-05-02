import { motion } from 'framer-motion';
import { ExternalLink, FolderOpen } from 'lucide-react';

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: "AI Chatbot (AFCON 2025)",
      description: "Final Year Project (PFE) at Yancode Digital. A real-time result tracker tailored for AFCON 2025. Utilizes Natural Language Processing to parse user queries, delivering an interactive and instant experience.",
      tech: ["Flask", "Spacy (NLP)", "React.js", "Tailwind CSS"],
      image: "/chatbot.png",
      github: "#",
      live: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "A comprehensive full-stack e-commerce solution featuring secure authentication, dynamic product catalog, shopping cart functionality, and a seamless checkout process.",
      tech: ["Laravel", "React", "MySQL", "REST APIs"],
      image: "/ecommerce.png",
      github: "#",
      live: "#"
    },
    {
      title: "Medical Management System",
      description: "A dedicated web application designed for clinics to manage patient records securely and schedule appointments efficiently. Includes role-based access for doctors and administrative staff.",
      tech: ["PHP", "JavaScript", "HTML/CSS", "MySQL"],
      image: "/medical.png",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative bg-[var(--color-bg-base)]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">Featured Projects</h2>
            <div className="h-[1px] bg-[var(--color-text-muted)] flex-grow opacity-30"></div>
          </div>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl">
            A selection of recent work that highlights my full-stack capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col h-full group rounded-2xl glass glass-hover relative overflow-hidden"
            >
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover opacity-50 blur-[2px] group-hover:blur-0 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-surface-glass)] via-[var(--color-bg-base)] to-transparent" />
                </div>
                
                <div className="relative z-10 flex flex-col h-full mt-24 px-8 pb-8">
                  <div className="flex justify-between items-center mb-6">
                    <FolderOpen className="text-[var(--color-accent-cyan)]" size={40} />
                    <div className="flex gap-4">
                      <a href={project.github} className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors">
                        <GithubIcon size={20} />
                      </a>
                      <a href={project.live} className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-accent-cyan)] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-[var(--color-text-secondary)] text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <ul className="flex flex-wrap gap-3 mt-auto">
                    {project.tech.map((tech, i) => (
                      <li key={i} className="text-xs font-mono text-[var(--color-text-muted)] bg-black/20 px-2 py-1 rounded">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[var(--color-accent-blue)] rounded-full blur-[200px] opacity-5 pointer-events-none" />
    </section>
  );
};

export default Projects;
