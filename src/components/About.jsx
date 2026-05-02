import { motion } from 'framer-motion';
import { GraduationCap, Languages, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative bg-[var(--color-bg-base)]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">About Me & Education</h2>
            <div className="h-[1px] bg-[var(--color-text-muted)] flex-grow opacity-30"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-[var(--color-accent-blue)]" size={28} />
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">Education</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-border)] before:to-transparent">
              {/* Item 1 */}
              <div className="relative pl-8 sm:pl-32 py-2 group">
                <div className="font-mono text-sm text-[var(--color-accent-cyan)] mb-1 sm:absolute sm:left-0 sm:mt-1">2023 - 2025</div>
                <div className="absolute left-0 sm:left-24 w-4 h-4 rounded-full bg-[var(--color-bg-base)] border-2 border-[var(--color-accent-blue)] mt-1.5 group-hover:bg-[var(--color-accent-blue)] transition-colors"></div>
                <h4 className="text-lg font-bold text-[var(--color-text-primary)]">Specialized Technician in Digital Development</h4>
                <div className="text-[var(--color-text-muted)] mb-2">Option: Full Stack Web</div>
                <p className="text-sm text-[var(--color-text-secondary)]">ISTA NTIC - Safi, Morocco</p>
              </div>
              
              {/* Item 2 */}
              <div className="relative pl-8 sm:pl-32 py-2 group">
                <div className="font-mono text-sm text-[var(--color-accent-cyan)] mb-1 sm:absolute sm:left-0 sm:mt-1">2022 - 2023</div>
                <div className="absolute left-0 sm:left-24 w-4 h-4 rounded-full bg-[var(--color-bg-base)] border-2 border-[var(--color-accent-blue)] mt-1.5 group-hover:bg-[var(--color-accent-blue)] transition-colors"></div>
                <h4 className="text-lg font-bold text-[var(--color-text-primary)]">Baccalaureate</h4>
                <div className="text-[var(--color-text-muted)] mb-2">Option: Physical Sciences</div>
                <p className="text-sm text-[var(--color-text-secondary)]">Lycée IBN MOULAY ELHAJ - Safi, Morocco</p>
              </div>
            </div>
          </motion.div>

          {/* Soft Skills & Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Soft Skills */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="text-[var(--color-accent-cyan)]" size={24} />
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Team Spirit', 'Adaptability', 'Autonomy', 'Problem Solving'].map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-white/5 text-[var(--color-text-secondary)] text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Languages className="text-[var(--color-accent-blue)]" size={24} />
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">Languages</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[var(--color-text-secondary)]">Arabic</span>
                    <span className="text-[var(--color-accent-cyan)]">Native</span>
                  </div>
                  <div className="h-2 w-full bg-[var(--color-bg-surface)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--color-accent-cyan)] w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[var(--color-text-secondary)]">French</span>
                    <span className="text-[var(--color-accent-blue)]">Professional</span>
                  </div>
                  <div className="h-2 w-full bg-[var(--color-bg-surface)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--color-accent-blue)] w-[80%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[var(--color-text-secondary)]">English</span>
                    <span className="text-[var(--color-accent-cyan)]">Professional</span>
                  </div>
                  <div className="h-2 w-full bg-[var(--color-bg-surface)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--color-accent-cyan)] w-[75%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-[var(--color-accent-cyan)]" size={24} />
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Personal Development', 'Sports', 'Volunteer Work'].map((interest, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-white/5 text-[var(--color-text-secondary)] text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-[var(--color-accent-cyan)] rounded-full blur-[180px] opacity-5 pointer-events-none" />
    </section>
  );
};

export default About;
