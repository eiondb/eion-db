import eionLogoPath from "@assets/eion-logo-original_1750391475394.jpg";

export default function Footer() {
  const resourceLinks = [
    { name: "Documentation", href: "#" }
  ];

  const connectLinks = [
    { name: "GitHub", href: "https://github.com/eion" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-12 section-reveal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={eionLogoPath} 
                alt="Eion Logo" 
                className="w-8 h-8 rounded-lg" 
              />
              <span className="text-xl font-semibold" style={{ color: 'var(--eion-navy)' }}>
                Eion
              </span>
            </div>
            <p className="text-gray-600 max-w-md">
              Enabling the first shared thoughts in artificial intelligence.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 hover:text-[var(--eion-navy)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <ul className="space-y-2">
              {connectLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-600 hover:text-[var(--eion-navy)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © 2025 Eion
          </p>
        </div>
      </div>
    </footer>
  );
}
