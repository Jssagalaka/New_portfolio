import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Award } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const Experience = () => {
  const { t } = useLanguage();
  const experiences = [
    {
      title: t("experience.position1"),
      company: t("experience.company1"),
      location: "Keshod, Gujarat",
      period: t("experience.duration1"),
      type: "Full-time",
      description: t("experience.exp1"),
      achievements: [
        "Built secure, scalable APIs using Node.js, Express, and MongoDB",
        "Led authentication and role-based access implementation",
        "Performed debugging and troubleshooting to optimize performance"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Git", "React"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: t("experience.position2"),
      company: t("experience.company2"),
      location: "Keshod, Gujarat",
      period: t("experience.duration2"),
      type: "Full-time",
      description: t("experience.exp2"),
      achievements: [
        "Developed full-stack web apps with React and Tailwind CSS",
        "Integrated APIs and implemented JWT authentication",
        "Supported Agile team workflows and version control with Git"
      ],
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
      color: "from-green-500 to-teal-600"
    }
  ];

  const education = [
    {
      degree: t("experience.degree"),
      school: t("experience.university"),
      location: "Gujarat, India",
      period: t("experience.graduationYear"),
      gpa: t("experience.cgpa"),
      achievements: [
        "Completed BCA with focus on web development",
        "Gained expertise in MERN Stack technologies",
        "Participated in various coding projects"
      ]
    }
  ];

  const certifications: any[] = [];

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
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-6 text-center">{t("experience.education")}</h3>
            <div className="max-w-2xl mx-auto">
              {education.map((edu, index) => (
                <div key={index} className="glass glass-hover rounded-xl p-6 hover-lift">
                  <h4 className="text-lg font-semibold text-foreground mb-2">{edu.degree}</h4>
                  <div className="text-primary font-medium mb-2">{edu.school}</div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3 flex-wrap">
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.gpa}</span>
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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;