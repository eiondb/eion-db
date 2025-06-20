import { motion } from "framer-motion";
import AnimatedBackground from "./animated-background";
import eionLogoPath from "@assets/eion-logo-original_1750391475394.jpg";

export default function HeroSection() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen hero-bg flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <img 
            src={eionLogoPath} 
            alt="Eion - The Divine Spark" 
            className="w-24 h-24 rounded-2xl shadow-2xl border-2"
            style={{ borderColor: 'var(--eion-cream)' }}
          />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight"
          style={{ 
            color: 'var(--eion-cream)',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
          }}
        >
          When AI Minds Touch
        </motion.h1>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
          style={{ color: 'rgba(240, 224, 199, 0.8)' }}
        >
          Eion provides unified knowledge graph capabilities for multi-agent systems, enabling the first shared thought between artificial minds.
        </motion.p>
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a 
            href="#quickstart" 
            onClick={(e) => handleSmoothScroll(e, '#quickstart')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl font-semibold transition-all shadow-lg"
            style={{ 
              backgroundColor: 'var(--eion-cream)', 
              color: 'var(--eion-navy)' 
            }}
          >
            Get Started
          </motion.a>
          <motion.a 
            href="#features" 
            onClick={(e) => handleSmoothScroll(e, '#features')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 px-8 py-4 rounded-xl font-semibold transition-all"
            style={{ 
              borderColor: 'var(--eion-cream)', 
              color: 'var(--eion-cream)' 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--eion-cream)';
              e.currentTarget.style.color = 'var(--eion-navy)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--eion-cream)';
            }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
