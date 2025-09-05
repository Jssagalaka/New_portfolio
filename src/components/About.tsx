import { motion } from "framer-motion";
import { Code2, Database, Globe, Smartphone, Brain, Zap } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const About = () => {
  const { t } = useLanguage();
  const skills = [
    { name: "Frontend", icon: Globe, level: 95, color: "from-primary to-secondary" },
    { name: "Backend", icon: Database, level: 90, color: "from-secondary to-accent" },
    { name: "Mobile Dev", icon: Smartphone, level: 85, color: "from-accent to-primary" },
    { name: "AI/ML", icon: Brain, level: 80, color: "from-primary to-accent" },
  ];

  const techStack = [
    "React", "Next.js", "TypeScript", "Node.js", 
    "MongoDB", "Express", "Python", "AWS",
    "Docker", "GraphQL", "Redis", "PostgreSQL"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-display font-bold mb-6">
            {t("about.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("about.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 gradient-text">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg glass">
                        <skill.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Cloud */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-2xl font-bold mb-8 gradient-text">Tech Stack</h3>
            <div className="relative min-h-[400px] glass rounded-2xl p-8 overflow-hidden">
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 
                             rounded-full text-sm font-medium border border-primary/20 
                             hover:border-primary/50 transition-smooth cursor-default
                             hover:neon-glow"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              {/* Floating decorative elements */}
              <motion.div
                className="absolute top-4 right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-12 h-12 bg-accent/10 rounded-full blur-lg"
                animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "25+", label: "Happy Clients" },
            { number: "100K+", label: "Lines of Code" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 glass rounded-xl hover:neon-glow transition-smooth"
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;