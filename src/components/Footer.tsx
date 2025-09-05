import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const { t } = useLanguage();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/alexjohnson", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/alexjohnson", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/alexjohnson", label: "Twitter" },
    { icon: Mail, href: "mailto:alex@example.com", label: "Email" }
  ];

  const quickLinks = [
    { text: t("nav.about"), href: "#about" },
    { text: t("nav.skills"), href: "#skills" },
    { text: t("nav.experience"), href: "#experience" },
    { text: t("nav.projects"), href: "#projects" },
    { text: t("nav.contact"), href: "#contact" }
  ];

  return (
    <footer className="relative z-10 border-t border-border/30 bg-background/95 backdrop-blur-sm">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="text-2xl font-bold gradient-text mb-4">
                {t("hero.name")}
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                {t("footer.description")}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>alex@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">
                  {t("contact.available")}
                </span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 
                               hover:translate-x-1 inline-block"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">Connect</h3>
              
              {/* Social Links */}
              <div className="flex gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 glass glass-hover rounded-xl text-muted-foreground 
                             hover:text-primary transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">
                  Subscribe for updates
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 px-3 py-2 bg-muted/50 border border-border/50 rounded-lg
                             text-sm text-foreground placeholder:text-muted-foreground
                             focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <Button size="sm" className="px-4">
                    Join
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-border/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-sm text-muted-foreground text-center md:text-left">
              {t("footer.copyright")}
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & Vite</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;