import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-primary opacity-20 rounded-lg"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-secondary/40 rotate-45"
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-10 w-24 h-24 bg-accent/10 rounded-full blur-sm"
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-1/3 w-14 h-14 border border-accent/50 rounded-full"
        animate={{
          y: [0, 35, 0],
          rotate: [0, 360],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Morphing blobs */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-secondary opacity-10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 0.8, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingShapes;