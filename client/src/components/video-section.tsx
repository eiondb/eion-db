import { motion } from "framer-motion";
import eionDemoVideo from "@assets/eion-demo-long.mp4";

export default function VideoSection() {
  return (
    <section className="py-20 section-reveal" style={{ background: 'linear-gradient(to bottom right, rgba(240, 224, 199, 0.2), rgba(74, 144, 164, 0.1))' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--eion-navy)' }}>
            See Eion in Action
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Watch how multiple AI agents seamlessly connect and share knowledge through EionDB's unified platform, creating a truly collaborative intelligence system.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 p-8 shadow-xl">
            <video 
              className="w-full rounded-xl shadow-lg"
              controls
              preload="metadata"
              poster=""
            >
              <source src={eionDemoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 