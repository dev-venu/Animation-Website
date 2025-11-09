

import { motion } from 'framer-motion';

// 1. Define variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between child animations
    }
  }
};

// 2. Define variants for the child items
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100 } 
  }
};

const Hero = () => {
  return (
    <motion.section 
      id="home"
      className="h-[calc(100vh-64px)] flex flex-col justify-center items-center bg-gray-900 text-white p-8"
      variants={containerVariants}
      initial="hidden" // Apply initial state
      animate="visible" // Animate to visible state
    >
      <motion.h1 
        className="text-7xl font-extrabold mb-4 text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600"
        variants={itemVariants} // Apply item animation
      >
        Fluid Animations, **Next-Gen UX**
      </motion.h1>
      
      <motion.p 
        className="text-2xl text-gray-400 mb-10 max-w-2xl text-center"
        variants={itemVariants}
      >
        Building modern, highly performant frontend with React, Tailwind, and the magic of Framer Motion.
      </motion.p>
      
      <motion.button 
        className="px-8 py-4 bg-indigo-600 text-white text-lg rounded-full shadow-2xl hover:bg-indigo-700 transition duration-300"
        variants={itemVariants}
        whileHover={{ scale: 1.1, rotate: 2 }} // Interactive hover effect
        whileTap={{ scale: 0.9 }}
      >
        Start Exploring
      </motion.button>
    </motion.section>
  );
};

export default Hero;