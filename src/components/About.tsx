import { motion } from "framer-motion";
import { Code, Smartphone, Database, Palette, ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";

const About = () => {
  const { t } = useLanguage();
  
  const journey = [
    { year: "2020", event: t("about.journey.start") },
    { year: "2021", event: t("about.journey.first") },
    { year: "2022", event: t("about.journey.growth") },
    { year: "2023", event: t("about.journey.senior") },
    { year: "2024", event: t("about.journey.present") },
  ];

  const highlights = [
    { number: "5+", label: t("about.highlights.experience") },
    { number: "100+", label: t("about.highlights.projects") },
    { number: "50+", label: t("about.highlights.clients") },
    { number: "98%", label: t("about.highlights.satisfaction") },
  ];

  const services = [
    { icon: Code, title: t("about.services.web.title"), description: t("about.services.web.desc") },
    { icon: Smartphone, title: t("about.services.mobile.title"), description: t("about.services.mobile.desc") },
    { icon: Database, title: t("about.services.backend.title"), description: t("about.services.backend.desc") },
    { icon: Palette, title: t("about.services.design.title"), description: t("about.services.design.desc") },
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
          <h2 className="text-4xl lg:text-display font-bold gradient-text mb-6">
            {t("about.title")}
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=600&fit=crop"
              alt="Developer workspace"
              className="rounded-2xl shadow-2xl hover-lift"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold gradient-text">
              {t("about.heading")}
            </h3>
            <p className="text-foreground/80 text-lg leading-relaxed">
              {t("about.description1")}
            </p>
            <p className="text-foreground/70 leading-relaxed">
              {t("about.description2")}
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Code className="w-6 h-6 text-primary" />
                <span className="text-foreground">{t("about.expertise.web")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Smartphone className="w-6 h-6 text-primary" />
                <span className="text-foreground">{t("about.expertise.mobile")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Database className="w-6 h-6 text-primary" />
                <span className="text-foreground">{t("about.expertise.backend")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Palette className="w-6 h-6 text-primary" />
                <span className="text-foreground">{t("about.expertise.design")}</span>
              </div>
            </div>

            <Button size="lg" className="neon-glow mt-4">
              {t("about.button")}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="glass glass-hover rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">{item.number}</div>
                  <div className="text-foreground/70 text-sm">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* My Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold gradient-text text-center mb-12">
            {t("about.journey.title")}
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border hidden md:block"></div>
            <div className="space-y-8">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="glass glass-hover rounded-xl p-6 inline-block">
                      <div className="text-primary font-bold text-xl mb-2">{item.year}</div>
                      <div className="text-foreground">{item.event}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block"></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold gradient-text text-center mb-12">
            {t("about.services.title")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass glass-hover rounded-xl p-6 text-center hover-lift"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-foreground/70 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;