import React, { createContext, useContext, useState } from "react";

type Language = "en" | "hi" | "es" | "fr";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About", 
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.hireMe": "Hire Me",
    
    // Hero Section
    "hero.greeting": "Hi, I'm",
    "hero.name": "Alex Johnson",
    "hero.role1": "Full Stack Developer",
    "hero.role2": "MERN Stack Expert", 
    "hero.role3": "Problem Solver",
    "hero.role4": "Innovation Creator",
    "hero.description": "Passionate MERN Stack Developer crafting innovative digital experiences with cutting-edge technologies.",
    "hero.downloadCV": "Download CV",
    "hero.viewProjects": "View Projects",
    "hero.yearsExperience": "Years Experience",
    "hero.projectsCompleted": "Projects Completed",
    "hero.happyClients": "Happy Clients",
    
    // About Section
    "about.title": "About Me",
    "about.subtitle": "Passionate Developer & Problem Solver",
    "about.description": "I'm a dedicated MERN Stack Developer with a passion for creating exceptional digital experiences. My journey in web development has been driven by curiosity and a constant desire to learn and grow.",
    "about.getInTouch": "Get In Touch",
    
    // Skills Section
    "skills.title": "Skills & Expertise",
    "skills.subtitle": "Technologies I Work With",
    "skills.frontend": "Frontend Development",
    "skills.backend": "Backend Development",
    "skills.database": "Database & Tools",
    
    // Experience Section  
    "experience.title": "Professional Experience",
    "experience.subtitle": "Building innovative solutions and leading development teams",
    "experience.education": "Education",
    "experience.certifications": "Certifications",
    
    // Testimonials Section
    "testimonials.title": "Client Testimonials", 
    "testimonials.subtitle": "What clients say about working with me on their projects",
    
    // Contact Section
    "contact.subtitle": "Ready to bring your ideas to life",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email", 
    "contact.form.subject": "Subject",
    "contact.form.message": "Your Message",
    "contact.form.send": "Send Message",
    "contact.email": "Email Me",
    "contact.phone": "Call Me",
    "contact.location": "Visit Me",
    "contact.available": "Available for work",
    
    // Footer
    "footer.description": "Full Stack Developer • Building the future, one line of code at a time",
    "footer.copyright": "© 2024 Alex Johnson. All rights reserved. Built with React & Vite.",
  },
  
  hi: {
    // Navigation  
    "nav.home": "होम",
    "nav.about": "के बारे में",
    "nav.skills": "कौशल",
    "nav.experience": "अनुभव", 
    "nav.projects": "प्रोजेक्ट्स",
    "nav.testimonials": "प्रशंसापत्र",
    "nav.contact": "संपर्क",
    "nav.hireMe": "मुझे काम पर रखें",
    
    // Hero Section
    "hero.greeting": "नमस्ते, मैं हूँ",
    "hero.name": "एलेक्स जॉनसन",
    "hero.role1": "फुल स्टैक डेवलपर",
    "hero.role2": "MERN स्टैक एक्सपर्ट",
    "hero.role3": "समस्या समाधानकर्ता", 
    "hero.role4": "नवाचार रचयिता",
    "hero.description": "अत्याधुनिक तकनीकों के साथ नवीन डिजिटल अनुभव तैयार करने वाला जुनूनी MERN स्टैक डेवलपर।",
    "hero.downloadCV": "सीवी डाउनलोड करें",
    "hero.viewProjects": "प्रोजेक्ट्स देखें",
    "hero.yearsExperience": "साल का अनुभव",
    "hero.projectsCompleted": "पूर्ण प्रोजेक्ट्स", 
    "hero.happyClients": "खुश ग्राहक",
    
    // About Section
    "about.title": "मेरे बारे में",
    "about.subtitle": "जुनूनी डेवलपर और समस्या समाधानकर्ता",
    "about.description": "मैं एक समर्पित MERN स्टैक डेवलपर हूँ जिसमें असाधारण डिजिटल अनुभव बनाने का जुनून है। वेब डेवलपमेंट में मेरी यात्रा जिज्ञासा और लगातार सीखने और बढ़ने की इच्छा से प्रेरित रही है।",
    "about.getInTouch": "संपर्क करें",
    
    // Skills Section  
    "skills.title": "कौशल और विशेषज्ञता",
    "skills.subtitle": "तकनीकें जिनके साथ मैं काम करता हूँ",
    "skills.frontend": "फ्रंटएंड डेवलपमेंट", 
    "skills.backend": "बैकएंड डेवलपमेंट",
    "skills.database": "डेटाबेस और उपकरण",
    
    // Experience Section  
    "experience.title": "पेशेवर अनुभव",
    "experience.subtitle": "नवाचार समाधान बनाना और डेवलपमेंट टीमों का नेतृत्व करना",
    "experience.education": "शिक्षा",
    "experience.certifications": "प्रमाणपत्र",
    
    // Testimonials Section
    "testimonials.title": "ग्राहक प्रशंसापत्र", 
    "testimonials.subtitle": "ग्राहक मेरे साथ काम करने के बारे में क्या कहते हैं",
    
    // Contact Section
    "contact.title": "आइए मिलकर काम करें",
    "contact.subtitle": "आपके विचारों को जीवन में लाने के लिए तैयार",
    "contact.form.name": "आपका नाम",
    "contact.form.email": "आपका ईमेल",
    "contact.form.subject": "विषय", 
    "contact.form.message": "आपका संदेश",
    "contact.form.send": "संदेश भेजें",
    "contact.email": "मुझे ईमेल करें",
    "contact.phone": "मुझे कॉल करें",
    "contact.location": "मुझसे मिलें",
    "contact.available": "काम के लिए उपलब्ध",
    
    // Footer
    "footer.description": "फुल स्टैक डेवलपर • भविष्य का निर्माण, एक समय में एक कोड लाइन",
    "footer.copyright": "© 2024 एलेक्स जॉनसन। सभी अधिकार सुरक्षित। React और Vite के साथ बनाया गया।",
  },
  
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Acerca",
    "nav.skills": "Habilidades", 
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.testimonials": "Testimonios",
    "nav.contact": "Contacto",
    "nav.hireMe": "Contrátame",
    
    // Hero Section
    "hero.greeting": "Hola, soy",
    "hero.name": "Alex Johnson",
    "hero.role1": "Desarrollador Full Stack",
    "hero.role2": "Experto MERN Stack",
    "hero.role3": "Solucionador de Problemas",
    "hero.role4": "Creador de Innovación",
    "hero.description": "Desarrollador MERN Stack apasionado creando experiencias digitales innovadoras con tecnologías de vanguardia.",
    "hero.downloadCV": "Descargar CV",
    "hero.viewProjects": "Ver Proyectos",
    "hero.yearsExperience": "Años de Experiencia",
    "hero.projectsCompleted": "Proyectos Completados",
    "hero.happyClients": "Clientes Felices",
    
    // About Section
    "about.title": "Acerca de Mí", 
    "about.subtitle": "Desarrollador Apasionado y Solucionador de Problemas",
    "about.description": "Soy un desarrollador MERN Stack dedicado con pasión por crear experiencias digitales excepcionales. Mi viaje en el desarrollo web ha sido impulsado por la curiosidad y el deseo constante de aprender y crecer.",
    "about.getInTouch": "Ponte en Contacto",
    
    // Skills Section
    "skills.title": "Habilidades y Experiencia",
    "skills.subtitle": "Tecnologías con las que Trabajo",
    "skills.frontend": "Desarrollo Frontend",
    "skills.backend": "Desarrollo Backend", 
    "skills.database": "Base de Datos y Herramientas",
    
    // Experience Section  
    "experience.title": "Experiencia Profesional",
    "experience.subtitle": "Construyendo soluciones innovadoras y liderando equipos de desarrollo",
    "experience.education": "Educación",
    "experience.certifications": "Certificaciones",
    
    // Testimonials Section
    "testimonials.title": "Testimonios de Clientes", 
    "testimonials.subtitle": "Lo que los clientes dicen sobre trabajar conmigo en sus proyectos",
    
    // Contact Section
    "contact.title": "Trabajemos Juntos",
    "contact.subtitle": "Listo para dar vida a tus ideas",
    "contact.form.name": "Tu Nombre",
    "contact.form.email": "Tu Email",
    "contact.form.subject": "Asunto",
    "contact.form.message": "Tu Mensaje",
    "contact.form.send": "Enviar Mensaje", 
    "contact.email": "Envíame un Email",
    "contact.phone": "Llámame",
    "contact.location": "Visítame",
    "contact.available": "Disponible para trabajo",
    
    // Footer
    "footer.description": "Desarrollador Full Stack • Construyendo el futuro, una línea de código a la vez",
    "footer.copyright": "© 2024 Alex Johnson. Todos los derechos reservados. Construido con React y Vite.",
  },
  
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.skills": "Compétences",
    "nav.experience": "Expérience", 
    "nav.projects": "Projets",
    "nav.testimonials": "Témoignages",
    "nav.contact": "Contact",
    "nav.hireMe": "Engagez-moi",
    
    // Hero Section
    "hero.greeting": "Salut, je suis",
    "hero.name": "Alex Johnson", 
    "hero.role1": "Développeur Full Stack",
    "hero.role2": "Expert MERN Stack",
    "hero.role3": "Résolveur de Problèmes",
    "hero.role4": "Créateur d'Innovation",
    "hero.description": "Développeur MERN Stack passionné créant des expériences numériques innovantes avec des technologies de pointe.",
    "hero.downloadCV": "Télécharger CV",
    "hero.viewProjects": "Voir Projets",
    "hero.yearsExperience": "Années d'Expérience",
    "hero.projectsCompleted": "Projets Terminés",
    "hero.happyClients": "Clients Satisfaits",
    
    // About Section
    "about.title": "À Propos de Moi",
    "about.subtitle": "Développeur Passionné et Résolveur de Problèmes",
    "about.description": "Je suis un développeur MERN Stack dédié avec une passion pour créer des expériences numériques exceptionnelles. Mon parcours dans le développement web a été motivé par la curiosité et le désir constant d'apprendre et de grandir.",
    "about.getInTouch": "Entrer en Contact",
    
    // Skills Section
    "skills.title": "Compétences et Expertise", 
    "skills.subtitle": "Technologies avec Lesquelles je Travaille",
    "skills.frontend": "Développement Frontend",
    "skills.backend": "Développement Backend",
    "skills.database": "Base de Données et Outils",
    
    // Experience Section  
    "experience.title": "Expérience Professionnelle",
    "experience.subtitle": "Construire des solutions innovantes et diriger des équipes de développement",
    "experience.education": "Éducation",
    "experience.certifications": "Certifications",
    
    // Testimonials Section
    "testimonials.title": "Témoignages Clients", 
    "testimonials.subtitle": "Ce que les clients disent sur le fait de travailler avec moi sur leurs projets",
    
    // Contact Section
    "contact.title": "Travaillons Ensemble",
    "contact.subtitle": "Prêt à donner vie à vos idées",
    "contact.form.name": "Votre Nom",
    "contact.form.email": "Votre Email",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Votre Message",
    "contact.form.send": "Envoyer Message",
    "contact.email": "Envoyez-moi un Email", 
    "contact.phone": "Appelez-moi",
    "contact.location": "Visitez-moi",
    "contact.available": "Disponible pour le travail",
    
    // Footer
    "footer.description": "Développeur Full Stack • Construire l'avenir, une ligne de code à la fois",
    "footer.copyright": "© 2024 Alex Johnson. Tous droits réservés. Construit avec React et Vite.",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};