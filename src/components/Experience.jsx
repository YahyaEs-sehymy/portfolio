import { motion } from 'framer-motion';
import { Terminal, Database, Server, Code2 } from 'lucide-react';

const Experience = () => {
  const skills = [
    {
      title: "Backend Development",
      icon: <Server className="text-[var(--color-accent-cyan)] mb-4" size={32} />,
      items: ["PHP (Laravel)", "Node.js (Express)", "Python (Flask)"]
    },
    {
      title: "Frontend Development",
      icon: <Code2 className="text-[var(--color-accent-blue)] mb-4" size={32} />,
      items: ["JavaScript (ES6) / TS", "React.js", "Tailwind CSS", "Bootstrap", "HTML5 / CSS3"]
    },
    {
      title: "Database Management",
      icon: <Database className="text-[var(--color-accent-cyan)] mb-4" size={32} />,
      items: ["MySQL", "MongoDB"]
    },
    {
      title: "Other Tools & Tech",
      icon: <Terminal className="text-[var(--color-accent-blue)] mb-4" size={32} />,
      items: ["Docker", "AWS", "Git / GitHub", "Jira / Trello / Slack", "UML", "Figma", "REST APIs", "Agile"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">Experience & Skills</h2>
            <div className="h-[1px] bg-[var(--color-text-muted)] flex-grow opacity-30"></div>
          </div>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl">
            My core technology stack that I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass glass-hover p-6 rounded-2xl flex flex-col items-center text-center"
            >
              {skill.icon}
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">{skill.title}</h3>
              <ul className="space-y-2 text-[var(--color-text-secondary)]">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-sm">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-[var(--color-accent-cyan)] rounded-full blur-[150px] opacity-5 pointer-events-none" />
    </section>
  );
};

export default Experience;
