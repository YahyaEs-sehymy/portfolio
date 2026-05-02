import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, XCircle } from 'lucide-react';

const WhatsAppIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/yhyyalshymy087@gmail.com", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[var(--color-accent-cyan)] font-medium tracking-wider mb-4 text-sm md:text-base uppercase">
            What's Next?
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
            Get In Touch
          </h3>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <motion.a
            href="mailto:yahyaessehymy19@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass glass-hover p-8 rounded-2xl flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-accent-cyan-glass)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="text-[var(--color-accent-cyan)]" size={28} />
            </div>
            <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Email Me</h4>
            <p className="text-[var(--color-text-secondary)] mb-4">yahyaessehymy19@gmail.com</p>
            <span className="text-[var(--color-accent-cyan)] text-sm font-medium flex items-center gap-2 mt-auto">
              Send a message <Send size={14} />
            </span>
          </motion.a>

          {/* Phone / WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-2xl flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-accent-blue)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="text-[var(--color-accent-blue)]" size={28} />
            </div>
            <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Call or Text</h4>
            <p className="text-[var(--color-text-secondary)] mb-6">+212 710-137753</p>
            <div className="flex gap-4 mt-auto w-full">
              <a 
                href="tel:+212710137753" 
                className="flex-1 flex justify-center items-center gap-2 py-2 rounded-lg bg-[var(--color-bg-surface)] border border-white/5 hover:border-[var(--color-accent-blue)]/50 hover:bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)] transition-all text-sm font-medium"
                title="Direct Call"
              >
                <Phone size={16} /> Call
              </a>
              <a 
                href="https://wa.me/212710137753" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex justify-center items-center gap-2 py-2 rounded-lg bg-[var(--color-bg-surface)] border border-white/5 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 text-[#25D366] transition-all text-sm font-medium"
                title="WhatsApp"
              >
                <WhatsAppIcon size={16} /> WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass glass-hover p-8 rounded-2xl flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-bg-surface)] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="text-[var(--color-text-primary)]" size={28} />
            </div>
            <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Location</h4>
            <p className="text-[var(--color-text-secondary)] mb-4">Safi, Morocco</p>
            <span className="text-[var(--color-text-muted)] text-sm font-medium mt-auto">
              Open to Remote Work
            </span>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto glass p-8 md:p-12 rounded-3xl"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Send me a message</h3>
            <p className="text-[var(--color-text-secondary)] mt-2">I'll get back to you within 24 hours.</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--color-text-secondary)]">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe" 
                  className="w-full bg-[var(--color-bg-base)] border border-white/10 rounded-xl px-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-cyan)] focus:ring-1 focus:ring-[var(--color-accent-cyan)] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--color-text-secondary)]">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com" 
                  className="w-full bg-[var(--color-bg-base)] border border-white/10 rounded-xl px-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-cyan)] focus:ring-1 focus:ring-[var(--color-accent-cyan)] transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-text-secondary)]">Message</label>
              <textarea 
                name="message"
                required
                rows="4" 
                placeholder="How can I help you?" 
                className="w-full bg-[var(--color-bg-base)] border border-white/10 rounded-xl px-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-cyan)] focus:ring-1 focus:ring-[var(--color-accent-cyan)] transition-colors resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 group ${
                isSubmitting ? 'bg-[var(--color-bg-surface)] text-[var(--color-text-muted)] cursor-not-allowed' : 'bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-blue)] text-white hover:shadow-lg hover:shadow-[var(--color-accent-cyan)]/25'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </button>
            
            {submitStatus === 'success' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-green-400 mt-4">
                <CheckCircle2 size={20} />
                <span>Message sent successfully!</span>
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-red-400 mt-4">
                <XCircle size={20} />
                <span>Oops! Something went wrong. Please try again.</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
      
      {/* Background glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[var(--color-accent-blue)] to-transparent blur-[150px] opacity-10 pointer-events-none" />
    </section>
  );
};

export default Contact;
