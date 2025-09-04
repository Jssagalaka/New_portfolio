import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "Alex delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise helped us increase conversion rates by 35%. Highly recommended!",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Working with Alex was fantastic. He built our entire web application from scratch using the MERN stack. The code quality and performance optimization were outstanding.",
      rating: 5,
      project: "SaaS Web Application"
    },
    {
      name: "Emily Watson",
      role: "Founder",
      company: "StartupHub",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Alex transformed our outdated website into a modern, responsive platform. The user experience improvements led to a 60% increase in user engagement. Amazing developer!",
      rating: 5,
      project: "Company Website Redesign"
    },
    {
      name: "David Kim",
      role: "Project Manager",
      company: "DigitalFlow",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Alex's expertise in React and Node.js helped us launch our MVP ahead of schedule. His problem-solving skills and communication throughout the project were exceptional.",
      rating: 5,
      project: "MVP Development"
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Director",
      company: "GrowthTech",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      content: "The mobile-responsive design Alex created for us is absolutely stunning. Our mobile traffic increased by 80% after the launch. Professional and reliable!",
      rating: 5,
      project: "Mobile-First Website"
    },
    {
      name: "James Wilson",
      role: "CEO",
      company: "FutureTech",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      content: "Alex integrated complex AI features into our platform seamlessly. His understanding of modern technologies and best practices is impressive. Would hire again!",
      rating: 5,
      project: "AI Integration Project"
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
          <h2 className="text-4xl font-bold gradient-text mb-6">Client Testimonials</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What clients say about working with me on their projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass glass-hover rounded-2xl p-6 hover-tilt relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Project */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                  {testimonial.project}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 glass glass-hover rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">100+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">4.9</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;