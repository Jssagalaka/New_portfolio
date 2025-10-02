import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";

const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration using OpenAI API. Features include message encryption, file sharing, and smart responses.",
      tech: ["Next.js", "Socket.io", "OpenAI", "Redis"],
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative project management tool with drag-and-drop functionality, team collaboration, and progress tracking.",
      tech: ["React", "Express", "PostgreSQL", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Fitness Tracker",
      description: "Mobile-first fitness tracking application with workout plans, progress monitoring, and social features.",
      tech: ["React Native", "Firebase", "Node.js"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-display font-bold gradient-text mb-6">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl glass hover:neon-glow 
                         transition-smooth hover-tilt ${project.featured ? 'lg:col-span-1' : ''}`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Action Buttons - Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button size="sm" variant="secondary" className="glass">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button size="sm" className="glass neon-glow">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-muted rounded-full 
                               border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - Bottom */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="glass glass-hover">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="glass glass-hover neon-glow">
                    <span className="mr-2">Live Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="glass glass-hover">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;