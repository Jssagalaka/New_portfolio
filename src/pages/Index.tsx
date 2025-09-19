import ParticleBackground from "@/components/ParticleBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingShapes from "@/components/FloatingShapes";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MouseFollower from "@/components/MouseFollower";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Advanced UI Components */}
      <ScrollProgressBar />
      <MouseFollower />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Floating Shapes */}
      <FloatingShapes />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>
        
        {/* About Section */}
        <section id="about" className="py-24">
          <About />
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="bg-muted/20 py-24">
          <Skills />
        </section>
        
        {/* Experience Section */}
        <section id="experience" className="py-24">
          <Experience />
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="bg-muted/20 py-24">
          <Projects />
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-24">
          <Testimonials />
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-24">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-6 glass glass-hover neon-glow rounded-full z-[60]
                   transition-smooth hover:bg-primary/20"
        aria-label="Scroll to top"
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-foreground font-bold text-2xl"
        >
          ↑
        </motion.div>
      </motion.button>
    </div>
  );
};

export default Index;
