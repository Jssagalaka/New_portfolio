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
      projects: "Projects",
      testimonials: "Testimonials",
      contact: "Contact",
      hireMe: "Hire Me",
    },

    // Hero section
    hero: {
      greeting: "Hi, I'm",
      name: "Jaydeep Sagalka",
      role1: "MERN Stack Developer",
      role2: "Full Stack Developer",
      role3: "React Developer",
      role4: "Backend Developer",
      description: "Proficient MERN Stack Developer with 2 years of experience in building scalable, efficient, and dynamic web solutions",
      downloadCV: "Download CV",
    },

    // About section
    about: {
      title: "About Me",
      subtitle: "Who I am and what I do",
      heading: "Let's get to know each other",
      description1:
        "I am a proficient MERN Stack Developer with 2 years of professional experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. My expertise lies in creating scalable, efficient, and dynamic web solutions.",
      description2:
        "From designing responsive front-end interfaces to implementing robust back-end services, I bring a comprehensive approach to modern web development. I am passionate about writing clean, maintainable code and staying updated with the latest technologies.",
      expertise: {
        web: "Expert in Web Development",
        mobile: "Mobile Responsive Design",
        backend: "Backend Architecture",
        design: "UI/UX Design",
      },
      button: "View My Work",
      highlights: {
        experience: "Years Experience",
        projects: "Projects Completed",
        clients: "Happy Clients",
        satisfaction: "CGPA",
      },
      journey: {
        title: "My Journey",
        start: "Completed BCA from BKNMU University",
        first: "Started at Neuralquark Technology",
        growth: "Built full-stack applications with MERN",
        senior: "Joined Elementals Technologies",
        present: "Leading API development & deployments",
      },
      services: {
        title: "What I Do",
        web: {
          title: "Web Development",
          desc: "Building responsive websites with modern technologies",
        },
        mobile: {
          title: "Mobile Apps",
          desc: "Cross-platform mobile applications",
        },
        backend: {
          title: "Backend Development",
          desc: "Scalable server-side solutions",
        },
        design: {
          title: "UI/UX Design",
          desc: "Beautiful and user-friendly interfaces",
        },
      },
      yearsExperience: "Years Experience",
      projectsCompleted: "Projects Completed",
      happyClients: "Happy Clients",
      codeCommits: "Code Commits",
      techStack: "Tech Stack",
    },

    // Skills section
    skills: {
      title: "My Skills",
      subtitle: "Technologies and tools I use to bring ideas to life",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Mobile & Tools",
      ai: "AI & Modern Tech",
      performance: "Performance",
      proficiency: "Proficiency",
    },

    // Experience section
    experience: {
      title: "My Experience",
      subtitle: "A journey through my professional development career",
      present: "Present",
      company1: "Elementals Technologies",
      position1: "MERN Stack Developer",
      duration1: "June 2024 - Present",
      exp1: "Built secure, scalable APIs using Node.js, Express, and MongoDB. Led authentication, role-based access, and production deployments with Git collaboration. Performed debugging and troubleshooting to optimize code and improve application performance.",
      company2: "Neuralquark Technology",
      position2: "MERN Stack Developer",
      duration2: "March 2023 - April 2024",
      exp2: "Developed full-stack web apps with React and Tailwind CSS. Integrated APIs, implemented JWT auth, and supported Agile team workflows. Gained hands-on experience with full-stack development and utilized Git for version control.",
      education: "Education",
      degree: "BCA (Bachelor of Computer Application)",
      university: "BKNMU University",
      graduationYear: "2020-2023",
      cgpa: "CGPA: 8.5",
      certifications: "Certifications",
    },

    // Projects section
    projects: {
      title: "Featured Projects",
      subtitle: "Here are some of my recent projects that showcase my skills and experience",
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
      email: "jaydeepsagalaka@gmail.com",
      location: "Keshod, Gujarat, India",
      phone: "+91 9979583428",
      faq: {
        title: "Frequently Asked Questions",
        q1: "What is your response rate?",
        a1: "I typically respond to all inquiries within 24 hours.",
        q2: "Do you work remotely?",
        a2: "Yes, I'm comfortable working remotely and have experience with clients worldwide.",
        q3: "How does your pricing work?",
        a3: "Pricing varies based on project complexity and timeline. Contact me for a detailed quote.",
        q4: "Do you take on long-term projects?",
        a4: "Yes, I'm available for both short-term and long-term projects.",
      },
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
      projects: "प्रोजेक्ट्स",
      testimonials: "प्रशंसापत्र",
      contact: "संपर्क",
      hireMe: "मुझे नियुक्त करें",
    },

    // Hero section
    hero: {
      greeting: "नमस्ते, मैं हूँ",
      name: "जयदीप सागलका",
      role1: "MERN स्टैक डेवलपर",
      role2: "फुल स्टैक डेवलपर",
      role3: "रिएक्ट डेवलपर",
      role4: "बैकएंड डेवलपर",
      description: "2 साल के अनुभव के साथ कुशल MERN स्टैक डेवलपर, स्केलेबल, कुशल और डायनामिक वेब समाधान बनाने में माहिर",
      downloadCV: "CV डाउनलोड करें",
    },

    // About section
    about: {
      title: "मेरे बारे में",
      subtitle: "मैं कौन हूं और मैं क्या करता हूं",
      heading: "चलिए एकदूसरे को जानते हैं",
      description1:
        "मैं 2 साल के पेशेवर अनुभव के साथ एक कुशल MERN स्टैक डेवलपर हूं, जो MongoDB, Express.js, React.js और Node.js का उपयोग करके फुल-स्टैक वेब एप्लिकेशन बनाता हूं। मेरी विशेषता स्केलेबल, कुशल और डायनामिक वेब समाधान बनाने में है।",
      description2:
        "रिस्पॉन्सिव फ्रंट-एंड इंटरफेस डिज़ाइन करने से लेकर मज़बूत बैक-एंड सेवाओं को लागू करने तक, मैं आधुनिक वेब विकास के लिए एक व्यापक दृष्टिकोण लाता हूं। मैं क्लीन, मेंटेनेबल कोड लिखने और नवीनतम तकनीकों के साथ अपडेट रहने का शौकीन हूं।",
      expertise: {
        web: "वेब डेवलपमेंट में माहिर",
        mobile: "मोबाइल रेस्पॉन्सिव डिज़ाइन",
        backend: "बैकएंड आर्किटेक्चर",
        design: "यूआई/यूएक्स डिज़ाइन",
      },
      button: "मेरा काम देखें",
      highlights: {
        experience: "वर्षों का अनुभव",
        projects: "पूर्ण परियोजनाएं",
        clients: "खुश ग्राहक",
        satisfaction: "CGPA",
      },
      journey: {
        title: "मेरी यात्रा",
        start: "BKNMU विश्वविद्यालय से BCA पूर्ण किया",
        first: "न्यूरलक्वार्क टेक्नोलॉजी में शुरुआत",
        growth: "MERN के साथ फुल-स्टैक एप्लिकेशन बनाए",
        senior: "एलिमेंटल्स टेक्नोलॉजीज में शामिल हुए",
        present: "API डेवलपमेंट और डिप्लॉयमेंट का नेतृत्व",
      },
      services: {
        title: "मैं क्या करता हूं",
        web: {
          title: "वेब डेवलपमेंट",
          desc: "आधुनिक तकनीकों का उपयोग करके रिस्पॉन्सिव वेबसाइट बनाना",
        },
        mobile: {
          title: "मोबाइल ऐप्स",
          desc: "क्रॉस-प्लेटफॉर्म मोबाइल एप्लिकेशन",
        },
        backend: {
          title: "बैकएंड डेवलपमेंट",
          desc: "स्केलेबल सर्वर-साइड समाधान",
        },
        design: {
          title: "यूआई/यूएक्स डिज़ाइन",
          desc: "सुंदर और उपयोगकर्ता-अनुकूल इंटरफेस",
        },
      },
      yearsExperience: "वर्षों का अनुभव",
      projectsCompleted: "पूर्ण प्रोजेक्ट्स",
      happyClients: "खुश ग्राहक",
      codeCommits: "कोड कमिट्स",
      techStack: "तकनीकी स्टैक",
    },

    // Skills section
    skills: {
      title: "मेरे कौशल",
      subtitle: "विचारों को जीवंत बनाने के लिए मैं जिन तकनीकों और उपकरणों का उपयोग करता हूँ",
      frontend: "फ्रंटएंड",
      backend: "बैकएंड",
      database: "डेटाबेस",
      tools: "मोबाइल और उपकरण",
      ai: "AI और आधुनिक तकनीक",
      performance: "प्रदर्शन",
      proficiency: "निपुणता",
    },

    // Experience section
    experience: {
      title: "मेरा अनुभव",
      subtitle: "मेरी पेशेवर विकास कैरियर की यात्रा",
      present: "वर्तमान",
      company1: "एलिमेंटल्स टेक्नोलॉजीज",
      position1: "MERN स्टैक डेवलपर",
      duration1: "जून 2024 - वर्तमान",
      exp1: "Node.js, Express और MongoDB का उपयोग करके सुरक्षित, स्केलेबल API बनाए। प्रमाणीकरण, भूमिका-आधारित पहुंच, और Git सहयोग के साथ प्रोडक्शन डिप्लॉयमेंट का नेतृत्व किया। कोड को अनुकूलित करने और एप्लिकेशन प्रदर्शन में सुधार के लिए डिबगिंग और ट्रबलशूटिंग की।",
      company2: "न्यूरलक्वार्क टेक्नोलॉजी",
      position2: "MERN स्टैक डेवलपर",
      duration2: "मार्च 2023 - अप्रैल 2024",
      exp2: "React और Tailwind CSS के साथ फुल-स्टैक वेब ऐप विकसित किए। API एकीकृत किए, JWT प्रमाणीकरण लागू किया, और Agile टीम वर्कफ़्लो का समर्थन किया। फुल-स्टैक डेवलपमेंट का व्यावहारिक अनुभव प्राप्त किया और संस्करण नियंत्रण के लिए Git का उपयोग किया।",
      education: "शिक्षा",
      degree: "BCA (बैचलर ऑफ कंप्यूटर एप्लीकेशन)",
      university: "BKNMU यूनिवर्सिटी",
      graduationYear: "2020-2023",
      cgpa: "CGPA: 8.5",
      certifications: "प्रमाणपत्र",
    },

    // Projects section
    projects: {
      title: "विशेष प्रोजेक्ट्स",
      subtitle: "ये मेरे कुछ हाल के प्रोजेक्ट्स हैं जो मेरे कौशल और अनुभव को प्रदर्शित करते हैं",
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
      email: "jaydeepsagalaka@gmail.com",
      location: "केशोड, गुजरात, भारत",
      phone: "+91 9979583428",
      faq: {
        title: "अक्सर पूछे जाने वाले प्रश्न",
        q1: "आपकी उत्तर दर क्या है?",
        a1: "मैं आमतौर पर 24 घंटों के भीतर सभी पूछताछ का जवाब देता हूं।",
        q2: "क्या आप दूर से काम करते हैं?",
        a2: "हां, मैं दूर से काम करने में सहज हूं और दुनिया भर के ग्राहकों के साथ काम करता हूं।",
        q3: "आपकी मूल्य निर्धारण कैसे काम करता है?",
        a3: "परियोजना की जटिलता और समयरेखा के आधार पर मूल्य निर्धारण अलग-अलग होता है। मुझसे विस्तृत उद्धरण के लिए संपर्क करें।",
        q4: "क्या आप दीर्घकालिक परियोजनाओं को लेते हैं?",
        a4: "हां, मैं अल्पकालिक और दीर्घकालिक दोनों परियोजनाओं के लिए उपलब्ध हूं।",
      },
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
      projects: "પ્રોજેક્ટ્સ",
      testimonials: "પ્રશંસાપત્રો",
      contact: "સંપર્ક",
      hireMe: "મને હાયર કરો",
    },

    // Hero section
    hero: {
      greeting: "નમસ્તે, હું છું",
      name: "જયદીપ સાગલકા",
      role1: "MERN સ્ટેક ડેવલપર",
      role2: "ફુલ સ્ટેક ડેવલપર",
      role3: "રિએક્ટ ડેવલપર",
      role4: "બેકએન્ડ ડેવલપર",
      description: "2 વર્ષના અનુભવ સાથે કુશળ MERN સ્ટેક ડેવલપર, સ્કેલેબલ, કાર્યક્ષમ અને ડાયનેમિક વેબ સોલ્યુશન્સ બનાવવામાં નિષ્ણાત",
      downloadCV: "CV ડાઉનલોડ કરો",
    },

    // About section
    about: {
      title: "મારા વિશે",
      subtitle: "હું કોણ છું અને હું શું કરું છું",
      heading: "ચાલો એકબીજાને ઓળખીએ",
      description1: "હું 2 વર્ષના વ્યાવસાયિક અનુભવ સાથે એક કુશળ MERN સ્ટેક ડેવલપર છું, જે MongoDB, Express.js, React.js અને Node.jsનો ઉપયોગ કરીને ફુલ-સ્ટેક વેબ એપ્લિકેશન્સ બનાવું છું. મારી નિપુણતા સ્કેલેબલ, કાર્યક્ષમ અને ડાયનેમિક વેબ સોલ્યુશન્સ બનાવવામાં છે.",
      description2: "રિસ્પોન્સિવ ફ્રન્ટ-એન્ડ ઇન્ટરફેસ ડિઝાઇન કરવાથી લઈને મજબૂત બેક-એન્ડ સેવાઓ લાગુ કરવા સુધી, હું આધુનિક વેબ ડેવલપમેન્ટ માટે વ્યાપક અભિગમ લાવું છું. હું ક્લીન, મેઇન્ટેનેબલ કોડ લખવામાં અને નવીનતમ ટેક્નોલોજી સાથે અપડેટ રહેવાનો શોખીન છું.",
      expertise: { web: "વેબ ડેવલપમેન્ટમાં નિષ્ણાત", mobile: "મોબાઇલ રિસ્પોન્સિવ ડિઝાઇન", backend: "બેકએન્ડ આર્કિટેક્ચર", design: "UI/UX ડિઝાઇન" },
      button: "મારું કામ જુઓ",
      highlights: { experience: "વર્ષોનો અનુભવ", projects: "પ્રોજેક્ટ્સ પૂર્ણ", clients: "ખુશ ક્લાયન્ટ્સ", satisfaction: "CGPA" },
      journey: { title: "મારી યાત્રા", start: "BKNMU યુનિવર્સિટીમાંથી BCA પૂર્ણ કરી", first: "ન્યુરલક્વાર્ક ટેક્નોલોજીમાં શરૂઆત", growth: "MERN સાથે ફુલ-સ્ટેક એપ્લિકેશન્સ બનાવ્યા", senior: "એલિમેન્ટલ્સ ટેક્નોલોજીઝમાં જોડાયા", present: "API ડેવલપમેન્ટ અને ડિપ્લોયમેન્ટનું નેતૃત્વ" },
      services: { title: "હું શું કરું છું", web: { title: "વેબ ડેવલપમેન્ટ", desc: "આધુનિક ટેકનોલોજી સાથે રિસ્પોન્સિવ વેબસાઇટ્સ બનાવવી" }, mobile: { title: "મોબાઇલ એપ્સ", desc: "ક્રોસ-પ્લેટફોર્મ મોબાઇલ એપ્લિકેશન્સ" }, backend: { title: "બેકએન્ડ ડેવલપમેન્ટ", desc: "સ્કેલેબલ સર્વર-સાઇડ સોલ્યુશન્સ" }, design: { title: "UI/UX ડિઝાઇન", desc: "સુંદર અને વપરાશકર્તા-મૈત્રીપૂર્ણ ઇન્ટરફેસ" } },
      yearsExperience: "વર્ષોનો અનુભવ", projectsCompleted: "પૂર્ણ થયેલા પ્રોજેક્ટ્સ", happyClients: "ખુશ ક્લાયન્ટ્સ", codeCommits: "કોડ કમિટ્સ", techStack: "ટેક સ્ટેક",
    },

    // Skills section
    skills: {
      title: "મારી કુશળતાઓ",
      subtitle: "વિચારોને જીવંત બનાવવા માટે હું જે ટેક્નોલોજીઓ અને ટૂલ્સનો ઉપયોગ કરું છું",
      frontend: "ફ્રન્ટએન્ડ",
      backend: "બેકએન્ડ",
      database: "ડેટાબેસ",
      tools: "મોબાઇલ અને ટૂલ્સ",
      ai: "AI અને આધુનિક ટેક",
      performance: "પ્રદર્શન",
      proficiency: "પ્રાવીણ્ય",
    },

    // Experience section
    experience: {
      title: "મારો અનુભવ",
      subtitle: "મારી વ્યાવસાયિક ડેવલપમેન્ટ કારકિર્દીની યાત્રા",
      present: "વર્તમાન",
      company1: "એલિમેન્ટલ્સ ટેક્નોલોજીઝ",
      position1: "MERN સ્ટેક ડેવલપર",
      duration1: "જૂન 2024 - વર્તમાન",
      exp1: "Node.js, Express અને MongoDBનો ઉપયોગ કરીને સુરક્ષિત, સ્કેલેબલ API બનાવ્યા. પ્રમાણીકરણ, ભૂમિકા-આધારિત ઍક્સેસ, અને Git સહયોગ સાથે પ્રોડક્શન ડિપ્લોયમેન્ટનું નેતૃત્વ કર્યું. કોડને ઑપ્ટિમાઇઝ કરવા અને એપ્લિકેશન પ્રદર્શન સુધારવા માટે ડીબગિંગ અને ટ્રબલશૂટિંગ કર્યું.",
      company2: "ન્યુરલક્વાર્ક ટેક્નોલોજી",
      position2: "MERN સ્ટેક ડેવલપર",
      duration2: "માર્ચ 2023 - એપ્રિલ 2024",
      exp2: "React અને Tailwind CSS સાથે ફુલ-સ્ટેક વેબ એપ્સ વિકસાવી. API એકીકૃત કર્યા, JWT પ્રમાણીકરણ લાગુ કર્યું, અને Agile ટીમ વર્કફ્લોને સમર્થન આપ્યું. ફુલ-સ્ટેક ડેવલપમેન્ટનો પ્રત્યક્ષ અનુભવ મેળવ્યો અને વર્ઝન કંટ્રોલ માટે Gitનો ઉપયોગ કર્યો.",
      education: "શિક્ષણ",
      degree: "BCA (બેચલર ઓફ કમ્પ્યુટર એપ્લિકેશન)",
      university: "BKNMU યુનિવર્સિટી",
      graduationYear: "2020-2023",
      cgpa: "CGPA: 8.5",
      certifications: "પ્રમાણપત્રો",
    },

    // Projects section
    projects: {
      title: "વિશેષ પ્રોજેક્ટ્સ",
      subtitle: "આ મારા કેટલાક તાજેતરના પ્રોજેક્ટ્સ છે જે મારી કુશળતા અને અનુભવને દર્શાવે છે",
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
      email: "jaydeepsagalaka@gmail.com",
      location: "કેશોડ, ગુજરાત, ભારત",
      phone: "+91 9979583428",
      faq: {
        title: "વારંવાર પૂછાતા પ્રશ્નો",
        q1: "તમારો પ્રતિસાદ દર શું છે?",
        a1: "હું સામાન્ય રીતે 24 કલાકની અંદર તમામ પૂછપરછનો જવાબ આપું છું.",
        q2: "શું તમે રિમોટલી કામ કરો છો?",
        a2: "હા, હું રિમોટલી કામ કરવામાં આરામદાયક છું અને વિશ્વભરના ક્લાયન્ટ્સ સાથે અનુભવ ધરાવું છું.",
        q3: "તમારું ભાવ નિર્ધારણ કેવી રીતે કામ કરે છે?",
        a3: "પ્રોજેક્ટની જટિલતા અને સમયરેખાના આધારે ભાવ નિર્ધારણ બદલાય છે. વિગતવાર ભાવ માટે મારો સંપર્ક કરો.",
        q4: "શું તમે લાંબા ગાળાના પ્રોજેક્ટ્સ લો છો?",
        a4: "હા, હું ટૂંકા ગાળા અને લાંબા ગાળા બંને પ્રોજેક્ટ્સ માટે ઉપલબ્ધ છું.",
      },
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