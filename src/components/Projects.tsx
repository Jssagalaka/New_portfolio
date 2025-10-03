import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";

const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    {
      id: 1,
      title: "Sanatandharamaya Admin Panel",
      description: "Designed and developed RESTful APIs for seamless frontend-backend communication. Used MongoDB Atlas for database management and Mongoose ORM for schema validation. Creating RESTful APIs for React Js and Flutter App.",
      tech: ["React", "Node.js", "MongoDB", "Express", "REST API"],
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=500&h=300&fit=crop",
      github: "https://sanatandharmaya.com/",
      demo: "https://sanatandharmaya.com/",
      featured: true,
    },
    {
      id: 2,
      title: "Book-Store App",
      description: "Developed and implemented a full-stack web application using MERN Stack. Designed and built RESTful APIs to handle CRUD operations efficiently. Integrated authentication and authorization using JWT and bcrypt.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=300&fit=crop",
      github: "https://github.com/Jssagalaka/BookStore",
      demo: "https://github.com/Jssagalaka/BookStore",
      featured: true,
    },
    {
      id: 3,
      title: "E-Commerce Backend Application",
      description: "Backend e-commerce app built using MongoDB, Express, Node.js, REST Api. The app allows users to register and log in. Only authenticated users can access the data. Uses JWT token for login system and hashing password to store in database.",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      github: "https://github.com/Jssagalaka/E-commerce",
      demo: "https://github.com/Jssagalaka/E-commerce",
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
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for managing multiple social media accounts with real-time insights and automated posting.",
      tech: ["Vue.js", "Express", "MongoDB", "Chart.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description: "Beautiful weather application with 7-day forecasts, interactive maps, and location-based alerts.",
      tech: ["React", "OpenWeather API", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 7,
      title: "Recipe Sharing Platform",
      description: "Community-driven recipe sharing platform with video tutorials, ingredient calculator, and meal planning.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "AWS S3"],
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 8,
      title: "Real Estate Marketplace",
      description: "Property listing platform with advanced search filters, virtual tours, and integrated booking system.",
      tech: ["React", "Node.js", "MongoDB", "Mapbox"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 9,
      title: "Learning Management System",
      description: "Educational platform with video courses, quizzes, progress tracking, and certification system.",
      tech: ["React", "Express", "MySQL", "AWS"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
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