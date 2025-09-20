import React, { createContext, useContext, useState } from "react";

type Language = "en" | "hi" | "gu";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },  
  { code: "gu", name: "ગુજરાતી", flag: "🇮🇳" },
];

const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      testimonials: "Testimonials",
      contact: "Contact",
    },

    // Hero section
    hero: {
      greeting: "Hi, I'm",
      name: "Alex Johnson",
      title: "Full Stack Developer",
      subtitle: "Creating beautiful and functional digital experiences with modern technologies",
      viewWork: "View My Work",
      contactMe: "Contact Me",
    },

    // About section
    about: {
      title: "About Me",
      subtitle: "Passionate developer with 5+ years of experience creating innovative web solutions.",
      description: "I'm a full-stack developer dedicated to creating exceptional web applications that combine beautiful design with robust functionality. With experience in modern technologies like React, Node.js, and cloud databases, I enjoy transforming complex ideas into elegant digital solutions.",
      yearsExperience: "Years Experience",
      projectsCompleted: "Projects Completed",
      happyClients: "Happy Clients",
      codeCommits: "Code Commits",
    },

    // Skills section
    skills: {
      title: "My Skills",
      subtitle: "Technologies and tools I use to bring ideas to life",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools",
    },

    // Experience section
    experience: {
      title: "My Experience",
      subtitle: "A journey through my professional development career",
      present: "Present",
      senior: "Senior Full Stack Developer",
      lead: "Lead Frontend Developer",
      fullstack: "Full Stack Developer",
      junior: "Junior Developer",
      company1: "TechCorp Solutions",
      company2: "Digital Innovations",
      company3: "StartupXYZ",
      company4: "WebDev Agency",
      exp1: "Leading development of complex web applications using React, Node.js and AWS. Mentoring junior developers and establishing best practices for the team.",
      exp2: "Developed responsive user interfaces for large-scale enterprise applications. Implemented design systems and improved application performance.",
      exp3: "Built full-stack applications from scratch using modern technologies. Collaborated with cross-functional teams to deliver high-quality products.",
      exp4: "Started my journey learning web development and contributing to various client projects. Gained experience in HTML, CSS, JavaScript, and React.",
    },

    // Testimonials section
    testimonials: {
      title: "Testimonials",
      subtitle: "What my clients and colleagues say about working with me",
      client1: "Sarah Wilson",
      client2: "Michael Chen",
      client3: "Emily Rodriguez",
      role1: "Product Manager at TechStart",
      role2: "CTO at DataFlow Inc",
      role3: "Design Director at CreativeHub",
      testimonial1: "Alex delivered exceptional work on our project. His attention to detail and technical skills are top-notch. Highly recommended!",
      testimonial2: "Working with Alex was a fantastic experience. He transformed our ideas into a beautiful and functional web application that exceeded our expectations.",
      testimonial3: "Alex's expertise and professionalism shone throughout our project. He delivered high-quality solutions on time and within budget.",
    },

    // Contact
    contact: {
      title: "Let's Work",
      titleHighlight: "Together",
      subtitle: "Have a project in mind? Let's discuss how we can bring your ideas to life. I'm always open to new opportunities and interesting challenges.",
      sendMessage: "Send Message",
      getInTouch: "Get in Touch",
      availability: "I'm currently available for freelance work and full-time opportunities. Whether you have a project idea or just want to say hello, feel free to reach out!",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Your Message",
      sendButton: "Send Message",
      availableForWork: "Available for Work",
      responseTime: "Currently accepting new projects and collaborations. Expected response time: within 24 hours.",
      successMessage: "Message sent successfully! I'll get back to you soon.",
    },

    // Footer
    footer: {
      rights: "All rights reserved.",
      madeWith: "Made with",
      description: "Passionate Full Stack Developer creating exceptional digital experiences.",
    },
  },

  hi: {
    // Navigation
    nav: {
      home: "होम",
      about: "के बारे में",
      skills: "कौशल",
      experience: "अनुभव",
      testimonials: "प्रशंसापत्र",
      contact: "संपर्क",
    },

    // Hero section
    hero: {
      greeting: "नमस्ते, मैं हूँ",
      name: "एलेक्स जॉनसन",
      title: "फुल स्टैक डेवलपर",
      subtitle: "आधुनिक प्रौद्योगिकियों के साथ सुंदर और कार्यात्मक डिजिटल अनुभव बनाना",
      viewWork: "मेरा काम देखें",
      contactMe: "मुझसे संपर्क करें",
    },

    // About section
    about: {
      title: "मेरे बारे में",
      subtitle: "नवाचार वेब समाधान बनाने में 5+ वर्षों के अनुभव के साथ जुनूनी डेवलपर।",
      description: "मैं एक फुल-स्टैक डेवलपर हूँ जो असाधारण वेब एप्लिकेशन बनाने के लिए समर्पित हूँ जो सुंदर डिज़ाइन को मजबूत कार्यक्षमता के साथ जोड़ते हैं। React, Node.js, और क्लाउड डेटाबेस जैसी आधुनिक तकनीकों में अनुभव के साथ, मैं जटिल विचारों को सुरुचिपूर्ण डिजिटल समाधानों में बदलने का आनंद लेता हूँ।",
      yearsExperience: "वर्षों का अनुभव",
      projectsCompleted: "पूर्ण प्रोजेक्ट्स",
      happyClients: "खुश ग्राहक",
      codeCommits: "कोड कमिट्स",
    },

    // Skills section
    skills: {
      title: "मेरे कौशल",
      subtitle: "विचारों को जीवंत बनाने के लिए मैं जिन तकनीकों और उपकरणों का उपयोग करता हूँ",
      frontend: "फ्रंटएंड",
      backend: "बैकएंड",
      database: "डेटाबेस",
      tools: "उपकरण",
    },

    // Experience section
    experience: {
      title: "मेरा अनुभव",
      subtitle: "मेरी पेशेवर विकास कैरियर की यात्रा",
      present: "वर्तमान",
      senior: "सीनियर फुल स्टैक डेवलपर",
      lead: "लीड फ्रंटएंड डेवलपर",
      fullstack: "फुल स्टैक डेवलपर",
      junior: "जूनियर डेवलपर",
      company1: "टेककॉर्प सोल्यूशन्स",
      company2: "डिजिटल इनोवेशन्स",
      company3: "स्टार्टअपएक्सवाईजेड",
      company4: "वेबडेव एजेंसी",
      exp1: "React, Node.js और AWS का उपयोग करके जटिल वेब एप्लिकेशन के विकास का नेतृत्व करना। जूनियर डेवलपर्स को मेंटर करना और टीम के लिए बेस्ट प्रैक्टिसेज स्थापित करना।",
      exp2: "बड़े पैमाने के एंटरप्राइज़ एप्लिकेशन के लिए रिस्पॉन्सिव यूजर इंटरफेस विकसित किए। डिज़ाइन सिस्टम लागू किए और एप्लिकेशन प्रदर्शन में सुधार किया।",
      exp3: "आधुनिक तकनीकों का उपयोग करके शुरुआत से फुल-स्टैक एप्लिकेशन बनाए। उच्च गुणवत्ता वाले उत्पाद देने के लिए क्रॉस-फंक्शनल टीमों के साथ सहयोग किया।",
      exp4: "वेब डेवलपमेंट सीखने और विभिन्न क्लाइंट प्रोजेक्ट्स में योगदान देकर अपनी यात्रा शुरू की। HTML, CSS, JavaScript, और React में अनुभव प्राप्त किया।",
    },

    // Testimonials section
    testimonials: {
      title: "प्रशंसापत्र",
      subtitle: "मेरे क्लाइंट्स और सहकर्मी मेरे साथ काम करने के बारे में क्या कहते हैं",
      client1: "सारा विल्सन",
      client2: "माइकल चेन",
      client3: "एमिली रोड्रिगेज",
      role1: "टेकस्टार्ट में प्रोडक्ट मैनेजर",
      role2: "डेटाफ्लो इंक में CTO",
      role3: "क्रिएटिवहब में डिज़ाइन डायरेक्टर",
      testimonial1: "एलेक्स ने हमारे प्रोजेक्ट पर असाधारण काम किया। उनका विस्तार पर ध्यान और तकनीकी कुशलता बेहतरीन है। अत्यधिक अनुशंसित!",
      testimonial2: "एलेक्स के साथ काम करना एक शानदार अनुभव था। उन्होंने हमारे विचारों को एक सुंदर और कार्यात्मक वेब एप्लिकेशन में बदल दिया जो हमारी अपेक्षाओं से कहीं ज्यादा था।",
      testimonial3: "एलेक्स की विशेषज्ञता और व्यावसायिकता हमारे पूरे प्रोजेक्ट के दौरान चमकी। उन्होंने समय पर और बजट के भीतर उच्च गुणवत्ता वाले समाधान दिए।",
    },

    // Contact
    contact: {
      title: "आइए मिलकर",
      titleHighlight: "काम करें",
      subtitle: "कोई प्रोजेक्ट है? आइए चर्चा करते हैं कि हम आपके विचारों को कैसे जीवंत कर सकते हैं। मैं हमेशा नए अवसरों और रोचक चुनौतियों के लिए तैयार हूं।",
      sendMessage: "संदेश भेजें",
      getInTouch: "संपर्क करें",
      availability: "मैं वर्तमान में फ्रीलांस काम और पूर्णकालिक अवसरों के लिए उपलब्ध हूं। चाहे आपके पास कोई प्रोजेक्ट आइडिया हो या सिर्फ हैलो कहना चाहते हों, बेझिझक संपर्क करें!",
      namePlaceholder: "आपका नाम",
      emailPlaceholder: "आपका ईमेल",
      subjectPlaceholder: "विषय",
      messagePlaceholder: "आपका संदेश",
      sendButton: "संदेश भेजें",
      availableForWork: "काम के लिए उपलब्ध",
      responseTime: "वर्तमान में नए प्रोजेक्ट्स और सहयोग स्वीकार कर रहा हूं। अपेक्षित प्रतिक्रिया समय: 24 घंटे के भीतर।",
      successMessage: "संदेश सफलतापूर्वक भेजा गया! मैं जल्द ही आपसे संपर्क करूंगा।",
    },

    // Footer
    footer: {
      rights: "सभी अधिकार सुरक्षित।",
      madeWith: "के साथ बनाया गया",
      description: "असाधारण डिजिटल अनुभव बनाने वाला जुनूनी फुल स्टैक डेवलपर।",
    },
  },

  gu: {
    // Navigation
    nav: {
      home: "હોમ",
      about: "વિશે",
      skills: "કુશળતા",
      experience: "અનુભવ",
      testimonials: "પ્રશંસાપત્રો",
      contact: "સંપર્ક",
    },

    // Hero section
    hero: {
      greeting: "નમસ્તે, હું છું",
      name: "Alex Johnson",
      title: "ફુલ સ્ટેક ડેવલપર",
      subtitle: "આધુનિક ટેક્નોલોજી સાથે સુંદર અને કાર્યાત્મક ડિજિટલ અનુભવો બનાવવામાં",
      viewWork: "મારું કાર્ય જુઓ",
      contactMe: "મારો સંપર્ક કરો",
    },

    // About section
    about: {
      title: "મારા વિશે",
      subtitle: "નવીન વેબ સોલ્યુશન્સ બનાવવામાં 5+ વર્ષના અનુભવ સાથેનો જુસ્સાદાર ડેવલપર.",
      description: "હું એક ફુલ-સ્ટેક ડેવલપર છું જે અસાધારણ વેબ એપ્લિકેશન્સ બનાવવા માટે સમર્પિત છું જે સુંદર ડિઝાઇનને મજબૂત કાર્યક્ષમતા સાથે જોડે છે. React, Node.js અને ક્લાઉડ ડેટાબેસેસ જેવી આધુનિક ટેક્નોલોજીઓમાં અનુભવ સાથે, હું જટિલ વિચારોને ભવ્ય ડિજિટલ સોલ્યુશન્સમાં ફેરવવાનો આનંદ માણું છું.",
      yearsExperience: "વર્ષોનો અનુભવ",
      projectsCompleted: "પૂર્ણ થયેલા પ્રોજેક્ટ્સ",
      happyClients: "ખુશ ક્લાયન્ટ્સ",
      codeCommits: "કોડ કમિટ્સ",
    },

    // Skills section
    skills: {
      title: "મારી કુશળતાઓ",
      subtitle: "વિચારોને જીવંત બનાવવા માટે હું જે ટેક્નોલોજીઓ અને ટૂલ્સનો ઉપયોગ કરું છું",
      frontend: "ફ્રન્ટએન્ડ",
      backend: "બેકએન્ડ",
      database: "ડેટાબેસ",
      tools: "ટૂલ્સ",
    },

    // Experience section
    experience: {
      title: "મારો અનુભવ",
      subtitle: "મારી વ્યાવસાયિક ડેવલપમેન્ટ કારકિર્દીની યાત્રા",
      present: "વર્તમાન",
      senior: "સિનિયર ફુલ સ્ટેક ડેવલપર",
      lead: "લીડ ફ્રન્ટએન્ડ ડેવલપર",
      fullstack: "ફુલ સ્ટેક ડેવલપર",
      junior: "જુનિયર ડેવલપર",
      company1: "TechCorp Solutions",
      company2: "Digital Innovations",
      company3: "StartupXYZ",
      company4: "WebDev Agency",
      exp1: "React, Node.js અને AWSનો ઉપયોગ કરીને જટિલ વેબ એપ્લિકેશન્સના વિકાસનું નેતૃત્વ કરવું. જુનિયર ડેવલપર્સને માર્ગદર્શન આપવું અને ટીમ માટે શ્રેષ્ઠ પ્રથાઓ સ્થાપિત કરવી.",
      exp2: "મોટા પાયે એન્ટરપ્રાઇઝ એપ્લિકેશન્સ માટે રિસ્પોન્સિવ યુઝર ઇન્ટરફેસ વિકસાવ્યા. ડિઝાઇન સિસ્ટમ્સ અમલમાં મૂક્યા અને એપ્લિકેશન પ્રદર્શન સુધાર્યું.",
      exp3: "આધુનિક ટેક્નોલોજીઓનો ઉપયોગ કરીને શરૂઆતથી ફુલ-સ્ટેક એપ્લિકેશન્સ બનાવ્યા. ઉચ્ચ ગુણવત્તાના ઉત્પાદનો પહોંચાડવા માટે ક્રોસ-ફંક્શનલ ટીમ્સ સાથે સહયોગ કર્યો.",
      exp4: "વેબ ડેવલપમેન્ટ શીખવાથી અને વિવિધ ક્લાયન્ટ પ્રોજેક્ટ્સમાં યોગદાન આપવાથી મારી યાત્રા શરૂ કરી. HTML, CSS, JavaScript અને Reactમાં અનુભવ મેળવ્યો.",
    },

    // Testimonials section
    testimonials: {
      title: "પ્રશંસાપત્રો",
      subtitle: "મારા ક્લાયન્ટ્સ અને સાથીદારો મારી સાથે કામ કરવા વિશે શું કહે છે",
      client1: "Sarah Wilson",
      client2: "Michael Chen",
      client3: "Emily Rodriguez",
      role1: "TechStart ખાતે પ્રોડક્ટ મેનેજર",
      role2: "DataFlow Inc ખાતે CTO",
      role3: "CreativeHub ખાતે ડિઝાઇન ડિરેક્ટર",
      testimonial1: "Alex એ અમારા પ્રોજેક્ટ પર અસાધારણ કામ કર્યું. તેમની વિગતો પ્રત્યેની ધ્યાન અને તકનીકી કુશળતા ટોચના દરજ્જાની છે. ખૂબ ભલામણ કરું છું!",
      testimonial2: "Alex સાથે કામ કરવું એક અદ્ભુત અનુભવ હતો. તેમણે અમારા વિચારોને એક સુંદર અને કાર્યાત્મક વેબ એપ્લિકેશનમાં ફેરવ્યા જેણે અમારી અપેક્ષાઓ વટાવી.",
      testimonial3: "Alex ની નિપુણતા અને વ્યાવસાયિકતા અમારા સમગ્ર પ્રોજેક્ટ દરમિયાન ચમકી. તેમણે સમયસર અને બજેટમાં ઉચ્ચ ગુણવત્તાના સોલ્યુશન્સ પહોંચાડ્યા.",
    },

    // Contact
    contact: {
      title: "ચાલો મળીને",
      titleHighlight: "કામ કરીએ",
      subtitle: "કોઈ પ્રોજેક્ટ મનમાં છે? ચાલો ચર્ચા કરીએ કે અમે તમારા વિચારોને કેવી રીતે જીવંત બનાવી શકીએ. હું હંમેશા નવી તકો અને રસપ્રદ પડકારો માટે ખુલ્લો છું.",
      sendMessage: "સંદેશ મોકલો",
      getInTouch: "સંપર્કમાં રહો",
      availability: "હું હાલમાં ફ્રીલાન્સ કામ અને પૂર્ણ-સમયની તકો માટે ઉપલબ્ધ છું. તમારી પાસે પ્રોજેક્ટ આઈડિયા હોય કે માત્ર હેલો કહેવા માંગતા હોવ, નિઃસંકોચ સંપર્ક કરો!",
      namePlaceholder: "તમારું નામ",
      emailPlaceholder: "તમારો ઈમેલ",
      subjectPlaceholder: "વિષય",
      messagePlaceholder: "તમારો સંદેશ",
      sendButton: "સંદેશ મોકલો",
      availableForWork: "કામ માટે ઉપલબ્ધ",
      responseTime: "હાલમાં નવા પ્રોજેક્ટ્સ અને સહયોગ સ્વીકારી રહ્યો છું. અપેક્ષિત પ્રતિક્રિયા સમય: 24 કલાકની અંદર.",
      successMessage: "સંદેશ સફળતાપૂર્વક મોકલાયો! હું ટૂંક સમયમાં તમારો સંપર્ક કરીશ.",
    },

    // Footer
    footer: {
      rights: "તમામ હક્કો સુરક્ષિત.",
      madeWith: "સાથે બનાવેલ",
      description: "અસાધારણ ડિજિટલ અનુભવો બનાવવા માટે જુસ્સાદાર ફુલ સ્ટેક ડેવલપર.",
    },
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && value[k] !== undefined) {
        value = value[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
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