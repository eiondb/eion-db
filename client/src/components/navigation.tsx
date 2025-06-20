import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import eionLogoPath from "@assets/eion-logo-original_1750391475394.jpg";
import { useGitHubStars } from "@/hooks/use-github-stars";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { formattedStars, loading } = useGitHubStars('https://api.github.com/repos/eiondb/eion');

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
              href="https://pypi.org/project/eiondb/" 
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://github.com/eiondb/eion" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 border-2"
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="flex items-center gap-1">
                {loading ? '...' : formattedStars ? `${formattedStars}` : ''}
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
