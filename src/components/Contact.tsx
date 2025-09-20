import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/components/LanguageProvider";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast(t("contact.successMessage"), {
      icon: "✅",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.johnson@developer.com",
      href: "mailto:alex.johnson@developer.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-display font-bold mb-6 text-foreground">
            {t("contact.title")} <span className="gradient-text">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">{t("contact.sendMessage")}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder={t("contact.namePlaceholder")}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder={t("contact.emailPlaceholder")}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder={t("contact.subjectPlaceholder")}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="glass border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={t("contact.messagePlaceholder")}
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="glass border-border/50 focus:border-primary transition-smooth resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full glass glass-hover neon-glow"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t("contact.sendButton")}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">{t("contact.getInTouch")}</h3>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                {t("contact.availability")}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:neon-glow 
                           transition-smooth cursor-pointer group"
                >
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-smooth">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{info.label}</div>
                    <div className="text-foreground/70 group-hover:text-foreground transition-smooth">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 glass rounded-xl border border-accent/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                <span className="font-semibold text-accent">{t("contact.availableForWork")}</span>
              </div>
              <p className="text-sm text-foreground/70">
                {t("contact.responseTime")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;