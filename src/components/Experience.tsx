import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Award } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const Experience = () => {
  const { t } = useLanguage();
  const experiences = [
    {
      title: "Senior MERN Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2023 - Present",
      type: "Full-time",
      description: "Led development of enterprise-level applications using React, Node.js, and MongoDB. Improved app performance by 40% and mentored junior developers.",
      achievements: [
        "Built scalable microservices architecture",
        "Implemented real-time chat system with 10k+ users",
        "Reduced bundle size by 35% through optimization"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "TypeScript"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Full Stack Developer",
      company: "InnovateLab",
      location: "New York, NY",
      period: "2021 - 2023",
      type: "Full-time",
      description: "Developed modern web applications with focus on user experience and performance. Collaborated with design team to create pixel-perfect interfaces.",
      achievements: [
        "Launched 5+ production applications",
        "Achieved 95+ Lighthouse scores",
        "Integrated payment systems and APIs"
      ],
      technologies: ["Next.js", "Express.js", "PostgreSQL", "Stripe", "Docker"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Frontend Developer",
      company: "StartupHub",
      location: "Austin, TX",
      period: "2020 - 2021",
      type: "Contract",
      description: "Created responsive web interfaces and improved user engagement by 60%. Specialized in React ecosystem and modern CSS frameworks.",
      achievements: [
        "Rebuilt company website from scratch",
        "Implemented Progressive Web App features",
        "Optimized for mobile-first experience"
      ],
      technologies: ["React", "Tailwind CSS", "Firebase", "PWA"],
      color: "from-orange-500 to-red-600"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      location: "California",
      period: "2016 - 2020",
      gpa: "3.8/4.0",
      achievements: [
        "Summa Cum Laude",
        "Computer Science Excellence Award",
        "Dean's List for 6 semesters"
      ]
    }
  ];

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon", year: "2023" },
    { name: "MongoDB Certified Developer", issuer: "MongoDB", year: "2022" },
    { name: "React Professional Certificate", issuer: "Meta", year: "2021" },
    { name: "Node.js Application Developer", issuer: "OpenJS", year: "2021" }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold gradient-text text-center mb-6">
            {t("experience.title")}
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            {t("experience.subtitle")}
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                
                {/* Content Card */}
                <div className={`glass glass-hover rounded-2xl p-6 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8 md:ml-0' : 'md:ml-8 md:mr-0'
                } md:w-5/12 hover-lift`}>
                  
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-primary font-medium mb-2">
                        <span>{exp.company}</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Award className="w-3 h-3 text-primary" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-muted rounded-md text-xs text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-6">{t("experience.education")}</h3>
            {education.map((edu, index) => (
              <div key={index} className="glass glass-hover rounded-xl p-6 hover-lift">
                <h4 className="text-lg font-semibold text-foreground mb-2">{edu.degree}</h4>
                <div className="text-primary font-medium mb-2">{edu.school}</div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <span>{edu.period}</span>
                  <span>•</span>
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span>GPA: {edu.gpa}</span>
                </div>
                <div className="space-y-1">
                  {edu.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Award className="w-3 h-3 text-primary" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-6">{t("experience.certifications")}</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass glass-hover rounded-xl p-4 hover-lift"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <span className="text-primary font-medium">{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;