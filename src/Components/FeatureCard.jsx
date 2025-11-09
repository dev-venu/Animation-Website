import { motion } from "framer-motion";

const FeatureCard = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      className="p-6 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 hover:border-indigo-500 transition duration-500 cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}             // Start faded and small
      whileInView={{ opacity: 1, scale: 1 }}          // Animate into full view
      viewport={{ once: true, amount: 0.4 }}      // Trigger once when 40% visible
      transition={{ duration: 0.6, delay: delay }} // Staggered scroll animation
      whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.5)" }} // Lift and glow on hover
    >
      <div className="text-4xl text-indigo-400 mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;