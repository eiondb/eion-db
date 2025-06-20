import { motion } from "framer-motion";

export default function AnimatedBackground() {
  // Generate random positions for floating nodes
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 1.5,
    delay: Math.random() * 3
  }));

  return (
    <div className="absolute inset-0 opacity-30">
      {/* Floating geometric nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="connection-node absolute rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: `${node.size}rem`,
            height: `${node.size}rem`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: node.delay,
          }}
        />
      ))}
      
      {/* Connection lines SVG */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'var(--eion-cream)', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: 'var(--eion-teal)', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        
        {/* More connection lines for richer visual */}
        <motion.line
          x1="15%" y1="20%" x2="25%" y2="35%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        
        <motion.line
          x1="75%" y1="25%" x2="65%" y2="40%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
        />
        
        <motion.line
          x1="30%" y1="70%" x2="45%" y2="55%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 }}
        />
        
        <motion.line
          x1="80%" y1="35%" x2="70%" y2="65%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
        />
        
        <motion.line
          x1="10%" y1="60%" x2="35%" y2="45%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.5 }}
        />
        
        <motion.line
          x1="85%" y1="70%" x2="60%" y2="50%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2.5 }}
        />
      </svg>
    </div>
  );
}
