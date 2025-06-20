import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import eionLogoPath from "@assets/eion-logo-original_1750391475394.jpg";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg border-b border-gray-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={eionLogoPath} 
              alt="Eion Logo" 
              className={`w-8 h-8 rounded-lg transition-all duration-300 ${
                !isScrolled ? 'border-2' : ''
              }`}
              style={{ 
                borderColor: !isScrolled ? 'var(--eion-cream)' : 'transparent'
              }}
            />
            <span 
              className="text-xl font-semibold transition-colors duration-300"
              style={{ 
                color: isScrolled ? 'var(--eion-navy)' : 'var(--eion-cream)'
              }}
            >
              Eion
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              onClick={(e) => handleSmoothScroll(e, '#features')}
              className="transition-colors duration-300"
              style={{
                color: isScrolled ? 'rgb(75, 85, 99)' : 'rgba(240, 224, 199, 0.9)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isScrolled ? 'var(--eion-navy)' : 'var(--eion-cream)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isScrolled ? 'rgb(75, 85, 99)' : 'rgba(240, 224, 199, 0.9)';
              }}
            >
              Features
            </a>
            <a 
              href="#quickstart" 
              onClick={(e) => handleSmoothScroll(e, '#quickstart')}
              className="transition-colors duration-300"
              style={{
                color: isScrolled ? 'rgb(75, 85, 99)' : 'rgba(240, 224, 199, 0.9)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isScrolled ? 'var(--eion-navy)' : 'var(--eion-cream)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isScrolled ? 'rgb(75, 85, 99)' : 'rgba(240, 224, 199, 0.9)';
              }}
            >
              Quickstart
            </a>
            <a 
              href="#docs" 
              className="transition-colors duration-300"
              style={{
                color: isScrolled ? 'rgb(75, 85, 99)' : 'rgba(240, 224, 199, 0.9)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isScrolled ? 'var(--eion-navy)' : 'var(--eion-cream)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isScrolled ? 'rgb(75, 85, 99)' : 'rgba(240, 224, 199, 0.9)';
              }}
            >
              Docs
            </a>
            <a 
              href="https://github.com/eion" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg transition-all duration-300 border-2"
              style={{ 
                backgroundColor: isScrolled ? 'var(--eion-navy)' : 'transparent',
                color: isScrolled ? 'white' : 'var(--eion-cream)',
                borderColor: isScrolled ? 'var(--eion-navy)' : 'var(--eion-cream)'
              }}
              onMouseEnter={(e) => {
                if (isScrolled) {
                  e.currentTarget.style.backgroundColor = 'var(--eion-dark)';
                } else {
                  e.currentTarget.style.backgroundColor = 'var(--eion-cream)';
                  e.currentTarget.style.color = 'var(--eion-navy)';
                }
              }}
              onMouseLeave={(e) => {
                if (isScrolled) {
                  e.currentTarget.style.backgroundColor = 'var(--eion-navy)';
                } else {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--eion-cream)';
                }
              }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
