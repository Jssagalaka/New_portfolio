import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail, Github, Linkedin } from "lucide-react";
import developerPortrait from "@/assets/developer-portrait.jpg";
import { useLanguage } from "@/components/LanguageProvider";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const { t } = useLanguage();
  
  const roles = [
    t("hero.role1"),
    t("hero.role2"),
    t("hero.role3"),
    t("hero.role4")
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <motion.h1 
              className="text-6xl lg:text-hero font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t("hero.greeting")}{" "}
              <span className="gradient-text block">
                {t("hero.name")}
              </span>
            </motion.h1>
            
            <div className="text-2xl lg:text-3xl mb-8 h-16 flex items-center">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="gradient-text-secondary font-semibold"
              >
                {roles[currentRole]}
              </motion.span>
            </div>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t("hero.description")}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button size="lg" className="glass glass-hover neon-glow">
                <Mail className="w-5 h-5 mr-2" />
                {t("nav.hireMe")}
              </Button>
              <Button variant="outline" size="lg" className="glass glass-hover">
                <Download className="w-5 h-5 mr-2" />
                {t("hero.downloadCV")}
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-smooth hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div 
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass neon-glow-strong relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={developerPortrait}
                  alt="Alex Johnson - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating Animation Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;