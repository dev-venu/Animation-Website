

import { motion } from 'framer-motion';


const Navbar = () => {
  const navItems = ['Home', 'Features', 'Contact'];

  return (
    <motion.nav
      className="bg-gray-800 p-4 shadow-xl sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }} // Start above and invisible
      animate={{ y: 0, opacity: 1 }}     // Slide down and fade in
      transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-400">AnimatedSite</h1>
        <div className="space-x-4 hidden md:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href= {`#${item.toLowerCase()}`}
              className="text-white hover:text-indigo-400 transition duration-300 px-3 py-1 rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }} // Staggered fade in for links
              whileHover={{ scale: 1.1, color: '#a5b4fc' }} // Interactive hover effect
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;