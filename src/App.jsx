// src/App.jsx

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FeatureCard from "./Components/FeatureCard";


const featuresData = [
  { title: "Blazing Fast", description: "Minimal CSS and performant React combine for rapid load times.", icon: "⚡", delay: 0 },
  { title: "Fully Responsive", description: "Tailwind's utilities ensure a flawless layout on every device.", icon: "📱", delay: 0.2 },
  { title: "Smooth Transitions", description: "Framer Motion brings fluid and engaging user interactions.", icon: "✨", delay: 0.4 },
];

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">The Power Trio</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuresData.map((feature) => (
                <FeatureCard 
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  delay={feature.delay}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section Placeholder */}
        <section id="contact" className="py-32 bg-gray-800 text-white">
            <h2 className="text-4xl font-bold text-center">Get in Touch</h2>
            <p className="text-center text-gray-400 mt-4">This section can be animated with a parallax effect or form entrance.</p>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 p-6 text-center text-gray-500 border-t border-gray-700">
            <p>&copy; 2025 Animated WebSite. Built with React, Tailwind CSS, & Framer Motion.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;