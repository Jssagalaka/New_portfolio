import ParticleBackground from "@/components/ParticleBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>
        
        {/* About Section */}
        <section id="about">
          <About />
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="bg-muted/20">
          <Skills />
        </section>
        
        {/* Experience Section */}
        <section id="experience">
          <Experience />
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="bg-muted/20">
          <Projects />
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>
        
        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-border/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-2xl font-bold gradient-text mb-4">Alex Johnson</div>
            <p className="text-muted-foreground mb-6">
              Full Stack Developer • Building the future, one line of code at a time
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Alex Johnson. All rights reserved. Built with React & Vite.
            </p>
          </motion.div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-4 glass glass-hover neon-glow rounded-full z-[60]
                   transition-smooth hover:bg-primary/20"
        aria-label="Scroll to top"
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-foreground font-bold text-lg"
        >
          ↑
        </motion.div>
      </motion.button>
    </div>
  );
};

export default Index;
