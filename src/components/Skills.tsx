import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Brain, Zap } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const Skills = () => {
  const { t } = useLanguage();
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t("skills.frontend"),
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: t("skills.backend"),
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t("skills.database"),
      skills: ["MERN Stack", "Authentication", "State Management", "Cloud Deploy"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile & Tools",
      skills: ["React Native", "Git", "Docker", "AWS", "Vercel"],
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Modern Tech",
      skills: ["OpenAI API", "ChatGPT Integration", "Machine Learning", "Python"],
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      skills: ["Optimization", "SEO", "Lighthouse 100", "Web Vitals", "PWA"],
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-6">{t("skills.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass glass-hover rounded-2xl p-6 group hover-tilt"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground text-sm">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-border/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Proficiency</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.2, delay: (index * 0.1) + (i * 0.02) }}
                        viewport={{ once: true }}
                        className={`w-2 h-2 rounded-full ${
                          i < 4 ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;